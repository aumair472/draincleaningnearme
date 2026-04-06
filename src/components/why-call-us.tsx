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
    <section className="py-24 bg-[#0B1120] relative italic">
      <div className="container relative z-10 mx-auto px-4 italic">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-10 leading-none">
            Why <span className="text-primary italic">Homeowners</span> Call Us
          </h2>
          <ul className="grid gap-6">
            {reasons.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#111827]/50 border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckCircle2 size={24} strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-300 group-hover:text-white transition-colors leading-tight">
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
