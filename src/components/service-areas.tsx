"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const areas = [
  { name: "New York", href: "/drain-cleaning-nyc" },
  { name: "Los Angeles", href: "/drain-cleaning-los-angeles" },
  { name: "Chicago", href: "/#" },
  { name: "Houston", href: "/#" },
  { name: "Phoenix", href: "/#" },
  { name: "Philadelphia", href: "/#" },
  { name: "San Antonio", href: "/#" },
  { name: "San Diego", href: "/#" },
  { name: "Dallas", href: "/#" },
];

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 bg-[#111827] relative border-y border-white/5">
      <div className="container relative z-10 italic">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-6"
          >
            <MapPin size={14} className="fill-primary" /> Nationwide Service Coverage
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none mb-6">
            Drain Cleaning Service Available <span className="text-primary italic">Nationwide</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            We connect you with licensed local professionals in major metro areas and surrounding 
            communities across the United States. Fast help in all 50 states.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={area.href}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all italic",
                  "bg-primary/5 border border-primary/10 text-primary hover:bg-primary hover:text-white hover:shadow-glow",
                  "group flex items-center gap-2"
                )}
              >
                {area.name}
                <CheckCircle2 size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-[2.5rem] bg-[#0B1120] border border-white/5 text-center max-w-3xl mx-auto italic"
        >
          <p className="text-lg text-slate-300 font-black uppercase tracking-tight mb-8 leading-none">
            Need &quot;Drainage Cleaning Services Near Me&quot; Now?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="tel:+17247506935" className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase italic tracking-widest shadow-glow hover:scale-105 transition-transform">
                <Phone size={18} fill="currentColor" /> (724) 750-6935
             </Link>
          </div>
          <p className="mt-6 text-xs text-slate-500 font-medium tracking-widest uppercase">
            Call anytime 24/7 for a free estimate & fast dispatch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
