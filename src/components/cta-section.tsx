"use client";

import { motion } from "framer-motion";
import { Phone, Zap, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  subtitle: string;
  variant?: "primary" | "accent" | "alert";
  showStats?: boolean;
}

export function CTASection({ title, subtitle, variant = "accent", showStats = true }: CTASectionProps) {
  return (
    <section className={cn(
      "py-24 relative border-y border-white/5 overflow-hidden italic",
      variant === "alert" ? "bg-accent/5 border-accent/20" : "bg-[#111827]"
    )}>
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className={cn(
           "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[120px]",
           variant === "primary" ? "bg-primary" : "bg-accent"
         )} />
      </div>

      <div className="container relative z-10 italic mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto text-center lg:text-left">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
               {title}
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-6">
            <Link 
              href="tel:+17247506935" 
              className={cn(
                "group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl w-full sm:w-auto",
                "text-white shadow-accent-glow hover:scale-105 transition-all text-xl font-black uppercase italic tracking-widest",
                variant === "primary" ? "bg-primary shadow-glow" : "bg-accent"
              )}
            >
              <Phone fill="currentColor" size={24} />
              (724) 750-6935
            </Link>
            {showStats && (
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500 italic">
                 <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-primary" /> Licensed Pros
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock size={14} className="text-primary" /> 24/7 Response
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
