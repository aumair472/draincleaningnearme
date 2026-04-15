"use client";

import { Phone, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CallConclusionProps {
  title?: string;
  subtitle?: string;
}

export function CallConclusion({ 
  title = "Ready to Fix Your Drain Problem?", 
  subtitle = "Our licensed local professionals are standing by 24/7 to provide fast, reliable service with upfront pricing and no hidden fees."
}: CallConclusionProps) {
  const phoneNumber = "(724) 750-6935";
  const telLink = "tel:+17247506935";

  return (
    <div className="text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20 shadow-sm mt-12">
      <h3 className="text-2xl md:text-4xl font-black tracking-tight text-text leading-tight">
        {title}
      </h3>
      <p className="text-text/70 font-semibold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href={telLink} 
          className="h-16 px-10 bg-primary hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-4 font-black uppercase tracking-widest shadow-xl hover:shadow-primary/30 transition-all active:scale-95 group"
        >
          <Phone fill="currentColor" size={28} className="group-hover:rotate-12 transition-transform" />
          Call {phoneNumber}
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] text-text/50 font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> 24/7 Dispatch</div>
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
        <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> Licensed Experts</div>
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
        <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> No Hidden Fees</div>
      </div>
    </div>
  );
}
