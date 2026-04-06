"use client";

import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FastHelp() {
  return (
    <section id="fast-help" className="py-24 bg-[#111827] relative overflow-hidden border-y border-white/5">
      <div className="container px-10 relative z-10 italic">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary"
            >
              <Zap size={14} className="fill-primary" /> Rapid Response Guaranteed
            </motion.div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Fast Help When <span className="text-primary italic">Drains Fail</span>
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed max-w-xl">
              A clogged drain is more than an inconvenience. It can lead to bad odors, standing water,
              property damage and even sewage backup if left untreated. That is why our 24/7 drain
              service is built for speed, reliability and real results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="tel:+17247506935" className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase italic tracking-widest shadow-glow hover:scale-105 transition-transform">
                <Phone size={18} fill="currentColor" /> (724) 750-6935
              </Link>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Arrival in 60m", icon: Clock, desc: "Fast local response times across the USA." },
              { title: "Licensed Pros", icon: ShieldCheck, desc: "Vetted experts for your peace of mind." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-[#0B1120]/80 border border-white/5 backdrop-blur-md hover:border-primary/30 transition-all"
              >
                <item.icon size={32} className="text-primary mb-6" />
                <h4 className="text-lg font-black uppercase italic tracking-tight text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
