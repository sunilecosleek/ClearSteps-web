"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagneticButton } from "@/lib/hooks";

const links = [
  { href: "#what", label: "What We Do" },
  { href: "#how", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#parents", label: "For Parents" },
  { href: "#pricing", label: "Pricing" },
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
        <a
          href="#"
          className="flex items-center gap-2.5 no-underline"
          data-cursor-hover
        >
          <motion.div
            className="w-10 h-10 bg-ink rounded-xl flex items-center justify-center"
            whileHover={{ rotate: -6, scale: 1.1, backgroundColor: "#4E4BE5" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </motion.div>
          <span className="font-syne font-extrabold text-[1.12rem] text-ink tracking-tight">
            Clear Steps
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              className="text-[0.88rem] font-medium text-ink-2 hover:text-ink transition-colors relative group cursor-none"
              data-cursor-hover
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-primary scale-x-0 origin-left transition-transform duration-250 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        {/* Desktop CTAs — MAGNETIC */}
        <div className="hidden lg:flex items-center gap-2.5">
          <MagneticNavBtn
            href="#"
            className="px-5 py-2.5 rounded-full text-[0.85rem] font-semibold text-ink-2 border-[1.5px] border-ink/15 hover:border-ink hover:text-ink transition-all"
          >
            Log In
          </MagneticNavBtn>
          <MagneticNavBtn
            href="#"
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

            {links.map((l, i) => (
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
                {/* underline on hover */}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </motion.button>
            ))}

            <motion.div
              custom={links.length}
              variants={linkVariants}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-col gap-3 items-center"
            >
              <a
                href="#"
                className="bg-primary text-white px-10 py-4 rounded-full font-syne font-extrabold text-[1.1rem] hover:bg-ink transition-colors"
                data-cursor-hover
              >
                Start Free →
              </a>
              <a
                href="#"
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
