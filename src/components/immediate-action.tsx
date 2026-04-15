"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ImmediateAction() {
  return (
    <section id="immediate-action" className="py-20 bg-accent/10 relative border-y border-accent/20">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card p-10 md:p-14 rounded-xl border border-border shadow-sm transition-all hover:shadow-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-xs font-bold uppercase tracking-widest text-accent mb-2"
          >
            <AlertTriangle size={16} className="text-accent" /> Emergency Dispatch Available 24/7
          </motion.div>
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-text leading-tight">
            Why <span className="text-accent border-b-4 border-orange-200 pb-1">Immediate Action</span> Matters
          </h2>
          <p className="text-lg text-text/80 font-medium leading-relaxed max-w-3xl mx-auto">
            Every minute counts when drains overflow. A small clog can turn into water damage, sewage 
            backup, mold growth and expensive repairs if you wait too long. If you notice slow 
            drainage, foul smells, or gurgling sounds, call for help right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="tel:+17247506935" 
              className={cn(
                "group flex items-center justify-center gap-3 px-8 py-4 rounded-lg w-full sm:w-auto",
                "bg-accent hover:bg-accent/90 text-white shadow-sm hover:shadow-md transition-all font-bold text-lg"
              )}
            >
              <Phone fill="currentColor" size={20} />
              (724) 750-6935
            </Link>
            <div className="flex items-center gap-4 text-text/80 font-bold text-sm">
              <span className="flex items-center gap-2"><Clock size={18} className="text-accent" /> 30-60m Dispatch</span>
              <span className="h-4 w-[1px] bg-gray-300" />
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-accent" /> Licensed Pros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
