"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap, Bath, Hammer
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TrustBadge } from "@/components/ui/trust-badge";

const suburbs = [
  "Houston", "Spring", "The Woodlands", "Katy", 
  "Sugar Land", "Pearland", "Cypress", "Clear Lake"
];

const mainTelLink = "tel:+17247506935";

export function HoustonClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (HIGH CONVERSION) */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="HTX"
                text="Licensed and Insured Houston Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> in Houston – 24/7
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Need emergency drain cleaning in Houston? We provide fast, affordable clogged drain repair, sewer line cleaning and hydro jetting services across Houston and surrounding areas.
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
                  Get free estimate
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Rated 4.8/5</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day dispatch</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Houston Support</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY HOUSTON NEEDS EXPERTS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                  Why Houston homes need professional drain cleaning
                </h2>
                <p className="text-lg text-text/70 leading-relaxed font-medium">
                  Houston's unique climate and soil makeup create specific plumbing challenges that require local expertise to navigate safely.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { t: "Expansive clay soil", d: "Soil movement stresses buried pipes, causing shifts and cracks." },
                     { t: "Heavy rainfall & flooding", d: "Intense downpours overwhelm systems and storm drains." },
                     { t: "Tree root intrusion", d: "Houston's lush canopy aggressively seeks water in sewer lines." },
                     { t: "Aging infrastructure", d: "Older pipes in Harris County require careful HD camera diagnostics." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg border border-border shadow-sm group hover:bg-card hover:border-primary/20 transition-all">
                         <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <Activity size={20} />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-text mb-1">{item.t}</h4>
                            <p className="text-xs text-text/50 font-semibold">{item.d}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Building2 size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Harris County experts</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed">
                       We provide complete coverage across the Greater Houston area, specifically equipped for local soil conditions.
                    </p>
                    <div className="absolute bottom-0 inset-x-0 p-8 bg-slate-900 text-white font-bold text-xs flex justify-between uppercase tracking-widest">
                       <span>Spring</span>
                       <span>Pearland</span>
                       <span>The Woodlands</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SIGNS YOU NEED SERVICE (HIGH INTENT) */}
        <section className="py-24 bg-bg border-b border-border text-center">
           <div className="container-narrow space-y-16">
              <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Signs you need drain cleaning in Houston
                 </h2>
                 <p className="text-text/70 font-medium text-lg italic">
                    If you're noticing these symptoms, your plumbing system needs professional attention before a major failure occurs.
                 </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {[
                   { t: "Slow drains", icon: Clock },
                   { t: "Standing water", icon: Droplets },
                   { t: "Foul odors", icon: Activity },
                   { t: "Gurgling pipes", icon: Waves },
                   { t: "Water backing up", icon: ShieldAlert }
                 ].map((sign, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                         <sign.icon size={24} />
                      </div>
                      <span className="text-xs font-bold text-text/80 tracking-tight">{sign.t}</span>
                   </div>
                 ))}
              </div>
              <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
                 <p className="text-sm font-bold text-primary">Early action prevents major slab leaks and costly foundation repairs. Call (724) 750-6935.</p>
              </div>
           </div>
        </section>

        {/* 4. SERVICES GRID (HIGH VALUE + SEO) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our drain cleaning services in Houston
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                    Professional, localized solutions for the unique plumbing systems of Houston homes and businesses.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Kitchen drain cleaning Houston", desc: "Remove grease, food buildup and stubborn blockages safely from sink lines.", icon: Utensils },
                  { title: "Bathroom drain cleaning Houston", desc: "Clear hair, soap scum and sludge from tubs, showers and toilets instantly.", icon: Bath },
                  { title: "Sewer line cleaning & repair Houston", desc: "Fix root intrusion and major blockages that threaten your home's foundation.", icon: Droplets },
                  { title: "Hydro jetting Houston TX", desc: "4000 PSI deep pipe cleaning to remove scale and roots without digging.", icon: Waves },
                  { title: "Emergency drain cleaning Houston", desc: "24/7 fast response system. Pro technicians on call for immediate relief.", icon: Zap },
                  { title: "Drain camera inspection", desc: "Accurate problem detection in HD to see exactly what's blocking your lines.", icon: Search }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-primary/20 transition-all hover:shadow-2xl group flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest">
                       Call for fast service <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. COMMON CAUSES (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight text-center lg:text-left">
                      Common causes of drain clogs in Houston
                   </h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { t: "Grease & food waste", d: "Kitchen sink clogs.", icon: Utensils },
                        { t: "Hair & soap buildup", d: "Shower and tub issues.", icon: Droplets },
                        { t: "Hard water deposits", d: "Scale on historic pipes.", icon: Building2 },
                        { t: "Tree root intrusion", d: "Major mainline backups.", icon: Activity },
                        { t: "Aging pipes & soil", d: "Internal structural stress.", icon: Trash2 }
                      ].map((item, i) => (
                         <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border group hover:border-primary/20 transition-all">
                            <item.icon size={24} className="text-primary" />
                            <div>
                               <h4 className="text-sm font-bold text-text mb-1">{item.t}</h4>
                               <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase italic">{item.d} — Recurring issue</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="relative">
                   <div className="p-12 rounded-[3.5rem] bg-slate-900 border border-primary/20 text-white shadow-2xl space-y-8">
                      <ShieldAlert size={48} className="text-primary" />
                      <h3 className="text-3xl font-bold text-white tracking-tight">Prevention is priority</h3>
                      <p className="text-lg text-white/50 leading-relaxed font-medium">
                         Ignoring recurring clogs in Houston can lead to cracked foundations and expensive slab repairs as pressure builds within the slab plumbing.
                      </p>
                      <div className="flex items-center gap-4 text-primary font-bold">
                         <Plus size={24} /> Get help before it breaks
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE US (CONVERSION) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Why choose DrainCleaningNearMe in Houston
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Dedicated support across the Greater Houston area.</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { t: "Houston-Based Experts", icon: MapPin },
                  { t: "Same-Day Service", icon: Clock },
                  { t: "24/7 Availability", icon: Zap },
                  { t: "Transparent Pricing", icon: Search },
                  { t: "Advanced Equipment", icon: Hammer },
                  { t: "100% Guaranteed", icon: CheckCircle2 }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/20 transition-all">
                     <f.icon size={28} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-[10px] font-bold text-text tracking-widest uppercase leading-tight">{f.t}</h4>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-bg border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our 5-step drain cleaning process
                 </h2>
                 <p className="text-text/70 font-medium text-lg">Ensures long-term results and structural safety for your home.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { num: "1", t: "Inspection", d: "Initial camera diagnostic check.", icon: Search },
                   { num: "2", t: "Diagnosis", d: "Pinpoint cause & depth of clog.", icon: Activity },
                   { num: "3", t: "Method", d: "Selection of snake or hydro jetting.", icon: Hammer },
                   { num: "4", t: "Cleaning", d: "Clear blockage & scrub pipe walls.", icon: Droplets },
                   { num: "5", t: "Testing", d: "Final water & camera flow verification.", icon: CheckCircle2 }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
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

        {/* 8. SERVICE AREAS (SUBURB GRID) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-12">
               Drain cleaning services across Houston
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
               {suburbs.map(s => (
                 <div key={s} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/20 transition-all">
                    <MapPin size={24} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-base font-bold text-text tracking-tight">{s}</span>
                 </div>
               ))}
             </div>
             <p className="mt-12 text-sm font-bold text-text/40 tracking-widest uppercase italic leading-relaxed">Fast response across Houston and Harris County</p>
          </div>
        </section>

        {/* 9. RESIDENTIAL & COMMERCIAL */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { t: "Homes & Apartments", d: "Bathroom & kitchen relief.", icon: Building2 },
                   { t: "Restaurants & Kitchens", d: "Heavy grease management.", icon: Utensils },
                   { t: "Offices & Buildings", d: "Complete system maintenance.", icon: MapPin }
                 ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[3rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-6 group hover:-translate-y-2 transition-all">
                       <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                          <item.icon size={32} />
                       </div>
                       <h3 className="text-xl font-bold text-text tracking-tight uppercase leading-tight">{item.t}</h3>
                       <p className="text-xs font-bold text-text/40 tracking-widest uppercase">{item.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. PREVENTION TIPS */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase">
                Houston drain prevention tips
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Avoid pouring grease down kitchen sinks",
                   "Use secondary drain strainers in bathrooms",
                   "Flush with hot water after heavy usage",
                   "Schedule regular annual camera cleaning",
                   "Keep deep-root trees away from main sewer lines"
                 ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-bg border border-border shadow-sm">
                       <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Plus size={14} className="text-primary" />
                       </div>
                       <span className="text-sm font-bold text-text tracking-tight leading-loose">{tip}</span>
                    </div>
                 ))}
              </div>
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
                  { q: "Cost of drain cleaning in Houston?", a: "Most professional jobs range from $150 to $350 depending on depth and complexity." },
                  { q: "Emergency response time?", a: "We offer both same-day dispatch and 24/7 priority emergency response systems." },
                  { q: "DIY possible for Houston clogs?", a: "Only Recommended for minor hair clogs. Recurring blockages always need professional diagnostics." },
                  { q: "Hydro jetting vs snaking?", a: "Snaking is a quick punch-through; Jetting is a deep cleaning of entire pipe walls." },
                  { q: "How often clean drains in Houston?", a: "We recommend professional cleaning once or twice yearly for Houston properties." }
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
              <div className="grid sm:grid-cols-4 gap-4">
                 {[
                   { t: "Major Flooding", icon: Waves },
                   { t: "Sewer Backups", icon: Droplets },
                   { t: "Mold damage", icon: ShieldAlert },
                   { t: "Expensive Repairs", icon: Trash2 }
                 ].map((e, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-bg border border-red-600/10 shadow-sm text-center">
                      <e.icon size={28} className="text-red-600 mb-2" />
                      <span className="text-[10px] font-bold text-text tracking-widest uppercase leading-relaxed">Ignoring clogs can cause <span className="block text-red-600 font-black">{e.t}</span></span>
                   </div>
                 ))}
              </div>
              <p className="text-xl text-text/60 font-medium italic">Fix Houston drain issues early and save money on restoration.</p>
           </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-24 bg-bg">
           <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 rounded-[4rem] bg-slate-900 border border-primary/20 text-white text-center shadow-2xl relative overflow-hidden group"
              >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                  <div className="relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                       Call Now for Drain Cleaning in Houston
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto italic">
                       Do not let a small clog turn into a major plumbing disaster. Protect your home, health and property with professional 24/7 service.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight"
                       >
                          <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                          (724) 750-6935
                       </a>
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-bold text-2xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 tracking-tight"
                       >
                          Book Service Online
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
