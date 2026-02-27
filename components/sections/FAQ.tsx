"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";
import { staggerContainer, fadeUpItem, slideLeftItem, slideRightItem } from "@/lib/hooks";
import { Icon } from "@/lib/icons";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Left */}
          <motion.div variants={slideLeftItem}>
            <div className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-5">
              <span className="w-4 h-0.5 bg-primary rounded" />
              FAQ
            </div>
            <h2 className="font-syne text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink mb-4">
              Real questions.
              <br />
              <em className="font-playfair italic not-italic text-amber">
                Straight answers.
              </em>
            </h2>
            <p className="text-[0.92rem] leading-[1.75] text-ink-2 mb-8">
              Still not sure? We&apos;re happy to walk you through it personally.
            </p>

            {/* Contact card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-amber/8 to-teal/6 border border-amber/15 rounded-[18px] p-6 cursor-none"
              data-cursor-hover
            >
              <Icon name="chat-bubble" size={22} className="mb-2 text-amber" />
              <div className="font-syne font-bold text-[0.9rem] text-ink mb-1">
                Talk to us directly
              </div>
              <div className="text-[0.82rem] text-ink-2 leading-[1.65]">
                Email us at{" "}
                <a
                  href="mailto:hello@clearsteps.in"
                  className="text-amber font-semibold hover:underline"
                  data-cursor-hover
                >
                  hello@clearsteps.in
                </a>{" "}
                or message us on WhatsApp — we reply within the hour.
              </div>
            </motion.div>
          </motion.div>

          {/* Right — FAQ items staggered */}
          <motion.div
            variants={slideRightItem}
            className="flex flex-col gap-2.5"
          >
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-20px" }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  open === i ? "border-primary/30" : "border-ink/9"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full px-5 py-[18px] flex items-center justify-between gap-3.5 font-syne font-bold text-[0.9rem] text-left transition-colors hover:bg-surface/50 ${
                    open === i ? "text-primary" : "text-ink"
                  }`}
                  data-cursor-hover
                >
                  <span>{item.q}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0 text-[1rem] leading-none transition-colors ${
                      open === i
                        ? "bg-primary/10 text-primary"
                        : "bg-surface-2 text-ink-3"
                    }`}
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-[18px] text-[0.88rem] leading-[1.72] text-ink-2 border-t border-primary/10 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
