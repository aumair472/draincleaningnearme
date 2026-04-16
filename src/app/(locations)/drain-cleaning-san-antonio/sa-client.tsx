"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap, Bath, Hammer, ThermometerSun
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const serviceAreas = [
  "San Antonio", "Alamo Heights", "Stone Oak", "Helotes", 
  "Boerne", "New Braunfels"
];

const mainTelLink = "tel:+17247506935";

export function SAClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (SAN ANTONIO LOCAL) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-card border border-border rounded-full shadow-sm mb-10"
              >
                <div className="flex -space-x-1.5">
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">TX</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured San Antonio Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Reliable Drain Cleaning & <span className="text-primary italic font-black">Hydro Jetting</span> Services in San Antonio
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Clogged drains disrupt daily life in San Antonio homes and businesses. We deliver fast, reliable solutions customized to local challenges like hard water buildup and tree root intrusions.
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
                  Call Now: (724) 750-6935
                </a>
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95"
                >
                  Book Online Today
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Emergency</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> San Antonio Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. STOP SLOW DRAINS TODAY (URGENCY/OFFER) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   Stop Slow Drains and Backups Today: Same-Day Service!
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    Tired of gurgling toilets, foul odors or standing water in your kitchen sink? San Antonio's hard water minerals, grease clogs and shifting clay soils make drain problems common, but our licensed plumbers fix them fast.
                   </p>
                   <ul className="space-y-4">
                      <li className="flex gap-4 p-5 rounded-2xl bg-bg border border-border group hover:border-primary/20 transition-all">
                         <Clock className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                         <div>
                            <h4 className="font-bold text-text">Same-Day Service</h4>
                            <p className="text-sm text-text/50">Emergency response within hours, even nights and weekends.</p>
                         </div>
                      </li>
                      <li className="flex gap-4 p-5 rounded-2xl bg-bg border border-border group hover:border-primary/20 transition-all">
                         <Droplets className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                         <div>
                            <h4 className="font-bold text-text">Affordable Rates</h4>
                            <p className="text-sm text-text/50">Average drain cleaning from $99-$300, with transparent pricing.</p>
                         </div>
                      </li>
                      <li className="flex gap-4 p-5 rounded-2xl bg-bg border border-border group hover:border-primary/20 transition-all">
                         <Waves className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                         <div>
                            <h4 className="font-bold text-text">Long-Term Fixes</h4>
                            <p className="text-sm text-text/50">Hydro jetting removes roots and buildup, preventing future clogs.</p>
                         </div>
                      </li>
                   </ul>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ShieldCheck size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">5-star reviews prove our edge</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed uppercase tracking-widest">
                       Outperforming San Antonio competitors since day one.
                    </p>
                    <div className="absolute top-0 right-0 p-8">
                       <Star size={40} className="text-accent fill-accent opacity-20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COMMON ISSUES (LOCAL AUTHORITY) */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto">
                    Common Drain Issues in San Antonio
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto">
                    San Antonio homeowners face unique plumbing woes due to the Edwards Aquifer's hard water and local environmental factors.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Mineral Scaling", d: "Hard water from Edwards Aquifer narrows pipes over time, leading to slow flow.", icon: Activity },
                   { t: "Tex-Mex Grease Clogs", d: "Solidified fats from kitchen waste solidify quickly, creating stubborn blockages.", icon: Utensils },
                   { t: "Tree Root Intrusion", d: "Aggressive roots invade older sewer lines in neighborhoods like Alamo Heights.", icon: Droplets },
                   { t: "Shifting Clay Soils", d: "Expanding and contracting soil creates pipe misalignments and secondary clogs.", icon: ThermometerSun }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-card border border-border group hover:border-primary/20 transition-all shadow-sm">
                       <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-sm text-text/60 font-medium leading-relaxed">{item.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our Drain Cleaning Services in SA
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                    Comprehensive solutions for homes and businesses, focusing on root causes rather than quick patches.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Cleaning", desc: "Tackles clogs from hair and food waste. Ideal for Stone Oak and Helotes homes.", icon: Bath },
                  { title: "Commercial Drain Cleaning", desc: "Grease clog removal for downtown restaurants and high-volume businesses.", icon: Building2 },
                  { title: "Emergency Drain Cleaning", desc: "24/7 sudden pipe blockage removal from roots or flushables in Boerne properties.", icon: Zap },
                  { title: "Sewer Line Cleaning", desc: "Handles deep blockages from root intrusion using camera inspections for precise clearing.", icon: Droplets },
                  { title: "Hydro Jetting Services", desc: "Blasts away grease, roots and minerals at 4,000 PSI without chemicals.", icon: Waves },
                  { title: "Video Camera Inspection", desc: "Pinpoint root intrusion or misalignments caused by shifting San Antonio soils.", icon: Search }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest">
                       Learn more <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. SIGNS YOU NEED SERVICE (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                Signs You Need Drain Cleaning
              </h2>
              <p className="text-lg text-text/70 font-medium italic">Watch for these red flags indicating clogged drains in San Antonio:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Slow drains from hard water minerals",
                   "Foul odors from grease or sewer buildup",
                   "Gurgling sounds: air trapped by blockages",
                   "Water backups in multiple fixtures",
                   "Standing water in tubs or toilets"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-base font-bold text-text tracking-tight uppercase leading-tight text-sm">{sign}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. OUR PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-card border-y border-border">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black italic">
                    Our Step-by-Step Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Transparency ensures emergency plumber San Antonio reliability.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { num: "1", t: "Inspection", d: "Arrive quickly and assess the issue visually and with tools.", icon: Search },
                   { num: "2", t: "Diagnosis", d: "Use video camera for accurate identification of clogs orroots.", icon: Activity },
                   { num: "3", t: "Cleaning", d: "Apply snaking, hydro jetting or root cutting based on findings.", icon: Waves },
                   { num: "4", t: "Testing", d: "Run water to verify full flow and check for secondary issues.", icon: CheckCircle2 },
                   { num: "5", t: "Prevention", d: "Provide free advice like hot water flushes and drain screens.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-card">
                            {s.num}
                         </div>
                         <s.icon size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">{s.t}</h4>
                      <p className="text-xs text-text/50 font-semibold leading-relaxed px-4">{s.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. WHY CHOOSE DRAIN CLEANING NEAR ME (TRUST DRIVER) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black">
               Why Choose DrainCleaningNearMe in San Antonio
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { t: "Licensed & Insured Local Experts", icon: ShieldCheck, d: "Years of service with Texas state certifications." },
                  { t: "Same-Day Service available", icon: Clock, d: "Fast response, often within hours across SA." },
                  { t: "Advanced Equipment", icon: Hammer, d: "Hydro jetting and HD camera inspection as standard." },
                  { t: "San Antonio Knowledge", icon: MapPin, d: "We know hard water and rooter issues intimately." }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-xs font-bold text-text tracking-widest uppercase leading-tight">{f.t}</h4>
                     <p className="text-[10px] text-text/40 font-bold uppercase tracking-widest leading-relaxed grow">{f.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 8. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Drain unclogging near me across San Antonio metro.</p>
             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight leading-tight">{n}</span>
                 </div>
               ))}
             </div>
             <div className="mt-12">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Fast arrival guaranteed: Stone Oak, Boerne, New Braunfels</p>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How often should drains be cleaned in San Antonio?", a: "Quarterly for high-use homes, annually for prevention; combats hard water buildup common in our mineral-rich water." },
                  { q: "What is hydro jetting?", a: "High-pressure water (up to 4,000 PSI) cleans pipe walls, roots and grease without chemicals. Superior to snaking for San Antonio's hard water." },
                  { q: "Are chemical cleaners safe for San Antonio drains?", a: "No, they damage pipes already stressed by minerals. Opt for professional pipe cleaning service." },
                  { q: "How much does drain cleaning cost in San Antonio?", a: "$99-$299 average; main line costs $400 maximum. Hydro jetting varies but prevents repeats and costly sewer repairs." },
                  { q: "When should I call a professional for clogged drain in San Antonio?", a: "For backups, odors or multiple fixtures; DIY fails on roots or clay soil shifts." },
                  { q: "Does San Antonio hard water cause more clogs?", a: "Yes, minerals scale pipes rapidly, making professional cleaning essential." },
                  { q: "Can tree roots be removed without digging?", a: "Yes, via hydro jetting or cutting tools after camera inspection; perfect for mature neighborhoods like Alamo Heights." }
                ].map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
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

        {/* 10. URGENCY / FINAL CALL (SAN ANTONIO) */}
        <section className="py-24 bg-card border-y border-border overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="max-w-5xl mx-auto px-4 text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                 Do not let sewer issues flood your day!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic">
                 With same-day emergency drain cleaning in San Antonio, licensed professionals and local know-how, we are your top choice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <a
                    href={mainTelLink}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-3xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tighter"
                 >
                    <Phone size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                    (724) 750-6935
                 </a>
                 <a
                    href={mainTelLink}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-2xl hover:border-primary transition-all active:scale-95 tracking-tight"
                 >
                    Book Now
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Limited same-day slots available &middot; Licensed & Insured Experts
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
