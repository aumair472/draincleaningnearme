"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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

  const phoneNumber = "(724) 750-6935";
  const telLink = "tel:+17247506935";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Sticky Bottom Bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden bg-white/80 backdrop-blur-md border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
          >
            <a
              href={telLink}
              className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all"
            >
              <Phone size={24} fill="currentColor" />
              Call Now – Fixed in 30 Min
            </a>
          </motion.div>

          {/* Desktop Floating Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col items-end gap-3"
          >
            <div className="bg-white border border-border rounded-2xl p-4 shadow-xl flex flex-col items-center gap-2 max-w-[240px] text-center">
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-tight mb-1">
                <Clock size={16} /> Available 24/7
              </div>
              <p className="text-xs font-medium text-text/70 mb-2 leading-relaxed">
                Need help now? Our experts are standing by.
              </p>
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all group"
              >
                <Phone size={18} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                {phoneNumber}
              </a>
            </div>
            
            {/* Pulsing Button Icon */}
            <a
              href={telLink}
              className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all relative group"
              aria-label="Call Now"
            >
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
              <Phone size={32} fill="currentColor" className="relative group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
