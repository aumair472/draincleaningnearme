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
    <section className="py-20 bg-card relative border-y border-border">
      <div className="container px-4 sm:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-text leading-tight mb-6">
            Common Causes of Clogged Drains
          </h2>
          <p className="text-text/80 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
            Drain problems usually build up over time. Some of the most common causes include
            grease, hair, and foreign objects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-8 rounded-xl bg-card border border-border text-center transition-all hover:shadow-md hover:border-primary/20 group flex flex-col items-center h-full"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <cause.icon size={28} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-text group-hover:text-primary transition-colors">
                {cause.title}
              </h3>
              <p className="text-sm text-text/80 leading-relaxed">
                {cause.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
