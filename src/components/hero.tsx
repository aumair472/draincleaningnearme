"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle2, ShieldCheck, Zap, DollarSign } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-[150px] pb-24 overflow-hidden bg-[#0B1120]">
      {/* Exact Legacy Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-[#00A3FF]/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#FF6B35]/5 blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto italic">
          {/* Legacy Pulse-Dot Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8"
          >
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse-dot" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-accent">
              24/7 Emergency Service — Technicians Standing By
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 text-white leading-[0.95]"
          >
            Professional <span className="text-primary italic">Drain Cleaning</span> & Emergency Service Nationwide
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 mb-10"
          >
            <p className="text-base sm:text-lg text-slate-300 font-bold uppercase tracking-tight max-w-2xl mx-auto leading-relaxed underline decoration-primary/30 decoration-2 underline-offset-4">
              Fast, Reliable Drain Cleaning Near You: Available 24/7.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto text-balance">
              Need drain cleaning near you right now? DrainCleaningNearMe connects homeowners across the USA with
              licensed local professionals for emergency backups, kitchen sink clogs, laundry lines, and full sewer
              cleaning — often in as little as <strong>30 to 60 minutes</strong>.
            </p>
          </motion.div>

          {/* Premium Legacy CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-8"
          >
            <Link
              href="tel:+17247506935"
              className={cn(
                "group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl w-full sm:w-[320px]",
                "bg-accent text-white shadow-accent-glow hover:scale-105 active:scale-95 transition-all text-lg font-black uppercase italic tracking-widest"
              )}
            >
              <Phone fill="currentColor" size={24} />
              (724) 750-6935
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-500"
          >
            Free estimates · No hidden fees · Same-day service
          </motion.p>
        </div>
      </div>

    </section>
  );
}
