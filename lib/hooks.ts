"use client";

import { useRef, useState, useEffect, RefObject } from "react";
import { useMotionValue, useSpring } from "framer-motion";

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
export function useReveal(threshold = 0.12): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ── 3D Card Tilt ──────────────────────────────────────────────────────────────
export function use3DTilt(maxTilt = 7) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(hover: none)");
    if (mq.matches) return;

    let raf = 0;
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;
    let isHovered = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentRX = lerp(currentRX, targetRX, 0.12);
      currentRY = lerp(currentRY, targetRY, 0.12);
      if (isHovered || Math.abs(currentRX) > 0.01 || Math.abs(currentRY) > 0.01) {
        el.style.transform = `perspective(800px) rotateX(${currentRX}deg) rotateY(${currentRY}deg) translateZ(8px)`;
        raf = requestAnimationFrame(animate);
      } else {
        el.style.transform = "";
        raf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      targetRY = ((e.clientX - r.left) / r.width - 0.5) * maxTilt;
      targetRX = -((e.clientY - r.top) / r.height - 0.5) * maxTilt;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    const onEnter = () => { isHovered = true; if (!raf) raf = requestAnimationFrame(animate); };
    const onLeave = () => { isHovered = false; targetRX = 0; targetRY = 0; if (!raf) raf = requestAnimationFrame(animate); };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxTilt]);

  return ref;
}

// ── Magnetic Button ───────────────────────────────────────────────────────────
export function useMagneticButton(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(hover: none)");
    if (mq.matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x.set((e.clientX - (r.left + r.width / 2)) * strength);
      y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => { x.set(0); y.set(0); };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [x, y, strength]);

  return { ref, x: springX, y: springY };
}

// ── Mouse Position for glow effects ───────────────────────────────────────────
export function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return { x, y };
}

// ── Stagger variants ──────────────────────────────────────────────────────────
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInItem = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideLeftItem = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRightItem = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
