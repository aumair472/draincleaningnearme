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
  "Sunset District", "Richmond District", "Mission District", 
  "Pacific Heights", "SOMA", "North Beach", "The Marina"
];

const mainTelLink = "tel:+17247506935";

export function SFClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (SAN FRANCISCO LOCAL) */}
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">SF</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60 font-black">
                   Licensed and Insured San Francisco Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] font-black"
              >
                Professional Drain Cleaning & <span className="text-primary italic">Rooter Services</span> in San Francisco
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                Tired of slow drains or sewer backups in the City? We specialize in San Francisco's historic plumbing challenges, from aging clay pipes to seismic pipe stress.
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
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 uppercase tracking-widest font-black"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> 24/7 Availability</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> Fast Response</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> SF Local Solutions</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL PLUMBING CONTEXT (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                   San Francisco's Historic Infrastructure
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    San Francisco's high-density neighborhoods; from the Sunset to Richmond; rely on a complex network of aging clay and cast iron pipes. Seismic activity and soil shifting place unique stress on these systems, often leading to offsets, cracks and severe blockages.
                   </p>
                   <p>
                    Our expert team understands the City's specific challenges, including fog-related moisture acceleration of pipe corrosion and the intense grease traps required for our world-class restaurants in SOMA and the Mission.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {[
                     { t: "Aging Clay Pipes", d: "Historic districts prone to offsets and collapse.", icon: Activity },
                     { t: "Seismic Pipe Stress", d: "Soil shifts cause joints to crack and leak.", icon: Droplets },
                     { t: "High-Density FOG", d: "Fats, oils and grease in multi-unit buildings.", icon: Utensils },
                     { t: "Fog Moisture", d: "Accelerated external corrosion on older mains.", icon: ThermometerSun }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm">
                         <item.icon className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                         <div>
                            <h4 className="text-xs font-black text-text uppercase tracking-widest">{item.t}</h4>
                            <p className="text-[10px] text-text/40 font-bold leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Activity size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Seismic Restoration pros</h3>
                    <p className="text-sm text-text/50 font-bold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Specializing in Sunset and Richmond District infrastructure.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-black text-primary uppercase tracking-widest bg-primary/5 px-6 py-3 rounded-full border border-primary/20 shadow-inner">
                          Hydro Jetting: Tech-Hub Standard
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Our San Francisco Drain Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Comprehensive rooter and cleaning solutions for the modern City.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Unclogging", desc: "Fast removal of hair, soap scum and grease in compact SF apartments.", icon: Bath },
                  { title: "Hydro Jetting Services", desc: "Low-impact, high-pressure 4,000 PSI cleaning for Silicon Valley-grade results.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Restoring capacity to main lines affected by roots and seismic misalignment.", icon: Droplets },
                  { title: "Commercial Drain Care", desc: "Grease trap and main line maintenance for SOMA and Mission restaurants.", icon: Building2 },
                  { title: "HD Camera Inspection", desc: "Diagnose seismic pipe shifts and aging collapses without tearing up floors.", icon: Search },
                  { title: "24/7 Emergency Response", desc: "Rapid dispatch for sudden overflows and severe City line backups.", icon: Zap }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors uppercase font-black">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow italic">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                       Learn more <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. COMMON PROBLEMS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase font-black italic underline decoration-primary decoration-4 underline-offset-8">
                    Common SF Drain Problems
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Density and age create a perfect storm for plumbing failures.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-black uppercase tracking-tight">
                 {[
                   { t: "Seismic Cracks", d: "Joint leaks caused by frequent earth shifts.", icon: Activity },
                   { t: "Slow Multi-Unit Drains", d: "Shared line grease clogs in SOMA buildings.", icon: Utensils },
                   { t: "Fog-Induced Rust", d: "External corrosion on historic iron pipes.", icon: Droplets },
                   { t: "Foul Sewage Odors", d: "Organic waste decay in slow-moving City mains.", icon: Activity }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm text-center">
                       <div className="w-14 h-14 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner mx-auto">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-[10px] text-text/40 font-bold tracking-widest leading-relaxed italic">{item.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. OUR STEP-BY-STEP PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-bg border-y border-border">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black uppercase italic">
                    The SF Restoration Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">High-tech diagnostics meeting old-world reliability.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8 uppercase italic font-black">
                 {[
                   { t: "Assessment", d: "Identify the pipe material and age.", icon: Search },
                   { t: "Camera Diagnosis", d: "Check for seismic shifts and roots.", icon: Activity },
                   { t: "Targeted Cleaning", d: "Snaking or hydro jetting execution.", icon: Waves },
                   { t: "Testing", d: "Confirm flow across share lines.", icon: CheckCircle2 },
                   { t: "Reporting", d: "Documented proof for insurers/landlords.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-bg font-black italic">
                            {i+1}
                         </div>
                         <s.icon size={24} />
                      </div>
                      <h4 className="text-[10px] font-black text-text tracking-widest group-hover:text-primary transition-colors">{s.t}</h4>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHY CHOOSE US (TRUST DRIVER) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black">
               Why Choose DrainCleaningNearMe
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { t: "Licensed & Insured", icon: ShieldCheck, d: "Fully compliant for Bay Area standards." },
                  { t: "Same-Day Response", icon: Clock, d: "Rapid dispatch across all SF hills." },
                  { t: "HD Camera Included", icon: Search, d: "Diagnose before we dig or jet." },
                  { t: "City Specialists", icon: MapPin, d: "Experts in historic SF infrastructure." }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     {f.t}
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border text-center">
          <div className="max-w-7xl mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase font-black">
               Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic italic">From the Sunset to SOMA, we cover the whole City.</p>
             <div className="grid grid-cols-2 lg:grid-cols-7 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/20 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    {n}
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black uppercase italic underline decoration-primary decoration-4 underline-offset-8 text-sm">
                San Francisco Drain FAQs
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: "How much does drain cleaning cost in San Francisco?", a: "Residential rates start at $99-$299; seismic camera inspections and hydro-jetting vary based on pipe age and material." },
                  { q: "How often should I clean my drains in an older SF home?", a: "Every 12-18 months to prevent historic clay tiles from collapsing due to stress and root intrusion." },
                  { q: "Is hydro jetting safe for cast iron pipes?", a: "Yes, but we always perform an HD camera inspection first to check for internal rust and scale levels." },
                  { q: "Do you offer emergency services in the Sunset District?", a: "24/7 emergency response available across all SF districts, including the Sunset and Richmond." },
                  { q: "Why are my drains slow after every seismic tremor?", a: "Minor shifts can cause pipe offsets or cracks. We recommend a camera inspection after any noticeable activity." },
                  { q: "Can multi-unit buildings be jetted simultaneously?", a: "Yes, we specialize in shared-line restoration for SOMA and Mission residential complexes." }
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
                      <div className="px-8 pb-8 text-sm text-text/40 font-bold uppercase tracking-widest leading-relaxed border-t border-border pt-6 mx-8 italic">
                         {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 9. FINAL CTA / URGENCY (SAN FRANCISCO) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="max-w-5xl mx-auto px-4 text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Stop SF Drain Backups Now!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic italic font-black uppercase underline decoration-primary decoration-4">
                 Licensed Bay Area Professionals Ready 24/7. Same-Day Relief.
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
                    href={mainTelLink}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-2xl hover:border-primary transition-all active:scale-95 tracking-tight font-black"
                 >
                    Book Now
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Authorized San Francisco Sewer Experts &middot; Licensed, Insured, Guaranteed.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
