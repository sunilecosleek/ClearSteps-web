"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/hooks";

const cols = [
  {
    title: "Product",
    links: ["How It Works", "Features", "Pricing", "For Parents", "Free Mock Tests"],
  },
  {
    title: "Subjects",
    links: ["Science", "Mathematics", "Physics & Chemistry", "Biology", "English & SST"],
  },
  {
    title: "Company",
    links: ["About Ecosleek", "Blog", "Contact", "Privacy Policy", "Terms of Service"],
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Brand col */}
          <motion.div variants={fadeUpItem}>
            <a href="/" className="flex items-center gap-2.5 mb-4 no-underline" data-cursor-hover>
              {/* Icon: same brand icon, slightly lighter purple on dark bg */}
              <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="9" fill="#5957F5" />
                {/* Arch outline */}
                <path
                  d="M7 33 L7 18 C7 10.8 13 5 20 5 C27 5 33 10.8 33 18 L33 33"
                  stroke="white"
                  strokeWidth="2.6"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Road perspective lines into the tunnel */}
                <path
                  d="M7 33 L15.5 26.5 M33 33 L24.5 26.5 M15.5 26.5 L24.5 26.5"
                  stroke="rgba(255,255,255,0.62)"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Wordmark — light variant for dark footer */}
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline">
                  <span className="font-syne font-extrabold text-[1.08rem] text-[#9795F8]">Clear</span>
                  <span className="font-syne font-extrabold text-[1.08rem] text-white">Steps</span>
                </div>
                <span className="text-[0.5rem] font-semibold text-white/40 tracking-[0.16em] uppercase mt-[1px]">
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
                    key={link}
                    href="#"
                    className="text-[0.85rem] text-white/50 hover:text-amber transition-colors cursor-none"
                    data-cursor-hover
                  >
                    {link}
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
