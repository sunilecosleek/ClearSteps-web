"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/hooks";

const cols = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "For Parents", href: "#parents" },
      { label: "Study Tips", href: "/insights" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Ecosleek", href: "https://ecosleek.in" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const socials = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/6 pt-14 pb-7">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-12 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Brand col */}
          <motion.div variants={fadeUpItem}>
            <a href="/" className="flex items-center gap-3 mb-4 no-underline" data-cursor-hover>
              {/* Icon — portrait with gradient bg, glowing arch, road dashes */}
              <svg width="38" height="44" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ftIconBg" x1="23" y1="0" x2="23" y2="52" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2A28A0" />
                    <stop offset="100%" stopColor="#5250DC" />
                  </linearGradient>
                  <radialGradient id="ftArchGlow" cx="23" cy="46" r="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                    <stop offset="35%" stopColor="rgba(255,255,255,0.55)" />
                    <stop offset="65%" stopColor="rgba(255,255,255,0.18)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>
                <rect width="46" height="52" rx="10" fill="url(#ftIconBg)" />
                <ellipse cx="23" cy="44" rx="21" ry="17" fill="url(#ftArchGlow)" />
                <path
                  d="M6 47 L6 22 Q6 5 23 5 Q40 5 40 22 L40 47"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <rect x="20" y="39" width="6" height="3.5" rx="1.5" fill="white" opacity="0.88" />
                <rect x="20.5" y="33" width="5" height="2.5" rx="1" fill="white" opacity="0.62" />
                <rect x="21" y="28" width="4" height="1.8" rx="0.8" fill="white" opacity="0.42" />
              </svg>

              {/* Wordmark — light variant for dark footer */}
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-[2px]">
                  <span className="font-syne font-extrabold text-[1.38rem] text-[#8A88F5] leading-none">Clear</span>
                  <span className="font-syne font-black text-[1.38rem] text-white leading-none"> Steps</span>
                </div>
                <span className="text-[0.52rem] font-semibold text-white/40 tracking-[0.22em] uppercase mt-[3px]">
                  Learning Made Simple
                </span>
              </div>
            </a>
            <p className="text-[0.86rem] leading-[1.72] text-white/50 max-w-[260px] mb-5">
              Complete CBSE learning — from concept to exam, with AI at every step. Built by Ecosleek Tech, Hyderabad.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className="w-11 h-11 rounded-[9px] bg-white/7 border border-white/9 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary text-[0.85rem] font-bold cursor-none transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  data-cursor-hover
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link cols */}
          {cols.map((col) => (
            <motion.div key={col.title} variants={fadeUpItem}>
              <h5 className="font-syne font-bold text-[0.8rem] text-white tracking-[0.08em] uppercase mb-4">
                {col.title}
              </h5>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[0.85rem] text-white/50 hover:text-white transition-colors cursor-none"
                    data-cursor-hover
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/7 pt-5 flex flex-wrap items-center justify-between gap-2 text-[0.8rem] text-white/35"
        >
          <div>© 2026 Ecosleek Tech Pvt. Ltd. All rights reserved.</div>
          <div>
            Made with <span className="text-primary">♥</span> in Hyderabad, India 🇮🇳
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
