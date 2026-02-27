"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function ClientShell({ children }: { children: ReactNode }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const mxRef = useRef(0);
  const myRef = useRef(0);
  const rafRef = useRef<number>(0);

  // ── Progress Bar ────────────────────────────────────────────────────────
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (window.scrollY / h) * 100 + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Custom Cursor ───────────────────────────────────────────────────────
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth <= 1024) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.display = "block";
    ring.style.display = "block";

    const onMove = (e: MouseEvent) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const animate = () => {
      rxRef.current += (mxRef.current - rxRef.current) * 0.1;
      ryRef.current += (myRef.current - ryRef.current) * 0.1;
      ring.style.left = rxRef.current + "px";
      ring.style.top = ryRef.current + "px";
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", onMove);

    // Cursor hover state — observe DOM mutations so dynamically added elements work
    const setCursorHover = () => {
      const hovers = document.querySelectorAll("a, button, [data-cursor-hover]");
      hovers.forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
      });
    };
    setCursorHover();

    const observer = new MutationObserver(setCursorHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="progress-bar" />
      <div id="cursor-dot" ref={dotRef} style={{ display: "none" }} />
      <div id="cursor-ring" ref={ringRef} style={{ display: "none" }} />
      {children}
    </>
  );
}
