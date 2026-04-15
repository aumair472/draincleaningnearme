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
  title = "Get Your Drains Fixed Today", 
  subtitle = "Available in as little as 30 minutes",
  variant = "accent",
  showStats = true
}: CTASectionProps) {
  return (
    <section className="py-20 bg-accent/10 border-y border-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left bg-card p-10 md:p-14 rounded-2xl shadow-sm border border-accent/20">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
               {title}
            </h2>
            <p className="text-xl text-text/80 font-medium">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
            <Link 
              href="/contact" 
              className={cn(
                "flex items-center justify-center gap-3 px-10 py-5 rounded-xl w-full sm:w-auto shadow-md hover:shadow-lg transition-all font-bold text-lg hover:-translate-y-1",
                "bg-accent hover:bg-accent/90 text-white"
              )}
            >
              <Phone fill="currentColor" size={24} />
              Get Quotes in Minutes
            </Link>
            
            {showStats && (
              <div className="flex items-center gap-4 text-sm font-bold text-text/80">
                 <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap">
                    <ShieldCheck size={18} className="text-accent" /> Licensed Pros
                 </div>
                 <span className="w-1.5 h-1.5 rounded-full bg-border" />
                 <div className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap">
                    <Clock size={18} className="text-accent" /> 24/7 Response
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
