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

const serviceAreas = [
  { name: "South Philly", desc: "Rowhomes, grease clogs" },
  { name: "West Philadelphia", desc: "Basements, backups" },
  { name: "Northeast Philadelphia", desc: "Drain cleaning focus" },
  { name: "Center City", desc: "High-rises, quick response" },
  { name: "Surrounding Counties", desc: "Bucks, Montgomery, Delaware" }
];

const mainTelLink = "tel:+17247506935";

export function PhiladelphiaClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (PHILLY FOCUS) */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="PHL"
                text="Licensed & Insured Philadelphia Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Fast, Professional Drain Cleaning Services in <span className="text-primary italic font-black">Philadelphia</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Expert solutions for clogged drains, main lines and sewers; available 24/7. Trusted row-home specialists from South Philly to the Northeast.
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
                  Get Free Estimate
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Emergency Service</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> 100% Satisfaction Guarantee</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL HOOK & AUTHORITY (PHILLY CONTEXT) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   Philadelphia's plumbing heritage & challenges
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    In Philadelphia's tight row-homes from South Philly to Northeast neighborhoods, a simple slow drain can escalate to foul-smelling backups flooding your basement; especially with the city's aging cast iron and clay pipes vulnerable to corrosion and tree root intrusion.
                   </p>
                   <p>
                    Grease from cheese-steak grease traps clogs kitchens, hair mats bathrooms and winter freezes stress pipes leading to pipe blockages. Seasonal woes peak in winter, when temperature swings cause pipe stress, amplified by heavy rainfall overwhelming the combined sewer system.
                   </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Building2 size={60} /></div>
                   <h3 className="text-xl font-bold text-text mb-4 tracking-tight">Picture this:</h3>
                   <p className="text-sm text-text/50 italic leading-relaxed">
                      "It is a rainy spring evening in Center City, your kitchen sink gurgling with standing water after dinner, and that foul odor signals a deeper sewer issue in Philly's combined system. Do not wait for emergencies."
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Activity size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Philly localized experts</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed">
                       Vetted technicians who know row-house galleys and Northeast root intrusion patterns.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                          Affordable rates: $99–$410
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES (ROW-HOME FOCUS) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our Drain Cleaning Services in Philadelphia
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                    State-of-the-art tools tailored to Philadelphia's historic infrastructure.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Drain Snaking (Auger)", desc: "Versatile initial blockage removal for row-house kitchen or bathroom lines.", icon: Hammer },
                  { title: "Hydro Jetting Philadelphia", desc: "Our flagship for deep cleaning; 3k-4k PSI water blasts for cast iron pipes.", icon: Waves },
                  { title: "Sewer Line Cleaning Philadelphia", desc: "Targets main lines to clear tree roots and debris in combined sewer systems.", icon: Droplets },
                  { title: "HD Camera Inspection", desc: "High-definition scopes to locate exact issues like corrosion or tree roots.", icon: Search },
                  { title: "Emergency Drain Services", desc: "24/7 for sudden backups, including Philly sewer hydro jetting for rapid response.", icon: Zap },
                  { title: "French Drain Cleaning", desc: "Equipped for niche needs like Northeast French drain cleaning & storm lines.", icon: Bath }
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
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest">
                       Learn more <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
             <div className="mt-16 text-center">
                <p className="text-sm font-bold text-text/40 tracking-widest uppercase bg-card/50 border border-border px-8 py-4 rounded-full inline-block">
                   95% cleaner pipes per industry standards
                </p>
             </div>
          </div>
        </section>

        {/* 4. COMMON PROBLEMS TABLE (SEO AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Common Drain Problems in Philadelphia
                </h2>
                <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                   Philly's urban density and historic plumbing breed specific woes; here is how we solve them.
                </p>
             </div>
             <div className="overflow-x-auto rounded-[2rem] border border-border shadow-2xl bg-bg">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                         <th className="p-8 border-r border-white/10">Problem</th>
                         <th className="p-8 border-r border-white/10">Philly-Specific Causes</th>
                         <th className="p-8 border-r border-white/10">Signs & Risks</th>
                         <th className="p-8">Our Fix</th>
                      </tr>
                   </thead>
                   <tbody className="text-xs font-bold text-text/70 uppercase tracking-tight">
                      {[
                        { p: "Slow Drains", c: "Grease buildup kitchens, soap/hair bathrooms", s: "Gurgling, sluggish flow; leads to full clogs", f: "Snaking + tips" },
                        { p: "Recurring Clogs", c: "Corrosion in cast iron/clay pipes", s: "Frequent backups; pipe failure", f: "Hydro jetting" },
                        { p: "Foul Odors", c: "Standing water, bacterial traps", s: "Smelly drains; health issues", f: "Camera + cleaning" },
                        { p: "Water Backups", c: "Combined sewers + rain", s: "Basement flooding; $5K+ damage", f: "Emergency sewer" },
                        { p: "Tree Root Damage", c: "Roots in clay joints", s: "Blockages, pipe cracks", f: "RootX + jetting" }
                      ].map((row, i) => (
                         <tr key={i} className="border-t border-border hover:bg-card transition-colors">
                            <td className="p-8 border-r border-border text-primary font-black uppercase text-sm">{row.p}</td>
                            <td className="p-8 border-r border-border leading-relaxed">{row.c}</td>
                            <td className="p-8 border-r border-border leading-relaxed">{row.s}</td>
                            <td className="p-8 leading-relaxed text-text font-black">{row.f}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
             <div className="mt-12 text-center">
                <p className="text-xs font-bold text-text/40 tracking-widest uppercase italic">
                   "Philly sees 85 combined sewer overflows yearly during heavy rain."
                </p>
             </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US (CONVERSION) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                      Why Choose DrainCleaningNearMe in Philadelphia
                   </h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { t: "Same-Day Service", d: "No waiting; technicians dispatched fast.", icon: Clock },
                        { t: "Upfront Pricing", d: "Transparent quotes; $99–$410 standard.", icon: Search },
                        { t: "Experienced Techs", d: "Vetted on Philly's unique pipes.", icon: ShieldCheck },
                        { t: "Modern Equipment", d: "HD cameras & hydro jetters.", icon: Hammer },
                        { t: "24/7 Availability", icon: Zap, d: "Ready anytime unlike rivals." },
                        { t: "Guaranteed Results", icon: Star, d: "Satisfaction or we return free." }
                      ].map((f, i) => (
                         <div key={i} className="p-6 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all">
                            <f.icon size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-sm font-bold text-text mb-2 tracking-tight group-hover:text-primary transition-colors">{f.t}</h4>
                            <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase leading-relaxed">{f.d}</p>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="relative">
                   <div className="p-12 rounded-[3.5rem] bg-slate-900 border border-primary/20 text-white text-center shadow-2xl space-y-8">
                      <Star size={64} className="text-accent fill-accent mx-auto" />
                      <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">Vetted Philly experts with 5-star reviews</h3>
                      <p className="text-lg text-white/50 leading-relaxed font-medium">
                         Outperforming generic options through deep knowledge of South Philly and West Philadelphia density.
                      </p>
                      <a href={mainTelLink} className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 active:scale-95 transition-all">
                        (724) 750-6935
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. OUR STEP-BY-STEP PROCESS */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our Step-by-Step Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Efficiency builds confidence; here is how we work in Philadelphia.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { t: "Inspection", d: "Arrive, assess visible signs, deploy camera for hidden issues.", icon: Search },
                   { t: "Diagnosis", d: "Pinpoint cause: grease, hair, corrosion; using Philly knowledge.", icon: Activity },
                   { t: "Selection", d: "Customized snaking for minor, jetting for severe cases.", icon: Hammer },
                   { t: "Testing", d: "Run water to verify flow, check for backups.", icon: CheckCircle2 },
                   { t: "Tips", d: "Advise on grease traps and root barriers for row-homes.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-card">
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

        {/* 7. EMERGENCY & SERVICE AREAS (PHILLY FOCUS) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                      Emergency Drain Cleaning Philadelphia
                   </h2>
                   <p className="text-lg text-text/70 leading-relaxed font-medium">
                      When drains overflow at 2 AM at night from storm, sudden sewer backups, seconds count. Our 24/7 team responds within 60 minutes.
                   </p>
                   <div className="p-10 rounded-[2.5rem] bg-card border border-red-600/10 shadow-sm space-y-8 group hover:border-red-600/30 transition-all">
                      <p className="text-sm font-bold text-text/60 italic">Fast intervention prevents mold, structural damage in flood-vulnerable basements.</p>
                      <a href={mainTelLink} className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-red-600/5 rounded-2xl border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                         <div className="flex items-center gap-4">
                            <Zap size={32} className="text-red-600 group-hover:text-white" />
                            <div className="text-left">
                               <h4 className="font-bold text-lg leading-tight uppercase tracking-tight">Clogged main line?</h4>
                               <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Avoid $900+ repairs!</span>
                            </div>
                         </div>
                         <span className="text-xl font-bold tracking-tighter">(724) 750-6935</span>
                      </a>
                   </div>
                </div>
                <div className="space-y-12">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text text-center lg:text-left">
                     Service Areas Around Philadelphia
                   </h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {serviceAreas.map(a => (
                        <div key={a.name} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:-translate-y-1 transition-all">
                           <MapPin size={24} className="text-primary group-hover:scale-110 transition-transform" />
                           <h4 className="text-sm font-bold text-text tracking-tight leading-tight">{a.name}</h4>
                           <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase">{a.desc}</p>
                        </div>
                      ))}
                      <div className="p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col items-center justify-center text-center font-bold text-xs uppercase tracking-widest border border-border">
                         From Fishtown to Manayunk
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 8. PRICING TRANSPARENCY & FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                   Frequently Asked Questions
                 </h2>
                 <p className="text-lg text-text/70 font-medium italic">Honesty converts: Transparent pricing for Philly residents.</p>
              </div>
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in Philadelphia?", a: "Typically $99–$410 for basic Snaking; hydro jetting services average $388–$866. Sewer issues may reach $900." },
                  { q: "What causes recurring clogs in Philly rowhomes?", a: "Grease buildup in kitchen drains, hair/soap in bathrooms, and tree root intrusion in aging cast iron/clay sewer lines." },
                  { q: "Is hydro jetting safe for Philadelphia pipes?", a: "Yes, it's safe for most Philly pipes including cast iron. No chemicals, just high-pressure water-only." },
                  { q: "How fast can you respond for emergency drain cleaning?", a: "Response time averages 30-60 minutes across metro areas including South Philly and Center City." },
                  { q: "Do you offer emergency services Philadelphia PA?", a: "Yes, 24/7 emergency services for sewer backups, clogged drains, and hydro jetting anytime." },
                  { q: "What areas do you serve near Philadelphia?", a: "Northeast, South Philly, West Philly, Center City, plus Bucks, Montgomery, and Delaware counties." },
                  { q: "How to prevent slow drains in Philly rowhomes?", a: "Use drain screens, avoid grease, and schedule annual maintenance before winter freezes." }
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

        {/* 9. FINAL CTA (HIGH CONVERSION) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
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
                        Call Now for Same-Day Drain Cleaning in Philadelphia!
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto italic">
                         Emergency? Standing water rising? Licensed team guarantees fast relief; do not let clogs ruin your day.
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
                          Book Free Estimate Now!
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
