"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Construction, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, UserCheck, Zap
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const boroughs = [
  "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"
];

const mainTelLink = "tel:+17247506935";

export function NYCClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (NYC LOCAL + HIGH CONVERSION) */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-card border border-border rounded-full shadow-sm mb-10"
              >
                <div className="flex -space-x-1.5">
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">NY</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured NYC Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> in New York City
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Need fast, reliable drain cleaning service in New York? (Manhattan, Brooklyn, Queens, Bronx or Staten Island). We connect you with licensed local drain cleaning professionals who can be at your door within <span className="text-primary font-bold">30–60 minutes</span>.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16"
              >
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
                >
                  <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call Now for Emergency Service
                </a>
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95"
                >
                  Get free estimate
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> 4.8/5 Rating</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed NYC Plumbers</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day dispatch</div>
                 <div className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> All 5 Boroughs</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY NYC NEEDS EXPERTS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                  NYC drain cleaning services you can trust
                </h2>
                <div className="space-y-6 text-lg text-text/70 leading-relaxed font-body">
                  <p>
                    New York City faces unique plumbing challenges; old buildings, narrow pipes, heavy use and aging sewer infrastructure. That is why NYC drain cleaning services must be handled by professionals who understand the city’s quirks.
                  </p>
                  <p>
                    From a simple clogged drain in your kitchen to a full sewer backup in an apartment building or restaurant in New York, our local experts use electric snaking, hydro jetting and camera sewer line inspection to clear your drains safely and restore proper flow.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {["Slow drains & backups", "Sewer line clogs", "NYC building code experts", "All 5 boroughs covered"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-bg border border-border shadow-sm">
                         <CheckCircle2 size={20} className="text-primary shrink-0" />
                         <span className="text-sm font-bold text-text mb-0.5">{item}</span>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <MapPin size={80} className="text-primary mb-8 animate-bounce" />
                    <h3 className="text-2xl font-bold text-text mb-4">Serving New York City</h3>
                    <p className="text-sm text-text/50 font-semibold mb-8">Manhattan · Brooklyn · Queens · Bronx · Staten Island</p>
                    <div className="flex flex-wrap justify-center gap-2">
                       {boroughs.map(b => (
                         <span key={b} className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-xs font-bold text-primary">{b}</span>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID (LOCAL SEO) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our drain cleaning services in New York
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                    Professional, localized solutions for the unique plumbing systems of New York City homes and businesses.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Drain unclogging NYC", desc: "Restore flow safely without pipe damage. Specialist tools for narrow NYC apartment lines.", icon: Utensils },
                  { title: "Hydro jetting NYC", desc: "Remove grease, sludge and buildup from aging system pipes using high-pressure water.", icon: Waves },
                  { title: "Sewer line cleaning NYC", desc: "Fix major mainline blockages and backups caused by roots or infrastructure age.", icon: Droplets },
                  { title: "Sewer camera inspection NYC", desc: "Detect cracks, roots and pipe damage with HD video before they cause a flood.", icon: Search },
                  { title: "Emergency drain cleaning NYC", desc: "24/7 fast response across all boroughs. Immediate help for total backups.", icon: Zap }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all hover:shadow-2xl group flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-sm flex items-center gap-2 group/link">
                       Call now <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. COMMON NYC PROBLEMS (SEO BOOST) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { t: "Grease buildup", d: "Major issue in older NYC restaurants.", icon: Utensils },
                        { t: "Aging pipes", d: "Cast-iron and clay pipe degradation.", icon: Building2 },
                        { t: "Flushable wipes", d: "Common cause of apartment backups.", icon: Trash2 },
                        { t: "Tree roots", d: "Especially in Brooklyn and Bronx yards.", icon: Activity }
                      ].map((item, i) => (
                         <div key={i} className="p-8 rounded-3xl bg-bg border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                            <item.icon size={24} className="text-primary mb-6" />
                            <h4 className="text-lg font-bold text-text mb-2 tracking-tight">{item.t}</h4>
                            <p className="text-xs text-text/50 font-semibold leading-relaxed">{item.d}</p>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                      Common drain problems in NYC homes & buildings
                   </h2>
                   <p className="text-lg text-text/70 font-medium leading-relaxed">
                      NYC infrastructure is legendary but aging. We specialize in diagnosing and solving the specific drainage problems that plague local residences and high-volume commercial spaces.
                   </p>
                   <div className="p-10 rounded-[2.5rem] bg-bg border border-border shadow-inner">
                      <h4 className="text-lg font-bold text-text mb-6">Aging NYC Infrastructure Warning</h4>
                      <p className="text-sm text-text/60 leading-relaxed font-medium mb-8">
                         Older NYC buildings often have cast-iron pipes that corrode from the inside out. This slows down everything and makes clogs much more frequent.
                      </p>
                      <div className="flex items-center gap-4 text-primary font-bold">
                         <CheckCircle2 size={24} /> Verified local local experts
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. WARNING SIGNS (HIGH INTENT) */}
        <section className="py-24 bg-bg border-b border-border text-center">
           <div className="container-narrow space-y-16">
              <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Signs you need drain cleaning in New York
                 </h2>
                 <p className="text-text/70 font-medium text-lg">
                    Don't wait for a total backup. If you notice these warning signs, call for a diagnostic check immediately.
                 </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {[
                   { t: "Slow drains", icon: Clock },
                   { t: "Foul odors", icon: Activity },
                   { t: "Gurgling sounds", icon: Waves },
                   { t: "Water backing up", icon: Droplets },
                   { t: "Recurring clogs", icon: Plus }
                 ].map((sign, i) => (
                   <div key={i} className="space-y-4 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-sm group hover:bg-primary hover:text-white transition-all">
                         <sign.icon size={24} />
                      </div>
                      <span className="text-xs font-bold text-text/80 tracking-tight">{sign.t}</span>
                   </div>
                 ))}
              </div>
              <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
                 <p className="text-sm font-bold text-primary">Likely sewer issue detected? Call (724) 750-6935 immediately before flooding occurs.</p>
              </div>
           </div>
        </section>

        {/* 6. RESIDENTIAL & COMMERCIAL */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-8">
                <div className="p-12 rounded-[3.5rem] bg-bg border border-border shadow-sm flex flex-col items-center text-center space-y-8">
                   <div className="w-20 h-20 rounded-3xl bg-primary/5 text-primary flex items-center justify-center shadow-inner">
                      <Building2 size={36} />
                   </div>
                   <h3 className="text-3xl font-bold text-text tracking-tight">For homes & apartments</h3>
                   <ul className="space-y-4 text-text/70 font-medium text-sm">
                      <li>Manhattan multi-unit experts</li>
                      <li>Brooklyn brownstone plumbing</li>
                      <li>Queens & Bronx residential setups</li>
                      <li>Basement and kitchen clogs</li>
                   </ul>
                   <a href={mainTelLink} className="w-full py-5 bg-card border-2 border-border rounded-2xl font-bold hover:border-primary transition-all">Get help for my home</a>
                </div>
                <div className="p-12 rounded-[3.5rem] bg-slate-900 border border-primary/20 shadow-2xl flex flex-col items-center text-center space-y-8 text-white">
                   <div className="w-20 h-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center shadow-inner">
                      <Utensils size={36} />
                   </div>
                   <h3 className="text-3xl font-bold text-white tracking-tight">For NYC businesses</h3>
                   <ul className="space-y-4 text-white/50 font-medium text-sm">
                      <li>Professional kitchen grease removal</li>
                      <li>Office & school drain maintenance</li>
                      <li>Retail & hospitality blockages</li>
                      <li>Complex high-volume drainage</li>
                   </ul>
                   <a href={mainTelLink} className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">Emergency commercial relief</a>
                </div>
             </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US (CONVERSION) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight mb-4">
                  Why choose DrainCleaningNearMe in New York?
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Our network is built on local trust, speed and expertise.</p>
             </div>
             <div className="grid md:grid-cols-5 gap-6">
                {[
                  { t: "Licensed & Insured", d: "Fully vetted NYC technicians and experts.", icon: ShieldCheck },
                  { t: "Same-Day Service", d: "Often dispatched within 60 minutes for NYC.", icon: Clock },
                  { t: "NYC Infrastructure Exp", d: "Understanding unique local pipe quirks.", icon: Building2 },
                  { t: "Transparent Pricing", d: "Honest upfront costs fixed for NYC residents.", icon: Search },
                  { t: "Advanced Gear", d: "HD cameras and professional hydro jetting.", icon: Zap }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/20 transition-all">
                     <f.icon size={28} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-sm font-bold text-text tracking-tight uppercase leading-tight">{f.t}</h4>
                     <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase leading-relaxed">{f.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 8. PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our 5-step NYC drain cleaning process
                 </h2>
                 <p className="text-text/70 font-medium text-lg">Detailed, transparent and optimized for speed across the five boroughs.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { num: "1", t: "Inspection", d: "Initial camera & manual drain check.", icon: Search },
                   { num: "2", t: "Diagnosis", d: "Identify precise clog type and root cause.", icon: Activity },
                   { num: "3", t: "Cleaning", d: "Electric snaking or professional hydro jetting.", icon: Droplets },
                   { num: "4", t: "Testing", d: "Confirm proper flow patterns through system.", icon: CheckCircle2 },
                   { num: "5", t: "Prevention", d: "Pro tips to avoid future expensive clogs.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group hover:bg-primary hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-card">
                            {s.num}
                         </div>
                         <s.icon size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-text tracking-tight">{s.t}</h4>
                      <p className="text-xs text-text/50 font-semibold leading-relaxed px-4">{s.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. EMERGENCY SECTION (URGENT) */}
        <section className="py-24 bg-bg overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text">
                 Emergency drain cleaning NYC – 24/7
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                 {[
                   { t: "Flood apartments", icon: Waves },
                   { t: "Spread bacteria", icon: Activity },
                   { t: "Cause mold damage", icon: ShieldAlert }
                 ].map((e, i) => (
                   <div key={i} className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-red-600/10 shadow-sm text-left">
                      <e.icon size={20} className="text-red-600 shrink-0" />
                      <span className="text-sm font-bold text-text tracking-tight">Sewer backups can: <span className="block text-red-600">{e.t}</span></span>
                   </div>
                 ))}
              </div>
              <p className="text-lg text-text/60 font-medium italic">Immediate help available across all NYC boroughs. Don't let a backup destroy your property.</p>
              <a
                href={mainTelLink}
                className="inline-flex items-center gap-4 px-12 py-6 bg-red-600 text-white rounded-2xl font-bold text-2xl shadow-2xl shadow-red-600/30 hover:bg-red-700 transition-all active:scale-95 group"
              >
                 <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                 Emergency help now
              </a>
           </div>
        </section>

        {/* 10. SERVICE AREAS (BOROUGH GRID) */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-12">
               Drain cleaning services across NYC
             </h2>
             <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 container-narrow">
               {boroughs.map(b => (
                 <div key={b} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/30 transition-all">
                    <MapPin size={24} className="text-primary" />
                    <span className="text-base font-bold text-text tracking-tight">{b}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-sm font-bold text-text/40 tracking-widest uppercase italic">Full Manhattan to Staten Island coverage</p>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in NYC?", a: "Depends on clog severity and location. Simple clogs are fixed quickly; sewer cleaning ranges slightly higher." },
                  { q: "How long does it take?", a: "Usually 1–2 hours for most residential single-line clogs in NYC apartments." },
                  { q: "Signs of sewer blockage?", a: "Multiple drains backing up and foul odors in the basement or floor drains." },
                  { q: "Is hydro jetting safe?", a: "Yes, when performed by our professional network experts on verified pipe systems." },
                  { q: "Emergency arrival time?", a: "Often within 30–60 minutes across the five NYC boroughs." }
                ].map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-8 text-left group"
                    >
                      <span className="text-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">{faq.q}</span>
                      <div className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
                         {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="px-8 pb-8 text-base text-text/60 font-medium leading-relaxed border-t border-border pt-6 mx-8 italic">
                         {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-24 bg-card">
           <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 rounded-[4rem] bg-slate-900 border border-primary/20 text-white text-center shadow-2xl relative overflow-hidden group"
              >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                  <div className="relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                       Call results: Get NYC drain cleaning help today
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto italic">
                       Professional NYC drain cleaning services protect your property and your peace of mind. Available 24/7 across New York City.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 transition-all active:scale-95 group tracking-tight"
                       >
                          <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                          Call now
                       </a>
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-bold text-2xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 tracking-tight"
                       >
                          Same-day service
                       </a>
                    </div>
                  </div>
              </motion.div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
