"use client";

import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, CheckCircle } from "lucide-react";

export function AboutHero() {
  const phoneLink = "tel:+17247506935";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-bg">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
        <div className="absolute top-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-text leading-[1.1]"
          >
            Drain Cleaning <br className="hidden md:block" />
            <span className="text-primary">Near Me</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-text/80 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Trust DrainCleaningNearMe for reliable, nationwide service in USA. Our local licensed drain cleaning experts provide 24/7 emergency services. Get help fast, reliable & ready!
          </motion.p>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-card/50 border border-border rounded-full shadow-sm mb-12"
          >
            <div className="flex items-center gap-1.5">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-text">4.8/5 Rating</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-border mx-1" />
            <span className="text-sm font-bold text-text">10,000+ Customers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border mx-1" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-sm font-bold text-text">Verified Professionals</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={phoneLink}
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-xl font-bold text-xl shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all"
            >
              <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
            <a
              href={phoneLink}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-card border-2 border-primary/20 text-text rounded-xl font-bold text-xl hover:border-primary hover:bg-primary/5 transition-all outline-none focus:ring-2 focus:ring-primary/50"
            >
              Book Service Online
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
