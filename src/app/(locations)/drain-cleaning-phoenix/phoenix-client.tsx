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
  "Downtown Phoenix", "Scottsdale", "Glendale", "Tempe", 
  "Mesa", "Paradise Valley"
];

const mainTelLink = "tel:+17247506935";

export function PhoenixClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (FIXED / SHORT) */}
        <section className="relative min-h-[70vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">PHX</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured Phoenix Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & Clog Removal in Phoenix: <span className="text-primary italic font-black text-6xl md:text-8xl">Fast, Reliable & Local</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Phoenix homes often battle stubborn drain issues due to hard water minerals that build up inside pipes, trapping grease, hair and debris for frequent clogs.
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
                  Get Same-Day Service
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
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Phoenix Local Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. DRAIN PROBLEMS IN PHOENIX (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   Drain Problems in Phoenix Homes
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    Phoenix homes often battle stubborn drain issues due to hard water minerals that build up inside pipes, trapping grease, hair and debris for frequent clogs. Imagine the stress of standing water in your kitchen sink during dinner preparation or a foul odor from bathroom drains ruining your morning routine; common nightmares from slow drains, pipe blockages and root intrusion in sewer lines.
                   </p>
                   <p>
                    Hard water in Phoenix accelerates mineral deposits, while grease buildup from cooking and tree roots seeking moisture invade sewer lines, leading to backups and gurgling sounds. We understand the frustration of recurring clogs that DIY plungers cannot fix, especially in older homes where pipes narrow over time.
                   </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner">
                   <p className="text-sm font-bold text-text/50 italic leading-relaxed">
                      "Our licensed plumbers deliver emergency drain cleaning Phoenix-wide services, ensuring same-day service with no hidden charges or temporary patches."
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-[4/3] bg-bg border border-border rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ThermometerSun size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Arid climate specialists</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed">
                       Highly trained for Phoenix's mineral-rich water and aggressive tree root behaviors.
                    </p>
                    <div className="absolute top-0 right-0 p-8">
                       <ShieldCheck size={40} className="text-primary opacity-20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COMMON PROBLEMS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto">
                    Common Drain Problems in Phoenix
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto">
                    Phoenix's arid climate and hard water create unique drain challenges, with clogs often stemming from multiple factors.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Slow Draining Sinks & Tubs", d: "From soap scum and hard water buildup, causing frustrating backups during showers or dish-washing.", icon: Clock },
                   { t: "Recurring Kitchen Clogs", d: "Due to grease solidification and food particles, worsened by Phoenix's mineral rich water.", icon: Utensils },
                   { t: "Sewer Line Backups", d: "From tree root intrusion, common in mature neighborhoods with mesquite or ficus trees.", icon: Droplets },
                   { t: "Foul Odors", d: "Signaling deep pipe blockages or sewer issues, releasing harmful gases into your home.", icon: Activity },
                   { t: "Gurgling Sounds", d: "Indicating air pockets from partial obstructions, leading to full overflows if ignored.", icon: Waves }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-card border border-border group hover:border-primary/20 transition-all shadow-sm">
                       <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-sm text-text/60 font-medium leading-relaxed">{item.d}</p>
                    </div>
                 ))}
                 <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center items-center text-center space-y-4">
                    <ShieldAlert size={48} className="text-primary" />
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">Demand professional clogged drain repair</h3>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Safe resolution for all Phoenix homes</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our Drain Cleaning Services in Phoenix
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                    Specialized solutions customized to local needs, using state-of-the-art equipment for thorough results.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Kitchen drain cleaning Phoenix", desc: "Blasts away grease and food debris to prevent backups and odors in Phoenix homes.", icon: Utensils },
                  { title: "Bathroom drain unclogging Phoenix", desc: "Hair, soap and hard water scum removed completely without damaging fixtures.", icon: Bath },
                  { title: "Sewer line cleaning Phoenix", desc: "Target root intrusion and debris in sewer lines avoiding excavation for most cases.", icon: Droplets },
                  { title: "Hydro jetting services Phoenix AZ", desc: "High-pressure water jets cut through roots and minerals safely for longer-lasting clears.", icon: Waves },
                  { title: "Emergency drain cleaning Phoenix", desc: "Available 24/7 for urgent clogs with rapid response to stop water damage.", icon: Zap },
                  { title: "Drain camera inspection", desc: "Pinpoint issues like cracks or roots before cleaning to ensure precise blockage removal.", icon: Search }
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
                       Call for expert help <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. WHY PROFESSIONAL MATTERS (CONVERSION) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                      Why Professional Drain Cleaning Matters
                   </h2>
                   <p className="text-lg text-text/70 font-medium leading-relaxed">
                      DIY methods like plungers or chemical cleaners offer only temporary fixes and risk pipe damage from harsh acids that corrode lines without removing deep blockages.
                   </p>
                   <div className="space-y-4">
                      <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group">
                         <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                            <Plus size={24} />
                         </div>
                         <div>
                            <h4 className="text-base font-bold text-text mb-1">Total root extraction</h4>
                            <p className="text-sm text-text/50 font-semibold">Hydro jetting clears roots and buildup completely.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group">
                         <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                            <Plus size={24} />
                         </div>
                         <div>
                            <h4 className="text-base font-bold text-text mb-1">Long-term savings</h4>
                            <p className="text-sm text-text/50 font-semibold">Catch clogs early for $99 instead of $450 sewer fixes.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="relative">
                   <div className="p-12 rounded-[3.5rem] bg-slate-900 border border-primary/20 text-white shadow-2xl space-y-8 flex flex-col items-center text-center">
                      <ShieldCheck size={64} className="text-primary" />
                      <h3 className="text-3xl font-bold text-white tracking-tight">Professional intervention prevents health risks</h3>
                      <p className="text-lg text-white/50 leading-relaxed font-medium">
                         Stop foul odors and standing water hazards in their tracks with expert-led restoration.
                      </p>
                      <a href={mainTelLink} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">
                        Call (724) 750-6935
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. OUR PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our Step-by-Step Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg italic">Efficiency builds confidence; here is how we work.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { num: "1", t: "Inspection", d: "Arrive fast and use camera inspection to locate blockages precisely.", icon: Search },
                   { num: "2", t: "Diagnosis", d: "Identify causes like roots or grease to choose the best method.", icon: Activity },
                   { num: "3", t: "Clearing", d: "Deploy hydro jetting or specialized tools for complete removal.", icon: Waves },
                   { num: "4", t: "Testing", d: "Run water through all fixtures to confirm smooth drainage.", icon: CheckCircle2 },
                   { num: "5", t: "Prevention", d: "Share personalized advice to avoid future slow drains.", icon: ShieldAlert }
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

        {/* 7. WHY CHOOSE US (TRUST DRIVER) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                  Why Choose DrainCleaningNearMe in Phoenix
                </h2>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { t: "Licensed & Insured", icon: ShieldCheck },
                  { t: "Same-Day Service", icon: Clock },
                  { t: "24/7 Availability", icon: Zap },
                  { t: "Pricing from $99", icon: Search },
                  { t: "Hydro Jetting", icon: Waves },
                  { t: "100% Satisfaction", icon: Star }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                     <f.icon size={28} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-[10px] font-bold text-text tracking-widest uppercase leading-tight">{f.t}</h4>
                  </div>
                ))}
             </div>
             <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="p-8 bg-card border border-border rounded-3xl shadow-xl flex flex-col items-center text-center max-w-sm">
                   <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-accent text-accent" />)}
                   </div>
                   <p className="text-lg font-bold text-text mb-2 tracking-tight">“Fixed our sewer backup same-day, no mess!”</p>
                </div>
                <div className="p-8 bg-card border border-border rounded-3xl shadow-xl flex flex-col items-center text-center max-w-sm">
                   <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-accent text-accent" />)}
                   </div>
                   <p className="text-lg font-bold text-text mb-2 tracking-tight">“Hydro jetting cleared roots perfectly.”</p>
                </div>
             </div>
          </div>
        </section>

        {/* 8. SIGNS YOU NEED DRAIN CLEANING */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                Signs You Need Drain Cleaning
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Water backing up in sinks, tubs or toilets",
                   "Slow drains persisting after plunging",
                   "Bad smells or foul odors from drains",
                   "Multiple fixtures clogging at once"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/30 transition-all">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-base font-bold text-text tracking-tight">{sign}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. PREVENTION TIPS */}
        <section className="py-24 bg-bg border-b border-border text-center">
           <div className="container-narrow space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                Preventive Maintenance Tips
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { t: "Avoid grease", icon: Trash2 },
                   { t: "Use strainers", icon: Hammer },
                   { t: "Bi-annual cleaning", icon: Clock },
                   { t: "Skip chemicals", icon: ShieldAlert }
                 ].map((tip, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:-translate-y-2 transition-all">
                       <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center text-primary shadow-inner">
                          <tip.icon size={22} />
                       </div>
                       <span className="text-xs font-bold text-text/80 tracking-widest uppercase">{tip.t}</span>
                    </div>
                 ))}
              </div>
              <p className="text-sm font-bold text-text/40 tracking-widest uppercase leading-relaxed max-w-2xl mx-auto">
                 "Professional maintenance saves you from the stress of emergency standing water and foul morning odors."
              </p>
           </div>
        </section>

        {/* 10. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Proudly Serving Phoenix and Surrounding Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Quick response across all desert neighbors.</p>
             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight leading-tight">{n}</span>
                 </div>
               ))}
               <div className="p-6 rounded-2xl bg-slate-900 border border-border shadow-sm flex flex-col items-center justify-center text-primary font-bold text-xs uppercase tracking-widest">
                   Scottsdale & Nearby
               </div>
             </div>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in Phoenix?", a: "Basic unclogs start at $99, sewer line cleaning $250–$450, with free quotes based on inspection." },
                  { q: "What causes frequent drain clogs?", a: "Hard water minerals, grease, hair, and tree roots in Phoenix narrow pipes over time." },
                  { q: "Is hydro jetting safe for pipes?", a: "Yes, for most modern systems; it is eco-friendly and effective on roots without chemicals, but we inspect older pipes first." },
                  { q: "How fast can you arrive for emergency drain cleaning Phoenix?", a: "Within the hour for 24/7 emergencies, same-day for all services." },
                  { q: "Do you offer emergency services?", a: "Absolutely, 24/7 for clogged drain repair, sewer cleaning, and more in Phoenix." },
                  { q: "How do you handle root intrusion in sewer lines?", a: "Hydro jetting cuts roots effectively; we recommend barriers or inspections for prevention." },
                  { q: "Do you service storm drain cleaning or french drains in Phoenix?", a: "Yes, we clear storm and french drains from roots and debris safely." }
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

        {/* 12. URGENCY SECTION */}
        <section className="py-24 bg-card overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight">
                 Do not wait – drain problems get worse fast
              </h2>
              <div className="grid sm:grid-cols-4 gap-6">
                 {[
                   { t: "Structural flooding", icon: Waves },
                   { t: "Mold development", icon: ShieldAlert },
                   { t: "Sewer backups", icon: Trash2 },
                   { t: "Avoidable $450 repairs", icon: Clock }
                 ].map((e, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-bg border border-red-600/10 shadow-sm text-center group hover:border-red-600/30 transition-all">
                      <e.icon size={28} className="text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold text-text tracking-widest uppercase leading-relaxed">Ignoring clogs can cause <span className="block text-red-600 font-black">{e.t}</span></span>
                   </div>
                 ))}
              </div>
              <p className="text-xl text-text/60 font-medium italic">Act early and save thousands in preventable property restoration costs.</p>
           </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-24 bg-bg">
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
                        Call Now for Fast Drain Cleaning in Phoenix!
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto italic">
                         Available 24/7 with free estimates; no hidden charges. Licensed Phoenix experts ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight"
                       >
                          <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                          (724) 750-6935
                       </a>
                    </div>
                    <p className="text-xs font-bold text-white/20 tracking-widest uppercase">
                       Same-Day Service Guaranteed &middot; 24/7 Priority Emergency Dispatch
                    </p>
                  </div>
              </motion.div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
