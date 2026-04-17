"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap, Bath, Hammer, ThermometerSun
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const serviceAreas = [
  "Riverside", "Avondale", "Arlington", "Southside", 
  "Mandarin", "Ortega", "San Marco", "Baymeadows"
];

const mainTelLink = "tel:+17247506935";

export function JAXClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (JACKSONVILLE) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">FL</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured Jacksonville Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] uppercase font-black"
              >
                Professional Drain Cleaning & <span className="text-primary italic">Rooter Services</span> in Jacksonville
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                Tired of slow drains, standing water and foul odors disrupting your Jacksonville home or business? Our professional drain cleaning services in Jacksonville, FL fix clogs fast with hydro jetting, snaking and drain camera inspections; preventing costly water pipes and drainage damage and backups.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16"
              >
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group font-black uppercase tracking-tight"
                >
                  <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call Now: (724) 750-6935
                </a>
                <a
                  href="#estimate"
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95 uppercase font-black"
                >
                  Get Free Quote
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 uppercase tracking-widest font-black"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> 24/7 Available</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Free Estimates</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. JACKSONVILLE DRAIN PROBLEMS */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                   Jacksonville Drain Problems: What Locals Face
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    In Jacksonville's subtropical climate, grease buildup from Southern cooking, soap scum, hair clogs and tree root intrusion into sewer lines are rampant; especially in older Duval County homes. These lead to sewer backups, pipe corrosion and health risks from foul odors, with urgency high as backups can cause thousands in water damage within hours.
                   </p>
                   <p>
                    Data shows 40% of Jacksonville plumbing calls involve drains, peaking during rainy seasons when storm drains overwhelm. As Jacksonville drain experts, DrainCleaningNearMe tackles these with customized drain cleaning solutions.
                   </p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-bg border border-border shadow-inner relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><ShieldAlert size={60} /></div>
                   <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase font-black">Pro Tip</h3>
                   <p className="text-sm text-text/50 italic leading-relaxed font-black uppercase tracking-widest">
                      Act fast; untreated clogs cost Jacksonville homeowners an average $1,200+ in repairs.
                   </p>
                </div>
              </div>
              <div className="relative">
                    <div className="aspect-video bg-bg border border-border rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                       <Image 
                         src="/images/jax-kitchen-clog.png" 
                         alt="Kitchen sink clog before and after" 
                         fill 
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover"
                       />
                       <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest">
                          Visual: Kitchen sink restoration
                       </div>
                    </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COMPREHENSIVE SERVICES */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Comprehensive Drain Cleaning Services in Jacksonville
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    We cover all residential & commercial drain cleaning services Jacksonville needs.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Kitchen Drain Cleaning Jacksonville", 
                    desc: "Food scraps and grease cause 30% of home clogs here. Restores flow in 60 minutes typically.", 
                    icon: Utensils,
                    link: "/kitchen-sink-drain-cleaning-unclogging-services"
                  },
                  { 
                    title: "Bathroom Drain Unclogging", 
                    desc: "Soap, hair and toothpaste buildup. Safe for septic systems common in Mandarin outskirts.", 
                    icon: Bath,
                    link: "/bathroom-drain-cleaning-unclogging-services"
                  },
                  { 
                    title: "Toilet & Sewer Line Cleaning", 
                    desc: "Root intrusion in sewer lines affect 25% of Duval calls. Handles sewer line unclogging.", 
                    icon: Droplets,
                    link: "/sewer-line-cleaning-repair-usa"
                  },
                  { 
                    title: "Main Line Blockage Removal", 
                    desc: "Whole-house backups signal main sewer line issues. Pipe blockage removal via high-powered tools.", 
                    icon: Waves,
                    link: "/hydro-jetting-cleaning-services"
                  },
                  { 
                    title: "Commercial Drain Cleaning", 
                    desc: "High-volume clogs in restaurants/offices. Scheduled hydro jetting services Jacksonville FL.", 
                    icon: Building2,
                    link: "/hydro-jetting-cleaning-services"
                  },
                  { 
                    title: "Emergency Drain Cleaning", 
                    desc: "24/7 response. Arrives in under 60 minutes for severe plumbing crises.", 
                    icon: Zap,
                    link: "/emergency-drain-cleaning-services"
                  }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all hover:shadow-2xl group flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-all uppercase font-black">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow italic">{s.desc}</p>
                    {s.link && (
                      <a href={s.link} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                        Learn more <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. ADVANCED TECHNIQUES */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative order-2 lg:order-1">
                    <div className="aspect-video bg-bg border border-border rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                       <Image 
                         src="/images/hydro-jetting-demo.png" 
                         alt="Hydro jetting demonstration" 
                         fill 
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover"
                       />
                    </div>
                 </div>
                 <div className="space-y-8 order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                       Advanced Techniques for Lasting Results
                    </h2>
                    <div className="space-y-6">
                       <div className="flex gap-6 p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                          <div className="w-12 h-12 rounded-xl bg-card text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                             <Waves size={24} />
                          </div>
                          <div>
                             <h4 className="text-base font-black text-text uppercase tracking-tight">Hydro Jetting in Jacksonville</h4>
                             <p className="text-xs text-text/60 font-medium leading-relaxed italic">
                                Using high pressure (4,000 PSI) water clears roots and scale; 95% effective vs. 60% for snaking. Hydro Jetting costs $850-1500 and lasts years.
                             </p>
                          </div>
                       </div>
                       <div className="flex gap-6 p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                          <div className="w-12 h-12 rounded-xl bg-card text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                             <Hammer size={24} />
                          </div>
                          <div>
                             <h4 className="text-base font-black text-text uppercase tracking-tight">Drain Snaking / Augers</h4>
                             <p className="text-xs text-text/60 font-medium leading-relaxed italic">
                                Mechanical removal for tight clogs and blockages. Reliable for common household obstructions.
                             </p>
                          </div>
                       </div>
                       <div className="flex gap-6 p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                          <div className="w-12 h-12 rounded-xl bg-card text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                             <Search size={24} />
                          </div>
                          <div>
                             <h4 className="text-base font-black text-text uppercase tracking-tight">Video Camera Inspection</h4>
                             <p className="text-xs text-text/60 font-medium leading-relaxed italic">
                                HD sewer line inspection reveals hidden root removal needs and repairs; 100% diagnostic accuracy.
                             </p>
                          </div>
                       </div>
                    </div>
                    <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                       <p className="text-sm font-bold text-text uppercase tracking-widest italic">
                          <span className="text-primary">Example:</span> A Riverside client saved $2,500 on sewer line repair in Jacksonville after camera detected early roots intrusion in the pipes.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. RESIDENTIAL VS COMMERCIAL TABLE */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Residential vs. Commercial Solutions
              </h2>
              <div className="overflow-x-auto rounded-[2.5rem] border border-border bg-card shadow-sm">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-bg border-b border-border">
                       <tr>
                          <th className="px-8 py-6 text-sm font-black text-text uppercase tracking-widest">Aspect</th>
                          <th className="px-8 py-6 text-sm font-black text-text uppercase tracking-widest">Residential</th>
                          <th className="px-8 py-6 text-sm font-black text-text uppercase tracking-widest">Commercial</th>
                       </tr>
                    </thead>
                    <tbody className="text-text/70 font-medium italic">
                       <tr className="border-b border-border hover:bg-bg/50 transition-colors">
                          <td className="px-8 py-6 text-xs font-black text-text uppercase">Common Issues</td>
                          <td className="px-8 py-6 text-xs">Hair clogs, grease from home cooking, tree roots in yards.</td>
                          <td className="px-8 py-6 text-xs">Heavy grease from restaurants, high-volume usage.</td>
                       </tr>
                       <tr className="border-b border-border hover:bg-bg/50 transition-colors">
                          <td className="px-8 py-6 text-xs font-black text-text uppercase">Methods Used</td>
                          <td className="px-8 py-6 text-xs">Drain snaking, hydro jetting for main lines.</td>
                          <td className="px-8 py-6 text-xs">High-capacity hydro jetting, camera inspections.</td>
                       </tr>
                       <tr className="border-b border-border hover:bg-bg/50 transition-colors">
                          <td className="px-8 py-6 text-xs font-black text-text uppercase">Response Time</td>
                          <td className="px-8 py-6 text-xs">Same-day for homes in Arlington or Mandarin.</td>
                          <td className="px-8 py-6 text-xs">24/7 priority for businesses in Downtown.</td>
                       </tr>
                       <tr className="hover:bg-bg/50 transition-colors">
                          <td className="px-8 py-6 text-xs font-black text-text uppercase">Cost Range</td>
                          <td className="px-8 py-6 text-xs">$150-$750 per job</td>
                          <td className="px-8 py-6 text-xs">$850-$1500+ for larger lines.</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 6. KEY SIGNS & WHY PROS BEAT DIY */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-16">
                 {/* Key Signs */}
                 <div className="space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                       Key Signs It's Time for Pro Drain Cleaning
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                       {[
                         "Slow draining sinks (early grease sign)",
                         "Foul odor (sewer backup brewing)",
                         "Gurgling sounds (air pressure issues)",
                         "Multiple backups (main line blockage)"
                       ].map((item, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex items-center gap-4 group hover:border-primary/20 transition-all">
                             <div className="w-8 h-8 rounded-lg bg-card text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                                <CheckCircle2 size={18} />
                             </div>
                             <span className="text-xs font-black text-text uppercase tracking-tight">{item}</span>
                          </div>
                       ))}
                    </div>
                    <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                       <h4 className="text-sm font-black text-primary uppercase mb-2">Actionable Tip</h4>
                       <p className="text-sm text-text/70 italic font-medium">
                          Test with water; if sink takes &gt;30 seconds to drain, call professionals. DIY plungers work 20% of the time only.
                       </p>
                    </div>
                 </div>
                 {/* Why Pros Beat DIY */}
                 <div className="space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                       Why Pros Beat DIY Every Time
                    </h2>
                    <div className="space-y-6 text-lg text-text/70 italic font-medium leading-relaxed">
                       <p>
                        Harsh chemicals erode PVC pipes common in Florida homes, leading to $500+ drain repair in Jacksonville. Our long-term pipe cleaning service prevents this, unlike temporary fixes.
                       </p>
                       <div className="grid sm:grid-cols-2 gap-6 pt-6">
                          <div className="p-6 rounded-2xl bg-bg border border-border text-center">
                             <div className="text-2xl font-black text-primary mb-1">70%</div>
                             <div className="text-[10px] font-black text-text/40 uppercase tracking-widest">Reduction in repeat calls</div>
                          </div>
                          <div className="p-6 rounded-2xl bg-bg border border-border text-center flex flex-col justify-center">
                             <Image src="/globe.svg" alt="EPA" width={30} height={30} className="mx-auto mb-2 opacity-30" />
                             <div className="text-[10px] font-black text-text/40 uppercase tracking-widest leading-none">EPA Recommended Hydro-methods</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. STEP-BY-STEP PROCESS */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-20 uppercase font-black italic">
                Our Step-by-Step Restoration Process
              </h2>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { t: "Inspection", d: "Free visual and camera check for issues like root removal.", icon: Search },
                   { t: "Diagnosis", d: "Identify causes; clog, grease, roots or corrosion.", icon: Activity },
                   { t: "Selection", d: "Snaking for simple clogs; hydro jetting for deep cleans.", icon: Hammer },
                   { t: "Execution", d: "Safe, thorough cleaning of the whole sewer line.", icon: CheckCircle2 },
                   { t: "Final Testing", d: "Run water to confirm no slow drains or backups.", icon: Waves }
                 ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center group">
                       <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all mb-6">
                          <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-bg font-black">
                             {i+1}
                          </div>
                          <s.icon size={24} />
                       </div>
                       <h4 className="text-sm font-black text-text uppercase tracking-tight mb-2">{s.t}</h4>
                       <p className="text-[10px] text-text/40 font-bold uppercase tracking-widest leading-relaxed italic px-4">{s.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. HYPER-LOCAL COVERAGE */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                       Hyper-Local Coverage Across Jacksonville
                    </h2>
                    <p className="text-lg text-text/70 italic font-medium">
                       “Drain unclogging near me” searching in Jacksonville? We serve the entire Duval County area with localized expertise.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { t: "Riverside/Avondale", d: "Root intrusion & historic pipes." },
                         { t: "Arlington/Southside", d: "Dense residential backups." },
                         { t: "Mandarin/Ortega", d: "Septic hybrid systems." },
                         { t: "San Marco", d: "Modern drain main lines." }
                       ].map((item, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                             <div className="text-xs font-black text-primary uppercase mb-1">{item.t}</div>
                             <div className="text-[10px] font-bold text-text/40 uppercase tracking-widest italic">{item.d}</div>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <div className="aspect-square bg-bg border border-border rounded-[3rem] shadow-2xl relative overflow-hidden p-8">
                       <Image 
                         src="/images/jax-service-map.png" 
                         alt="Jacksonville service area map" 
                         fill 
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover opacity-80"
                       />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black uppercase italic underline decoration-primary decoration-4 underline-offset-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: "How much does drain cleaning cost in Jacksonville, FL?", a: "Costs range from $100-$299 for sinks/toilets to $200-$450 for main lines; hydro jetting $850-$1499. Includes service fee." },
                  { q: "How long does professional drain cleaning take in Jacksonville?", a: "Most jobs take 2-3 hours; emergencies are tackled same-day. Complex sewer line cleaning in Jacksonville may take 2-4 hours." },
                  { q: "Is hydro jetting safe for Jacksonville pipes?", a: "Yes, when done by professionals; eco-friendly, no chemicals, effective on roots and grease without pipes damage." },
                  { q: "Do you offer emergency drain cleaning services in Jacksonville?", a: "Yes, 24/7 emergency drain cleaning in Jacksonville for unclogging blocked drains or sewer backups." },
                  { q: "How to prevent clogs in Jacksonville drains?", a: "Use strainers, avoid grease down sinks, schedule annual cleaning. Avoid tree roots near pipes." }
                ].map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:border-primary/20 transition-all">
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
                      <div className="px-8 pb-8 text-sm text-text/40 font-bold uppercase tracking-widest leading-relaxed border-t border-border pt-6 mx-8 italic">
                         {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-24 bg-card overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                 Fix Your Drains Today
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase underline decoration-primary decoration-4">
                 Licensed Jacksonville Professionals Ready 24/7. Trusted since 2020.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <a
                    href={mainTelLink}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-3xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tighter font-black"
                 >
                    <Phone size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                    (724) 750-6935
                 </a>
                 <a
                    href="#estimate"
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-2xl hover:border-primary transition-all active:scale-95 tracking-tight font-black uppercase"
                 >
                    Book Online
                 </a>
              </div>
           </div>
        </section>

      </main>
      <Footer />

      {/* SCHEMA MARKUP */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does drain cleaning cost in Jacksonville FL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Costs range from $100-$200 for sinks/toilets to $200-$450 for main lines; hydro jetting $350-$595. Includes service fee."
            }
          },
          {
            "@type": "Question",
            "name": "How long does professional drain cleaning take in Jacksonville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most jobs 30-90 minutes; emergencies same-day. Complex sewer line cleaning Jacksonville may take 2 hours."
            }
          },
          {
            "@type": "Question",
            "name": "Is hydro jetting safe for Jacksonville pipes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, when done by pros – eco-friendly, no chemicals, effective on roots and grease without damage."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer emergency drain services in Jacksonville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 24/7 emergency drain cleaning Jacksonville for unclog drain Jacksonville or sewer backups."
            }
          },
          {
            "@type": "Question",
            "name": "How to prevent clogs in Jacksonville drains?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use strainers, avoid grease down sinks, schedule annual cleaning. Avoid tree roots near pipes."
            }
          },
          {
            "@type": "Question",
            "name": "What areas in Jacksonville do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All Duval County: Riverside, Arlington, Southside, Mandarin, San Marco, Ortega, Baymeadows, and more."
            }
          }
        ]
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DrainCleaningNearMe",
        "description": "Expert drain cleaning services Jacksonville FL. Emergency rooter, hydro jetting, sewer cleaning.",
        "url": "https://www.draincleaningnearme.us/",
        "telephone": "(724) 750-6935",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jacksonville",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "areaServed": "Jacksonville, FL and Duval County",
        "serviceType": "Drain Cleaning, Sewer Line Cleaning, Hydro Jetting",
        "priceRange": "$$"
      }) }} />
    </div>
  );
}
