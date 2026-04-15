"use client";

import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FastHelp() {
  return (
    <section id="fast-help" className="py-20 bg-bg relative overflow-hidden border-y border-border">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary"
            >
              <Zap size={14} className="fill-primary" /> Rapid Response Guaranteed
            </motion.div>
            <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-text leading-tight">
              Fast Help When Drains Fail
            </h2>
            <p className="text-text/80 font-medium leading-relaxed max-w-xl text-lg">
              A clogged drain is more than an inconvenience. It can lead to bad odors, standing water,
              property damage and even sewage backup if left untreated. That is why our 24/7 drain
              service is built for speed, reliability and real results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="tel:+17247506935" className="flex items-center gap-3 px-6 py-3 bg-[#0A65FC] text-white rounded-lg font-bold shadow-sm hover:shadow-md hover:bg-blue-700 transition-all">
                <Phone size={18} fill="currentColor" /> (724) 750-6935
              </Link>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Arrival in ~60m", icon: Clock, desc: "Fast local response times across the USA." },
              { title: "Licensed Pros", icon: ShieldCheck, desc: "Vetted experts for your peace of mind." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-text mb-2">{item.title}</h4>
                <p className="text-sm text-text/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
