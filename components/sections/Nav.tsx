"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagneticButton } from "@/lib/hooks";

const links = [
  { href: "#what", label: "What We Do", page: false },
  { href: "#how", label: "How It Works", page: false },
  { href: "#features", label: "Features", page: false },
  { href: "#parents", label: "For Parents", page: false },
  { href: "#pricing", label: "Pricing", page: false },
  { href: "/insights", label: "Study Tips", page: true },
];

function MagneticNavBtn({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const { ref, x, y } = useMagneticButton(0.3);
  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
      data-cursor-hover
    >
      {children}
    </motion.a>
  );
}


export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!isHome) {
      // On non-home pages, navigate to home with the hash
      window.location.href = `/${href}`;
      return;
    }
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const overlayVariants = {
    hidden: { clipPath: "circle(0% at calc(100% - 40px) 37px)", opacity: 0 },
    show: {
      clipPath: "circle(150% at calc(100% - 40px) 37px)",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      clipPath: "circle(0% at calc(100% - 40px) 37px)",
      opacity: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[74px] px-5 md:px-[5%] flex items-center justify-between transition-all duration-400",
          scrolled &&
            "bg-surface/96 backdrop-blur-xl shadow-[0_1px_0_rgba(15,15,26,0.08)]"
        )}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3 no-underline"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 340, damping: 18 }}
          data-cursor-hover
        >
          {/* Icon: portrait rounded rect, gradient bg, glowing arch, road dashes */}
          <svg width="38" height="44" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navIconBg" x1="23" y1="0" x2="23" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2A28A0" />
                <stop offset="100%" stopColor="#5250DC" />
              </linearGradient>
              <radialGradient id="navArchGlow" cx="23" cy="46" r="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="35%" stopColor="rgba(255,255,255,0.55)" />
                <stop offset="65%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {/* Background */}
            <rect width="46" height="52" rx="10" fill="url(#navIconBg)" />
            {/* Glow from inside the arch */}
            <ellipse cx="23" cy="44" rx="21" ry="17" fill="url(#navArchGlow)" />
            {/* Arch outline — white, thick, straight sides + semicircular top */}
            <path
              d="M6 47 L6 22 Q6 5 23 5 Q40 5 40 22 L40 47"
              fill="none"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Road center-line dashes (perspective: bigger near, smaller far) */}
            <rect x="20" y="39" width="6" height="3.5" rx="1.5" fill="white" opacity="0.88" />
            <rect x="20.5" y="33" width="5" height="2.5" rx="1" fill="white" opacity="0.62" />
            <rect x="21" y="28" width="4" height="1.8" rx="0.8" fill="white" opacity="0.42" />
          </svg>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-[2px]">
              <span className="font-syne font-extrabold text-[1.38rem] text-[#4E4BE5] leading-none">Clear</span>
              <span className="font-syne font-black text-[1.38rem] text-ink leading-none"> Steps</span>
            </div>
            <span className="text-[0.52rem] font-semibold text-ink-3 tracking-[0.22em] uppercase mt-[3px]">
              Learning Made Simple
            </span>
          </div>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) =>
            l.page ? (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.88rem] font-medium text-ink-2 hover:text-ink transition-colors relative group cursor-none"
                data-cursor-hover
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-primary scale-x-0 origin-left transition-transform duration-250 group-hover:scale-x-100" />
              </a>
            ) : (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-[0.88rem] font-medium text-ink-2 hover:text-ink transition-colors relative group cursor-none"
                data-cursor-hover
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-primary scale-x-0 origin-left transition-transform duration-250 group-hover:scale-x-100" />
              </button>
            )
          )}
        </div>

        {/* Desktop CTAs — MAGNETIC */}
        <div className="hidden lg:flex items-center gap-2.5">
          <MagneticNavBtn
            href="https://app.clearsteps.co.in/login"
            className="px-5 py-2.5 rounded-full text-[0.85rem] font-semibold text-ink-2 border-[1.5px] border-ink/15 hover:border-ink hover:text-ink transition-all"
          >
            Log In
          </MagneticNavBtn>
          <MagneticNavBtn
            href="https://app.clearsteps.co.in"
            className="px-5 py-2.5 rounded-full text-[0.85rem] font-bold text-white bg-ink hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(78,75,229,0.35)] transition-all"
          >
            Start Free →
          </MagneticNavBtn>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-cursor-hover
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[22px] h-[2px] bg-ink rounded-sm block origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="w-[22px] h-[2px] bg-ink rounded-sm block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[22px] h-[2px] bg-ink rounded-sm block origin-center"
          />
        </motion.button>
      </nav>

      {/* Mobile menu overlay — clip-path reveal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-6 lg:hidden overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-teal/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {links.map((l, i) =>
              l.page ? (
                <motion.a
                  key={l.href}
                  href={l.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  onClick={() => setMenuOpen(false)}
                  className="font-syne text-[2.2rem] font-extrabold text-ink hover:text-primary transition-colors relative group"
                  data-cursor-hover
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
                </motion.a>
              ) : (
                <motion.button
                  key={l.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  onClick={() => handleNavClick(l.href)}
                  className="font-syne text-[2.2rem] font-extrabold text-ink hover:text-primary transition-colors relative group"
                  data-cursor-hover
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
                </motion.button>
              )
            )}

            <motion.div
              custom={links.length}
              variants={linkVariants}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-col gap-3 items-center"
            >
              <a
                href="https://app.clearsteps.co.in"
                className="bg-primary text-white px-10 py-4 rounded-full font-syne font-extrabold text-[1.1rem] hover:bg-ink transition-colors"
                data-cursor-hover
              >
                Start Free →
              </a>
              <a
                href="https://app.clearsteps.co.in/login"
                className="text-[0.88rem] font-semibold text-ink-3 hover:text-ink transition-colors"
                data-cursor-hover
              >
                Already have an account? Log In
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
