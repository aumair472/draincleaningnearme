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
  "Downtown", "South Austin", "Westlake", "Lakeline", 
  "Round Rock", "Pflugerville"
];

const mainTelLink = "tel:+17247506935";

export function ATXClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (AUSTIN LOCAL) */}
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">ATX</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured Austin Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> with Upfront Pricing
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Tired of slow drains, foul odors and water backups in Austin? Our licensed local plumbers provide fast, same-day relief from Westlake to Pflugerville.
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
                  Get a Free Estimate
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
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Austin Local Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. EMERGENCY 24/7 (LOCAL CONTEXT) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container text-center space-y-12">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                24/7 Emergency Drain Cleaning Austin
             </h2>
             <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                Backups do not wait and follow the daytime or weekdays. We clear your pipes typically the same day you call.
             </p>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Clogged Kitchen Sinks", d: "Grease and food scraps cleared fast.", icon: Utensils },
                  { t: "Sewer Backups", d: "Caused by Live Oak roots and clay soil roots.", icon: Droplets },
                  { t: "Same-Day Relief", d: "Clear pipes restored before the day ends.", icon: Clock }
                ].map((s, i) => (
                   <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                      <s.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                      <h4 className="text-lg font-bold text-text tracking-tight uppercase">{s.t}</h4>
                      <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase leading-relaxed">{s.d}</p>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* 3. AUSTIN'S UNIQUE PROBLEMS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   Austin's Unique Drain Problems
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    Austin's unique environment; hard water, clay-rich soil and live oak trees; makes drain problems more common than in many other cities. Over time, mineral buildup and grease clogs narrow your pipes.
                   </p>
                   <p>
                    Central Texas's clay-rich soil expands and contracts with temperature changes, stressing underground pipes and causing cracks and misalignments. Live oak roots seek moisture and can invade sewer lines aggressively.
                   </p>
                </div>
                <div className="space-y-4">
                   {[
                     { t: "Limestone Hard Water", d: "Austin's limestone-rich water leaves calcium deposits that scale pipes.", icon: Droplets },
                     { t: "Live Oak Intrusion", d: "Roots seek moisture in sewer lines, causing cracks and blockages.", icon: Activity },
                     { t: "Clay Soil Movement", d: "Soil shifts stress pipes causing cracks and misalignments.", icon: ThermometerSun }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group">
                         <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                            <item.icon size={24} />
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
                 <div className="p-12 rounded-[3.5rem] bg-slate-900 border border-primary/20 text-white shadow-2xl space-y-8 flex flex-col items-center text-center">
                    <ShieldAlert size={64} className="text-primary animate-bounce shadow-primary/20" />
                    <h3 className="text-3xl font-bold text-white tracking-tight leading-tight uppercase italic">Ignoring clogs leads to thousands in damage</h3>
                    <p className="text-lg text-white/50 leading-relaxed font-medium">
                       Mineral buildup and roots cause sewer backups and foul odors. Act now to save your Texas property.
                    </p>
                    <a href={mainTelLink} className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 active:scale-95 transition-all tracking-tighter">
                      (724) 750-6935
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container text-center">
             <div className="mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our Drain Cleaning Services in Austin
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic italic">
                    Same-day emergency services available 24/7 across Travis County.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Emergency Drain Cleaning", desc: "Clear severe clogs and prevent water damage fast. Often within hours.", icon: Zap },
                  { title: "Kitchen Drain Cleaning", desc: "Advanced snaking and hydro jetting for grease, scraps and soap scum.", icon: Utensils },
                  { title: "Bathroom Drain Cleaning", desc: "Restore proper flow to tub, shower and sink clogs. Removes hair and mineral scale.", icon: Bath },
                  { title: "Sewer Line Cleaning", desc: "Uses camera inspection and hydro jetting to clear blockages and prevent recurrence.", icon: Droplets },
                  { title: "Hydro Jetting Austin", desc: "High-pressure blasts up to 4,000 PSI to remove roots and mineral scale.", icon: Waves },
                  { title: "Drain Snaking Dallas", desc: "Flexible cables with cutting blades for minor to moderate Austin clogs.", icon: Hammer }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm"
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
             <div className="mt-16">
                <p className="text-xs font-bold text-text/40 tracking-widest uppercase bg-bg/50 border border-border px-8 py-4 rounded-full inline-block">
                   Up to 50% longer clog-free period with hydro jetting
                </p>
             </div>
          </div>
        </section>

        {/* 5. SIGNS YOU NEED SERVICE (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border text-center">
           <div className="container-narrow space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                Signs You Need Drain Cleaning
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Slow Draining Sinks/Tubs/Toilets",
                   "Recurring Clogs that return after plunging",
                   "Foul Odors signaling sewer line issues",
                   "Gurgling Sounds indicating air trapped by clogs",
                   "Severe Water Backups into tubs or toilets"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/20 transition-all">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-base font-bold text-text tracking-tight uppercase leading-tight text-sm">{sign}</span>
                    </div>
                 ))}
              </div>
              <p className="text-[10px] text-text/40 font-bold uppercase tracking-widest leading-loose max-w-2xl mx-auto italic">
                 "One slow drain is a visit; multiple slow drains signal a deep sewer line issue requiring professional cleaning."
              </p>
           </div>
        </section>

        {/* 6. TYPICAL COSTS & PROCESS (TRANSPARENCY) */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container space-y-20">
              <div className="text-center space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                    Typical Drain Cleaning Costs in Austin
                 </h2>
                 <p className="text-lg text-text/70 font-medium italic">No hidden fees, no obligation estimates.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                 {[
                   { t: "Emergency Service", c: "$150–$300", f: "Same-Day Relief" },
                   { t: "Kitchen/Bathroom", c: "$100–$200", f: "Standard Clogs" },
                   { t: "Sewer Line Cleaning", c: "$300–$800", f: "Camera included" },
                   { t: "Hydro Jetting", c: "$250–$500", f: "Prevents repeats" }
                 ].map((p, i) => (
                   <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border flex flex-col items-center text-center space-y-4 group hover:-translate-y-1 transition-all">
                      <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{p.t}</span>
                      <h4 className="text-3xl font-black text-text tracking-tight">{p.c}</h4>
                      <p className="text-xs text-text/40 font-black uppercase tracking-widest">{p.f}</p>
                   </div>
                 ))}
              </div>

              <div className="space-y-12">
                 <h3 className="text-2xl font-bold text-center text-text uppercase tracking-widest font-black italic">Our Proven Step-by-Step Austin Process</h3>
                 <div className="grid md:grid-cols-5 gap-8">
                   {[
                     { t: "Inspection", d: "Camera scope to identify type and location.", icon: Search },
                     { t: "Diagnosis", d: "Recommend snaking or hydro jetting.", icon: Activity },
                     { t: "Cleaning", d: "Safe removal of roots or mineral scale.", icon: Waves },
                     { t: "Final testing", d: "Flow tests and no-leak confirmations.", icon: CheckCircle2 },
                     { t: "Tips", d: "Water softener and disposal guidelines.", icon: ShieldAlert }
                   ].map((s, i) => (
                     <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                        <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                           <s.icon size={24} />
                        </div>
                        <h4 className="text-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">{s.t}</h4>
                        <p className="text-xs text-text/50 font-semibold leading-relaxed px-4">{s.d}</p>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Proudly Serving Austin Neighborhoods
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Quick response across Travis and Williamson counties.</p>
             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/50 transition-all cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight leading-tight">{n}</span>
                 </div>
               ))}
             </div>
             <div className="mt-12">
                <p className="text-xs font-bold text-primary uppercase tracking-widest text-sm">Serving: Westlake, Round Rock, Pflugerville and South Austin.</p>
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How often should drains be cleaned in Austin?", a: "Residential drains: 1–2 times per year. Commercial drains: every 3–6 months to combat Austin's limestone-rich mineral buildup." },
                  { q: "What is hydro jetting?", a: "Hydro jetting uses high-pressure water (up to 4,000 PSI) to blast away mineral buildup, grease and tree roots. It is eco-friendly and more effective than snaking for long-term health." },
                  { q: "Are chemical cleaners safe for Austin pipes?", a: "No. Chemical cleaners can corrode pipes and damage the environment. We use mechanical snaking or hydro jetting for safe, professional results." },
                  { q: "How fast is emergency service in Austin?", a: "Same-day service available 24/7. Response times vary by location but we typically dispatch within the hour." },
                  { q: "Do you handle tree roots in sewer lines?", a: "Yes, Live Oak roots are a common Austin problem. Our hydro jetting and root-barrier systems prevent severe cracks and recurrence." },
                  { q: "What causes gurgling sounds in pipes?", a: "Gurgling from drains or toilets indicates air trapped in the system due to clogs or venting issues. It's a key sign you need service." }
                ].map((faq, index) => (
                  <div key={index} className="bg-bg border border-border rounded-2xl overflow-hidden shadow-sm hover:border-primary/20 transition-all">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-8 text-left group"
                    >
                      <span className="text-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">{faq.q}</span>
                      <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
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

        {/* 9. FINAL CTA / URGENCY (AUSTIN) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Call Now for Drain Cleaning in Austin
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic">
                 Tired of waiting days? Our licensed Austin plumbers provide same-day, 24/7 emergency service with upfront pricing and no hidden fees.
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
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-2xl hover:border-primary transition-all active:scale-95 tracking-tight font-black"
                 >
                    Get a Free Estimate
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Act now; your drains do not wait for your leisure time! &middot; Licensed, Bonded, Insured.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
