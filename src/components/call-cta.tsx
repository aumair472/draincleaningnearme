"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function CallCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const telLink = "tel:+17247506935";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* 1. Mobile Sticky Bottom Bar (Dark Theme) */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
          >
            <a
              href={telLink}
              className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all"
            >
              <Phone size={24} fill="currentColor" />
              Call Now – 24/7 Service Available
            </a>
          </motion.div>

          {/* 2. Desktop Floating Circular CTA (Option A - Single Element) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 hidden lg:flex items-center gap-4"
          >
            {/* Minimal label that appears on hover or persists */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 border border-white/10 px-5 py-3 rounded-2xl shadow-2xl text-white font-bold text-sm whitespace-nowrap"
            >
              Speak to a Plumber in Minutes
            </motion.div>

            <a
              href={telLink}
              className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
              aria-label="Call Now – Fast Emergency Service"
            >
              <Phone size={32} fill="currentColor" className="relative z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
