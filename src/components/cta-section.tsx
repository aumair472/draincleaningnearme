"use client";

import { Phone, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "primary" | "accent" | "alert";
  showStats?: boolean;
}

export function CTASection({ 
  title = "Ready for Immediate Drain Cleaning?", 
  subtitle = "Our local experts are ready to fix your clog in 30-60 minutes.",
  variant = "accent"
}: CTASectionProps) {
  const phoneNumber = "(724) 750-6935";
  const telLink = "tel:+17247506935";

  return (
    <section className="py-20 bg-accent/10 border-y border-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left bg-card p-10 md:p-14 rounded-2xl shadow-sm border border-accent/20">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
               {title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-primary font-bold uppercase tracking-wider text-xs">
               <div className="flex items-center gap-2"><Clock size={16} /> 24/7 Priority Support</div>
               <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-border" />
               <div className="flex items-center gap-2"><ShieldCheck size={16} /> Licensed & Insured</div>
            </div>
            <p className="text-xl text-text/80 font-medium">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
            <a 
              href={telLink} 
              className={cn(
                "flex items-center justify-center gap-4 px-10 py-6 rounded-xl w-full sm:w-auto shadow-lg hover:shadow-xl transition-all font-bold text-2xl hover:-translate-y-1 active:scale-95 group",
                "bg-accent hover:bg-accent/90 text-white"
              )}
            >
              <Phone fill="currentColor" size={28} className="group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-[0.2em] font-black opacity-80 mb-0.5">Call Now 24/7</span>
                {phoneNumber}
              </div>
            </a>
            
            <p className="text-sm font-bold text-text/60 italic">
               *Connect with a local pro in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

