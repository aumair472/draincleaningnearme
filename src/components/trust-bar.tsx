"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured", color: "text-green-500" },
  { icon: Zap, label: "24/7 Emergency", color: "text-primary" },
  { icon: Clock, label: "Fast Response", color: "text-primary" },
  { icon: DollarSign, label: "Affordable Pricing", color: "text-primary" },
  { icon: CheckCircle2, label: "Satisfaction Guaranteed", color: "text-primary" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-[#111827] border-y border-white/5 relative overflow-hidden italic">
      <div className="container px-10 relative z-10 italic">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-white/10",
                item.color
              )}>
                <item.icon size={22} className="shrink-0" />
              </div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
