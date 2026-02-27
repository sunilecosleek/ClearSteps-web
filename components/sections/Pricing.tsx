"use client";

import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem, useMagneticButton } from "@/lib/hooks";

function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  const tiltRef = use3DTilt(plan.popular ? 3 : 5);

  return (
    <motion.div
      ref={tiltRef}
      variants={fadeUpItem}
      className={`rounded-[28px] p-8 sm:p-[34px] border transition-shadow cursor-none ${
        plan.popular
          ? "bg-ink border-none shadow-[0_24px_64px_rgba(15,15,26,0.25)] lg:scale-[1.04]"
          : "bg-white border-ink/8 hover:shadow-[0_28px_56px_rgba(15,15,26,0.1)]"
      }`}
      data-cursor-hover
      style={{ willChange: "transform" }}
    >
      {plan.badge && (
        <div className="inline-block bg-gradient-to-r from-amber to-yellow-600 text-white text-[0.7rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full mb-4">
          {plan.badge}
        </div>
      )}
      <div className={`font-syne font-extrabold text-[1rem] mb-1.5 ${plan.popular ? "text-white" : "text-ink"}`}>
        {plan.name}
      </div>
      <div className={`font-syne font-extrabold text-[2.8rem] tracking-[-0.05em] leading-none mb-1 ${plan.popular ? "text-white" : "text-ink"}`}>
        <sup className="text-[1.1rem] align-super">₹</sup>
        {plan.price}
        {plan.price !== "0" && (
          <sub className={`text-[1rem] font-normal ${plan.popular ? "text-white/40" : "text-ink-3"}`}>
            /mo
          </sub>
        )}
      </div>
      <div className={`text-[0.8rem] mb-6 ${plan.popular ? "text-white/45" : "text-ink-3"}`}>
        {plan.note}
      </div>
      <div className={`h-px mb-5 ${plan.popular ? "bg-white/10" : "bg-ink/7"}`} />
      <ul className="flex flex-col gap-2.5 mb-7">
        {plan.features.map((f) => (
          <li key={f.text} className="flex items-start gap-2.5">
            <svg
              className="w-[17px] h-[17px] flex-shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke={f.included ? (plan.popular ? "#5EEAD4" : "#16A34A") : "#CBD5E1"}
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span
              className={`text-[0.86rem] leading-[1.5] ${
                !f.included
                  ? "text-slate-400"
                  : plan.popular
                  ? "text-white/70"
                  : "text-ink-2"
              }`}
            >
              {f.text}
            </span>
          </li>
        ))}
      </ul>
      <MagneticPricingBtn plan={plan} />
    </motion.div>
  );
}

function MagneticPricingBtn({ plan }: { plan: typeof pricingPlans[0] }) {
  const { ref, x, y } = useMagneticButton(0.25);
  return (
    <motion.a
      ref={ref}
      href="https://app.clearsteps.co.in"
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={`w-full py-3.5 rounded-full font-syne font-bold text-[0.9rem] transition-all text-center block ${
        plan.ctaStyle === "primary"
          ? "bg-gradient-to-r from-amber to-yellow-600 text-white shadow-[0_8px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_14px_32px_rgba(245,158,11,0.4)]"
          : plan.popular
          ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
          : "bg-transparent border-[2px] border-ink/12 text-ink hover:bg-ink hover:text-white hover:border-ink"
      }`}
      data-cursor-hover
    >
      {plan.cta}
    </motion.a>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-8"
        >
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-4">
            Pricing
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink mb-3">
            Less than one tuition session.
            <br />
            <em className="font-playfair italic not-italic text-primary">Every month.</em>
          </motion.h2>
          <motion.p variants={fadeUpItem} className="text-[0.95rem] text-ink-2 mb-5">
            No credit card required. Cancel anytime.
          </motion.p>
          <motion.div variants={fadeUpItem} className="inline-block bg-amber/10 border border-amber/20 rounded-full px-5 py-2 text-[0.82rem] font-semibold text-amber-900">
            The average private tutor charges ₹500–₹1,500 per session. Clear Steps costs less than two sessions — and works every single day.
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto lg:max-w-none items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-7 text-[0.85rem] text-ink-3"
        >
          Start with the free plan. Upgrade when you see the difference.
        </motion.p>
      </div>
    </section>
  );
}
