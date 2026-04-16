"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const neighborhoods = [
  "Downtown LA", "Hollywood", "Beverly Hills", 
  "Santa Monica", "Pasadena", "Sherman Oaks", 
  "Glendale", "Long Beach", "Culver City"
];

const mainTelLink = "tel:+17247506935";

export function LAClient() {
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
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-card border border-border rounded-full shadow-sm mb-10"
              >
                <div className="flex -space-x-1.5">
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">LA</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and bonded Los Angeles plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & Repair in <span className="text-primary">Los Angeles</span> – Available 24/7
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Stop leaks, backups and odors before they ruin your day. Licensed professionals fix drains same-day in Los Angeles. From clogged sinks in Downtown LA to sewer backups in Pasadena – we fix the problem fast.
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
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-day service</div>
                 <div className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> Across LA County</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY LA NEEDS EXPERTS (LOCAL CONTEXT) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                  Why Los Angeles homes need expert drain cleaning services
                </h2>
                <p className="text-lg text-text/70 leading-relaxed font-medium">
                  Los Angeles has unique plumbing challenges that require local expertise to solve safely and efficiently.
                </p>
                <div className="grid gap-6">
                   {[
                     { t: "Aging pipes from older infrastructure", d: "Historic Los Angeles homes often feature decades-old cast iron pipes." },
                     { t: "Hard water mineral buildup", d: "Local water sources cause stubborn scale that restricts flow over time." },
                     { t: "Tree root intrusion", d: "A major problem in Hollywood Hills, Pasadena, and residential areas." },
                     { t: "High water usage in dense areas", d: "Continuous strain on plumbing in Downtown LA and apartment complexes." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg border border-border hover:border-primary/20 transition-all shadow-sm group">
                         <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <ArrowIcon />
                         </div>
                         <div>
                            <h4 className="text-base font-bold text-text mb-1">{item.t}</h4>
                            <p className="text-xs text-text/50 font-semibold">{item.d}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Building2 size={80} className="text-primary mb-8" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Expert local plumbing</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed">
                       We understand the unique shifting soil and infrastructure challenges specific to the Los Angeles basin.
                    </p>
                    <div className="absolute bottom-0 inset-x-0 p-8 bg-primary text-white font-bold text-xs flex justify-between uppercase tracking-widest">
                       <span>Licensed Professionals</span>
                       <span>24/7 Availability</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID (HIGH VALUE) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our drain cleaning services in Los Angeles
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                    From minor sink clogs to major sewer line backups, we connect you with the right local LA expert instantly.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Drain cleaning Los Angeles", desc: "Removes grease, hair, and debris. Ideal for slow drains and individual fixture clogs.", icon: Utensils },
                  { title: "Sewer line cleaning Los Angeles", desc: "Fix multiple drain backups and prevent sewage overflow using professional rooters.", icon: Droplets },
                  { title: "Hydro jetting Los Angeles", desc: "4000 PSI deep cleaning for grease and root removal without damaging your pipes.", icon: Waves },
                  { title: "Camera inspection Los Angeles", desc: "Detect cracks, roots, and corrosion with HD video diagnostic tools—no digging required.", icon: Search },
                  { title: "Emergency drain cleaning Los Angeles", desc: "24/7 fast response system. Local professionals arrive in under 60 minutes in many areas.", icon: Zap }
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
                    <a href={mainTelLink} className="mt-8 px-6 py-2.5 bg-bg border border-border rounded-xl text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
                       Book same-day service
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. COMMON PROBLEMS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                   <div className="p-10 bg-bg border border-border rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full" />
                      <h3 className="text-2xl font-bold text-text tracking-tight relative z-10">Common drain problems in Los Angeles</h3>
                      <div className="space-y-4">
                        {[
                          { t: "Grease buildup", d: "Major cause in restaurants and kitchens.", p: "Can lead to $10,000 repairs if ignored." },
                          { t: "Hair & soap clogs", d: "Standard bathroom blockages.", p: "Easily cleared with professional snaking." },
                          { t: "Tree root intrusion", d: "Common in older Hollywood neighborhoods.", p: "Requires specialized rooter equipment." },
                          { t: "Pipe corrosion", d: "Result of local hard water over time.", p: "Detected via camera inspection diagnostic." }
                        ].map((item, i) => (
                           <div key={i} className="flex gap-4 p-4 rounded-xl bg-card border border-border shadow-sm group hover:border-red-600/20 transition-all">
                              <div className="w-8 h-8 rounded-lg bg-red-600/5 text-red-600 flex items-center justify-center shrink-0">
                                 <Activity size={16} />
                              </div>
                              <div>
                                 <h4 className="text-sm font-bold text-text mb-0.5">{item.t}</h4>
                                 <p className="text-[10px] font-semibold text-text/40 italic">{item.d} — {item.p}</p>
                              </div>
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                      Don't let a minor clog turn into a major expense
                   </h2>
                   <p className="text-lg text-text/70 font-medium leading-relaxed">
                      Small clogs in Los Angeles homes often hide larger structural issues. By the time multiple drains back up, the cost of repair can triple. Our proactive approach saves you thousands in preventable damage.
                   </p>
                   <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-sm font-bold text-text/60">
                         <CheckCircle2 size={18} className="text-primary" /> Professional diagnostics
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-text/60">
                         <CheckCircle2 size={18} className="text-primary" /> Upfront transparent pricing
                      </div>
                   </div>
                   <a href={mainTelLink} className="inline-flex items-center gap-2 text-primary font-bold text-sm group">
                      Get a professional assessment now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
             </div>
          </div>
        </section>

        {/* 5. WARNING SIGNS (HIGH INTENT) */}
        <section className="py-24 bg-bg border-b border-border text-center">
           <div className="container-narrow space-y-16">
              <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Signs you need drain cleaning in Los Angeles
                 </h2>
                 <p className="text-text/70 font-medium text-lg italic">
                    If you notice any of these signs, your plumbing system is failing. Call immediately to avoid property damage.
                 </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {[
                   { t: "Slow drains", icon: Clock },
                   { t: "Foul odors", icon: Activity },
                   { t: "Gurgling pipes", icon: Waves },
                   { t: "Multiple backups", icon: ShieldAlert },
                   { t: "Water pooling", icon: Droplets }
                 ].map((sign, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                         <sign.icon size={24} />
                      </div>
                      <span className="text-xs font-bold text-text/80 tracking-tight">{sign.t}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHY CHOOSE US (CONVERSION) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Why choose DrainCleaningNearMe Los Angeles?
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">High-trust professional network for the entire Los Angeles county.</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {[
                  { t: "Licensed & Insured", icon: ShieldCheck },
                  { t: "Same-Day Service", icon: Clock },
                  { t: "24/7 Emergency", icon: Zap },
                  { t: "Pricing from $99", icon: Search },
                  { t: "Hydro Jetting", icon: Waves },
                  { t: "Local Expertise", icon: MapPin },
                  { t: "100% Guaranteed", icon: CheckCircle2 }
                ].map((f, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-bg border border-border flex flex-col items-center text-center space-y-4 group hover:border-primary/20 transition-all shadow-sm">
                     <f.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
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
                 <p className="text-text/70 font-medium text-lg">Most professional Los Angeles jobs are completed within hours of your call.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { num: "1", t: "Inspection", d: "Camera or manual system diagnostic check.", icon: Search },
                   { num: "2", t: "Diagnosis", d: "Pinpoint exact clog location and root cause.", icon: Activity },
                   { num: "3", t: "Cleaning", d: "Professional snaking or hydro jetting experts.", icon: Droplets },
                   { num: "4", t: "Testing", d: "Confirm full flow restoration in the lines.", icon: CheckCircle2 },
                   { num: "5", t: "Prevention", d: "Ongoing tips to avoid repeat system failure.", icon: ShieldAlert }
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

        {/* 8. SERVICE AREAS (NEIGHBORHOOD GRID) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Drain cleaning services across Los Angeles
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Fast local response from Downtown to the Valley.</p>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               {neighborhoods.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex items-center gap-4 group hover:border-primary/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight">{n}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Cost of drain cleaning in LA?", a: "Professional drain cleaning services generally start around $99 for simple local clogs." },
                  { q: "Emergency service available?", a: "Yes, our network is active 24/7 for Los Angeles emergencies." },
                  { q: "Causes of clogs?", a: "The primary culprits in LA are grease, hair, and invasive tree roots." },
                  { q: "Is hydro jetting safe?", a: "Yes, it is a safe and highly effective deep cleaning method for most pipes." },
                  { q: "Time to fix?", a: "Most jobs are diagnosed and completely fixed same-day within 1–2 hours." }
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

        {/* 10. URGENCY SECTION */}
        <section className="py-24 bg-card overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight">
                 Do not wait – drain problems get worse fast
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                 {[
                   { t: "Structural flooding", icon: Waves },
                   { t: "Toxic mold growth", icon: ShieldAlert },
                   { t: "Expensive backups", icon: Trash2 }
                 ].map((e, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-bg border border-red-600/10 shadow-sm text-center group hover:border-red-600/30 transition-all">
                      <e.icon size={32} className="text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-text tracking-tight uppercase tracking-widest leading-relaxed">Ignoring clogs can cause <span className="block text-red-600">{e.t}</span></span>
                   </div>
                 ))}
              </div>
              <p className="text-xl text-text/60 font-medium italic">Act early and save thousands in preventable restoration costs.</p>
           </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-24 bg-bg">
           <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 rounded-[4rem] bg-primary text-white text-center shadow-2xl relative overflow-hidden group"
              >
                  <div className="relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                       Call now for same-day drain cleaning in Los Angeles
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mx-auto italic">
                       Protect your home, health and property with fast, professional local LA service. Available 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-white text-primary rounded-2xl font-bold text-2xl shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight"
                       >
                          <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                          (724) 750-6935
                       </a>
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-bold text-2xl hover:bg-white hover:text-primary transition-all active:scale-95 tracking-tight"
                       >
                          Get free estimate
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

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
