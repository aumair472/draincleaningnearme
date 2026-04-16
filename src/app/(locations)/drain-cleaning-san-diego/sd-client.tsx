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
  "San Diego (Downtown)", "La Jolla", "Pacific Beach", "Chula Vista", 
  "El Cajon", "Oceanside", "Escondido", "Rancho Bernardo", "Coronado"
];

const mainTelLink = "tel:+17247506935";

export function SDClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (SAN DIEGO LOCAL) */}
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">CA</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured San Diego Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & Repair Services in <span className="text-primary italic font-black">San Diego</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Tired of slow drains, foul odors or sewer backups ruining your day in San Diego? We deliver fast, professional repairs trusted by La Jolla and Pacific Beach homeowners.
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
                  Book Online
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> 24/7 Availability</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> SD Local Solutions</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   San Diego's coastal plumbing woes
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    San Diego's coastal lifestyle means dealing with unique plumbing woes like hard water mineral buildup and tree root intrusion into sewer lines. Homeowners in Chula Vista and El Cajon often face slow drains from grease clogs or aging cast iron pipes in older neighborhoods.
                   </p>
                   <p>
                    Our drain cleaning San Diego, CA team tackles these with expert sewer line cleaning techniques, preventing costly backups and restoring flow fast. Whether it is kitchen drain cleaning or bathroom drain unclogging, we prioritize urgency to save you time and money.
                   </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Droplets size={60} /></div>
                   <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase">Emergency Priority</h3>
                   <p className="text-sm text-text/50 italic leading-relaxed">
                      "Professional hydro jetting in action clears tough San Diego clogs. We tackle tree root intrusion and mineral buildup that generic plumbers miss."
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Waves size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">SD Coastal Specialists</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed uppercase tracking-widest">
                       Experts in La Jolla Shores and Pacific Beach aging infrastructure.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                          Hydro Jetting: 4,000 PSI Power
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our Drain Cleaning Services in San Diego
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Comprehensive solutions using state-of-the-art tools for reliable SD results.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Emergency Drain Cleaning", desc: "Responses in under 60 minutes, 24/7. Perfect for sudden pipe blockage in Oceanside.", icon: Zap },
                  { title: "Sewer Line Cleaning", desc: "Prevents backups across multiple drains. We clear grease and root intrusion in dry climates.", icon: Droplets },
                  { title: "Hydro Jetting Services", desc: "Blasts away calcium deposits and debris at 4,000 PSI. Ideal for SD hard water issues.", icon: Waves },
                  { title: "Drain Snaking Services", desc: "Quick unclogging for hair and soap scum in bathroom drains. Effective first step.", icon: Bath },
                  { title: "Camera Inspection Services", desc: "HD scopes locate root removal sewer line problems precisely, avoiding guesswork.", icon: Search },
                  { title: "Commercial Drain Cleaning", desc: "Keeps Mission Beach restaurants flowing without downtime, handling high volume traps.", icon: Building2 }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
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
             <div className="mt-16 text-center">
                <a href={mainTelLink} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">
                  Get a Free Quote today!
                </a>
             </div>
          </div>
        </section>

        {/* 4. COMMON PROBLEMS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase">
                    Common Drain Problems in San Diego
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto">
                    San Diego's dry climate and hard water create specific drain challenges that demand professional intervention.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Slow Drains & Recurring Clogs", d: "Soap scum, hair and food waste build up fast in Pacific Beach rentals.", icon: Clock },
                   { t: "Hard Water Buildup", d: "High calcium from local groundwater causes mineral deposits in La Jolla homes.", icon: Droplets },
                   { t: "Tree Root Intrusion", d: "Water-seeking roots invade clay pipes in Escondido yards, causing 30% of sewer issues.", icon: ThermometerSun },
                   { t: "Sewer Line Backups", d: "Aging Orangeburg pipes in Chula Vista crack from soil shifts in canyons.", icon: ShieldAlert },
                   { t: "Bad Odors & Bacteria", d: "Foul smells from organic decay; common in humid coastal spots like Coronado.", icon: Activity }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm">
                       <div className="w-14 h-14 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-sm text-text/60 font-medium leading-relaxed">{item.d}</p>
                    </div>
                 ))}
                 <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-border flex flex-col justify-center items-center text-center space-y-4 text-white">
                    <ShieldAlert size={48} className="text-primary animate-bounce shadow-primary/20" />
                    <h3 className="text-xl font-bold tracking-tight">Avoid $1,000+ repair bills</h3>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                       San Diego homeowners spend $500+ annually on preventable maintenance.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. SIGNS YOU NEED SERVICE (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                Signs You Need Professional Help
              </h2>
              <p className="text-lg text-text/70 font-medium italic">Do not wait for disaster; spot these warnings early:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Multiple slow drains simultaneously",
                   "Gurgling sounds from pipes (air pockets)",
                   "Water backing up from one fixture to another",
                   "Foul odors persisting despite cleaning",
                   "Standing water longer than 30 minutes"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-sm font-bold text-text tracking-tight uppercase leading-tight">{sign}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHY CHOOSE US (TRUST DRIVER) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Why Choose DrainCleaningNearMe
                </h2>
                <p className="text-text/70 font-medium text-lg italic">The reliable plumbing & drain cleaning plumber of San Diego.</p>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { t: "Licensed & Insured", icon: ShieldCheck, d: "CSLB-compliant for your peace of mind." },
                  { t: "Same-Day Service", icon: Clock, d: "90% of calls handled within hours." },
                  { t: "Advanced Equipment", icon: Hammer, d: "Hydro jetting and inspection cameras." },
                  { t: "Affordable Pricing", icon: Search, d: "Single drain from $99-$299." },
                  { t: "Local SD Expertise", icon: MapPin, d: "Know aging pipes from La Jolla to Chula Vista." }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-xs font-bold text-text tracking-widest uppercase leading-tight">{f.t}</h4>
                     <p className="text-[10px] text-text/40 font-bold uppercase tracking-widest leading-relaxed grow">{f.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. OUR PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-bg border-y border-border">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Simple and stress-free drain unclogging near you.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { t: "Inspection", d: "Quick visual and camera check for root intrusion.", icon: Search },
                   { t: "Diagnosis", d: "Pinpoint cause: grease, minerals or roots.", icon: Activity },
                   { t: "Method selection", d: "Snaking for minor, hydro jetting for tough SD clogs.", icon: Hammer },
                   { t: "Execution", d: "Safe, efficient cleaning with minimal disruption.", icon: CheckCircle2 },
                   { t: "Final testing", d: "Run water to confirm clear flow and no backups.", icon: Waves }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-bg">
                            {i+1}
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

        {/* 8. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Nearly all neighborhoods from La Jolla to Coronado.</p>
             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight leading-tight">{n}</span>
                 </div>
               ))}
               <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center text-primary font-bold text-[10px] uppercase tracking-widest border border-border">
                   Pacific Beach & More
               </div>
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
                  { q: "How much does drain cleaning cost in San Diego?", a: "Single drains run around $99-$299; hydro jetting around $300-$600, depending on severity." },
                  { q: "How long does professional drain cleaning take?", a: "Most jobs take a few hours; emergencies handled same-day." },
                  { q: "DIY vs. Professional unclog drain in San Diego?", a: "DIY works for minor hair clogs, but professionals handle roots and hard water best; avoiding pipe damage." },
                  { q: "Is hydro jetting safe for San Diego pipes?", a: "Yes, safe for modern PVC; we inspect first for aging clay systems." },
                  { q: "Do you offer emergency plumber San Diego services?", a: "24/7, with 60-minute response in areas like Pacific Beach and nearby surroundings." },
                  { q: "What areas do you serve for drain cleaning in San Diego?", a: "La Jolla, Chula Vista, El Cajon, Oceanside, Escondido, Rancho Bernardo, Coronado and more." },
                  { q: "Can you fix French drain cleaning San Diego?", a: "Yes, plus storm drain cleaning in San Diego for coastal rains." }
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

        {/* 10. FINAL CTA / URGENCY (SAN DIEGO) */}
        <section className="py-24 bg-card border-y border-border overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="max-w-5xl mx-auto px-4 text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Do not let clogged drains disrupt your San Diego life!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic">
                 Licensed professionals ready 24/7. Prevent backups; act before it is too late!
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
                    Get Free Estimate
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Needed Zoom Drain Cleaning in San Diego Emergency? We are faster.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
