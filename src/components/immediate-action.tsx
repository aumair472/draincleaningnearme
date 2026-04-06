"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ImmediateAction() {
  return (
    <section id="immediate-action" className="py-24 bg-[#0B1120] relative border-t border-white/5">
      <div className="container relative z-10 italic">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black uppercase tracking-widest text-accent mb-4"
          >
            <AlertTriangle size={14} className="fill-accent text-white" /> Emergency Dispatch Available 24/7
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Why <span className="text-accent italic border-b-4 border-accent/30">Immediate Action</span> Matters
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Every minute counts when drains overflow. A small clog can turn into water damage, sewage 
            backup, mold growth and expensive repairs if you wait too long. If you notice slow 
            drainage, foul smells, or gurgling sounds, call for help right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              href="tel:+17247506935" 
              className={cn(
                "group flex items-center justify-center gap-3 px-12 py-5 rounded-2xl w-full sm:w-auto",
                "bg-accent text-white shadow-accent-glow hover:scale-105 transition-all text-xl font-black uppercase italic tracking-widest"
              )}
            >
              <Phone fill="currentColor" size={24} />
              (724) 750-6935
            </Link>
            <div className="flex items-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              <span className="flex items-center gap-1.5"><Clock size={16} /> 30-60m Dispatch</span>
              <span className="h-4 w-[1px] bg-white/10" />
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> Licensed Pros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
