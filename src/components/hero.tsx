"use client";

import { motion } from "framer-motion";
import { Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin } from "lucide-react";

export function Hero() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-bg font-body"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
        <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full opacity-40 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* 🔹 TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-card border border-border rounded-full shadow-sm mb-10"
          >
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(64 + i)}
                 </div>
               ))}
            </div>
            <span className="text-sm font-semibold text-text/60">
               <span className="text-primary font-bold">#1</span> Drain cleaning network in the USA
            </span>
          </motion.div>

          {/* 🔹 H1 (CLEAN & BOLD) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
          >
            Emergency Drain Cleaning Near You <br className="hidden md:block" />
            <span className="text-primary">24/7 Fast Local Service</span>
          </motion.h1>

          {/* 🔹 SUBHEADING (READABLE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Clogged drain or sewer backup? Don’t wait. DrainCleaningNearMe connects you with licensed local drain cleaning professionals who can be at your door within <span className="text-primary font-bold border-b-2 border-primary/20">30–60 minutes</span>.
          </motion.div>

          {/* 🔹 INLINE TRUST SIGNALS */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-sm font-semibold text-text/40 tracking-tight"
          >
             <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" /> Licensed & Insured
             </div>
             <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" /> 30–60 Min Response
             </div>
             <div className="flex items-center gap-2">
                <Star size={18} className="text-primary" /> Available 24/7
             </div>
             <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" /> Nationwide Coverage
             </div>
          </motion.div>

          {/* 🔹 MAIN CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16"
          >
            <a
              href={mainTelLink}
              className="flex items-center justify-center gap-4 px-12 py-7 bg-primary text-white rounded-[2rem] font-bold text-2xl shadow-2xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Call Now – (724) 750-6935
            </a>
            <a
              href={mainTelLink}
              className="flex items-center justify-center gap-4 px-12 py-7 bg-card border-4 border-primary/10 text-text rounded-[2rem] font-bold text-2xl hover:border-primary transition-all active:scale-95"
            >
              Request service
            </a>
          </motion.div>

          {/* 🔹 BOTTOM TRUST BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
               <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-accent text-accent" />)}
               </div>
               <span className="text-sm font-semibold text-text">Rated 4.8/5 by homeowners</span>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm font-semibold text-text/60">
               <CheckCircle2 size={16} className="text-primary" /> Verified local professionals
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
               <MapPin size={16} /> Available in your area
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
