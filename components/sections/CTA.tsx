"use client";

import { motion } from "framer-motion";
import { useMagneticButton, staggerContainer, fadeUpItem } from "@/lib/hooks";
import { Icon } from "@/lib/icons";

function MagneticCTA({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const { ref, x, y } = useMagneticButton(0.4);
  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={className}
      onClick={onClick}
      data-cursor-hover
    >
      {children}
    </motion.a>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="py-28 md:py-36 bg-ink relative overflow-hidden">
      {/* BG animated glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(78,75,229,0.12)_0%,transparent_60%)]" />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full -top-[300px] -right-[150px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(78,75,229,0.09) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full -bottom-[150px] -left-[100px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ rotate: [0, -360], scale: [1, 1.06, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full top-1/2 left-1/4 opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[820px] mx-auto text-center px-5 md:px-[5%]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.15em] uppercase text-white/40 mb-7"
          >
            Ready?
          </motion.div>

          <motion.h2
            variants={fadeUpItem}
            className="font-syne text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-[-0.04em] leading-[1.05] text-white mb-5"
          >
            The board exam only sees
            <br />
            what your child{" "}
            <em className="font-playfair italic not-italic text-amber">writes.</em>
            <br />
            Let&apos;s make it count.
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="text-[1rem] leading-[1.75] text-white/60 mb-12 max-w-[600px] mx-auto"
          >
            Give them the complete learning platform — from understanding a topic
            for the first time to knowing exactly how they&apos;d score in the real
            exam. Start free in 60 seconds.
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
          >
            <MagneticCTA
              href="#pricing"
              className="inline-flex items-center gap-2.5 bg-white text-ink px-8 py-4 rounded-full font-syne font-extrabold text-[0.95rem] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-amber hover:text-white hover:shadow-[0_16px_40px_rgba(245,158,11,0.35)] transition-colors w-full sm:w-auto justify-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Buy for My Child
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticCTA>

            <MagneticCTA
              href="https://app.clearsteps.co.in"
              className="inline-flex items-center gap-2.5 bg-white/8 text-white px-7 py-4 rounded-full font-semibold text-[0.95rem] border border-white/20 hover:bg-white/15 transition-colors w-full sm:w-auto justify-center"
            >
              Start Free First
            </MagneticCTA>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUpItem}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            {[
              "Free plan forever",
              "No credit card required",
              "Cancel anytime",
            ].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-[0.8rem] text-white/35 font-medium">
                <Icon name="check" size={12} className="text-white/50" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
