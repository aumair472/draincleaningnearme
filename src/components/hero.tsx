"use client";

import { motion } from "framer-motion";
import { Phone, Star, CheckCircle, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

const trustItems = [
  { icon: Star, text: "4.8/5 Rating · 300+ Reviews" },
  { icon: ShieldCheck, text: "Licensed & Insured Pros" },
  { icon: Clock, text: "60-Min Emergency Response" },
  { icon: CheckCircle, text: "24/7 Nationwide Service" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Drain Cleaning Services Near Me"
      className="relative min-h-[88vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-bg"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-[10%] w-[100%] max-w-4xl h-[400px] bg-blue-100/40 blur-[100px] rounded-full opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-8"
          >
            <CheckCircle size={13} className="text-primary" />
            #1 Drain Cleaning Service Network in the USA
          </motion.div>

          {/* H1 — only one per page */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-text leading-tight"
          >
            Fast Drain Cleaning{" "}
            <span className="text-primary">Near You</span>
            {" "}— Available 24/7
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-text/80 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Connect with licensed local drain cleaning professionals in minutes. From clogged kitchen
            sinks to emergency sewer line cleaning — we dispatch pros to your door fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="tel:+17247506935"
              aria-label="Call now for 24/7 drain cleaning service"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-xl font-bold text-xl shadow-lg hover:bg-blue-700 hover:shadow-primary/30 hover:-translate-y-1 transition-all group"
            >
              <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Call (724) 750-6935
            </a>
            <a
              href="tel:+17247506935"
              aria-label="Call for a free phone estimate"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-card border-2 border-primary/20 text-text rounded-xl font-bold text-xl hover:border-primary hover:text-primary transition-all"
            >
              Call for Free Estimate
            </a>
          </motion.div>


          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-card border border-border rounded-full shadow-sm"
              >
                <item.icon size={15} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-text/80 whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
