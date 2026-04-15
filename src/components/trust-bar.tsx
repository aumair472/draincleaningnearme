"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured", color: "text-green-600" },
  { icon: Zap, label: "24/7 Emergency", color: "text-primary" },
  { icon: Clock, label: "Fast Response", color: "text-primary" },
  { icon: DollarSign, label: "Affordable Pricing", color: "text-primary" },
  { icon: CheckCircle2, label: "Satisfaction Guaranteed", color: "text-primary" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-card border-y border-border relative overflow-hidden">
      <div className="container px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 bg-primary/10/50",
                item.color
              )}>
                <item.icon size={20} className="shrink-0" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-text/80 group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
