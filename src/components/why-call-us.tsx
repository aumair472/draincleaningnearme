"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Fast response times, often within 60 minutes.",
  "Licensed and insured professionals.",
  "Nationwide coverage across the United States.",
  "Safe, effective and long-lasting solutions.",
];

export function WhyCallUs() {
  return (
    <section className="py-20 bg-card relative">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-text mb-10 leading-tight">
            Why Homeowners Call Us
          </h2>
          <ul className="grid gap-4">
            {reasons.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-bg border border-border/50 hover:border-border hover:shadow-sm transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 mt-0.5">
                  <CheckCircle2 size={24} strokeWidth={3} />
                </div>
                <span className="text-lg font-bold text-slate-800 transition-colors leading-relaxed">
                  {reason}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
