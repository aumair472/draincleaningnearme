"use client";

import { motion } from "framer-motion";
import { Utensils, Bath, Wind, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const causes = [
  {
    title: "Grease & Food",
    description: "Grease buildup and food particles in kitchen sinks often lead to stubborn backups.",
    icon: Utensils,
  },
  {
    title: "Hair & Soap",
    description: "Hair accumulation and soap residue in bathroom drains and shower systems.",
    icon: Bath,
  },
  {
    title: "Foreign Objects",
    description: "Foreign objects and laundry debris in washing machines and main drain lines.",
    icon: Wind,
  },
];

export function CommonCauses() {
  return (
    <section className="py-24 bg-[#111827] relative border-y border-white/5 italic">
      <div className="container px-20 relative z-10 italic">
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none mb-6">
            Common Causes of <span className="text-primary italic">Clogged Drains</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Drain problems usually build up over time. Some of the most common causes include
            grease, hair, and foreign objects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {causes.map((cause, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-[#0B1120] border border-white/5 text-center transition-all hover:border-primary/30 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-6 transition-transform group-hover:scale-110">
                <cause.icon size={28} />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-white">
                {cause.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-bold uppercase tracking-widest">
                {cause.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
