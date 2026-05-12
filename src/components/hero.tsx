import { ShieldCheck, Clock, Star, MapPin, Phone, CheckCircle2 } from "lucide-react";
import React from "react";

export function Hero() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-bg font-body"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
        <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full opacity-40 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* 🔹 H1 (SSR READY - NO HYDRATION DELAY) */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-text leading-[1.1] animate-fade-in-up"
          >
            Emergency Drain Cleaning Near You <br className="hidden md:block" />
            <span className="text-primary italic">24/7 Fast Local Service</span>
          </h1>

          {/* 🔹 SUBHEADING */}
          <div
            className="text-base md:text-lg text-text/70 font-medium max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up [animation-delay:200ms]"
          >
            Clogged drain or sewer backup? Don’t wait. DrainCleaningNearMe connects you with licensed local drain cleaning professionals who can be at your door within <span className="text-primary font-bold border-b-2 border-primary/20">30–60 minutes</span>.
          </div>

          {/* 🔹 INLINE TRUST SIGNALS */}
          <div 
             className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-[11px] font-bold text-text/40 tracking-widest uppercase animate-fade-in-up [animation-delay:400ms]"
          >
             <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-primary" /> Licensed & Insured
             </div>
             <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-primary" /> 30–60 Min Response
             </div>
             <div className="flex items-center gap-1.5">
                <Star size={16} className="text-primary" /> Available 24/7
             </div>
             <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-primary" /> Nationwide Coverage
             </div>
          </div>

          {/* 🔹 MAIN CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 animate-fade-in-up [animation-delay:600ms]"
          >
            <a
              href={mainTelLink}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group uppercase tracking-tight"
            >
              <Phone size={22} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Call Now: (724) 750-6935
            </a>
            <a
              href={mainTelLink}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-card border-2 border-border text-text rounded-2xl font-bold text-lg hover:border-primary transition-all active:scale-95 uppercase tracking-tight"
            >
              Request service
            </a>
          </div>

          {/* 🔹 BOTTOM TRUST BAR */}
          <div
            className="flex flex-wrap justify-center items-center gap-6 py-4 px-8 bg-card/50 border border-border rounded-3xl shadow-lg backdrop-blur-sm animate-fade-in-up [animation-delay:800ms]"
          >
            <div className="flex items-center gap-2.5">
               <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-accent text-accent" />)}
               </div>
               <span className="text-xs font-bold text-text uppercase tracking-tight">Rated 4.8/5 by homeowners</span>
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-border" />
            <div className="flex items-center gap-2 text-xs font-bold text-text/60 uppercase tracking-tight">
               <CheckCircle2 size={14} className="text-primary" /> Verified professionals
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-border" />
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tight">
               <MapPin size={14} /> Available in your area
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


