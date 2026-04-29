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
import { TrustBadge } from "@/components/ui/trust-badge";

const serviceAreas = [
  "Fort Worth", "Arlington", "Mansfield", "Burleson", 
  "North Richland Hills", "Sundance Square", "Stockyards", "Tanglewood", "TCU Area"
];

const mainTelLink = "tel:+17247506935";

export function FTWClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="FW"
                text="Licensed, Insured, 100% Satisfaction Guaranteed"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] font-black"
              >
                Professional Drain Cleaning & <span className="text-primary italic">Clog Removal</span> in Fort Worth
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                Is a clogged drain ruining your day in Fort Worth? Get same-day emergency drain cleaning services from DrainCleaningNearMe; your trusted local professionals for hydro jetting, sewer line cleaning and fast drain unclogging services.
              </motion.div>

              <div className="flex flex-col items-center gap-4 mb-12">
                <p className="text-text/60 font-bold uppercase tracking-widest text-sm">Do not let standing water or foul odors flood your home; we are available here 24/7.</p>
              </div>

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
                  Get Free Estimate
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 uppercase tracking-widest font-black"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> 100% Satisfaction</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Availability</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. COMMON DRAIN ISSUES */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                   Common Drain Issues in Fort Worth
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Fort Worth homes face frequent drain problems due to local factors like expansive clay soil, hard water and aging pipes. Cooking grease solidifies in kitchen drains, trapping food waste and causing backups, while tree roots invade older clay sewer lines, leading to major blockages.
                   </p>
                   <p>
                    Hard water in the DFW area, with up to 202 ppm minerals, builds scale inside pipes, narrowing flow over time. Combine this with the city's 800 miles of aging water pipes and clogs become inevitable without professional intervention.
                   </p>
                   <p>
                    At DrainCleaningNearMe, we tackle these Fort Worth-specific issues with expert drain cleaning services, preventing small clogs from turning into costly sewer line repairs.
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ShieldAlert size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Fort Worth Specific Problems</h3>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm">
                          <Activity size={20} className="text-primary" />
                          <span className="text-xs font-black uppercase tracking-widest text-text/70">Expansive Clay Soil Shift</span>
                       </div>
                       <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm">
                          <Droplets size={20} className="text-primary" />
                          <span className="text-xs font-black uppercase tracking-widest text-text/70">Hard Water Mineral Scale</span>
                       </div>
                       <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm">
                          <Trash2 size={20} className="text-primary" />
                          <span className="text-xs font-black uppercase tracking-widest text-text/70">800 Miles of Aging Pipes</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR DRAIN CLEANING SERVICES */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Our Drain Cleaning Services in Fort Worth
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    We provide comprehensive professional drain cleaning services; Fort Worth residents rely on, from residential kitchen unclogging to commercial sewer cleaning.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Emergency Drain Cleaning (24/7)", 
                    desc: "Facing a sewer backup at midnight? Our emergency drain cleaning Fort-Worth team arrives fast with 24/7 availability. We clear pipe blockages using advanced tools.", 
                    benefits: "Immediate response, no overtime fees, full cleanup included.",
                    link: "/emergency-drain-cleaning",
                    icon: Zap 
                  },
                  { 
                    title: "Kitchen Drain Cleaning", 
                    desc: "Grease clogs from cooking are the top cause of kitchen drain issues in Fort Worth homes. Our Fort Worth rooter services remove grease buildup safely.", 
                    benefits: "Faster draining, reduced foul odors, prevents future backups.",
                    link: "/kitchen-drain-cleaning",
                    icon: Utensils 
                  },
                  { 
                    title: "Bathroom Drain Unclogging", 
                    desc: "Hair, soap and mineral deposits from hard water cause slow bathroom drains. We use precise snaking and hydro jetting for thorough unclogging.", 
                    benefits: "Restores full drainage, eliminates gurgling sounds.",
                    link: "/bathroom-drain-cleaning",
                    icon: Bath 
                  },
                  { 
                    title: "Sewer Line Cleaning", 
                    desc: "Fort Worth's clay soil shifts underground pipes, allowing roots to intrude. We clear roots and debris from main lines.", 
                    benefits: "Prevents sewage backups, extends pipe life.",
                    link: "/sewer-line-cleaning",
                    icon: Droplets 
                  },
                  { 
                    title: "Hydro Jetting Services", 
                    desc: "High-pressure hydro jetting in Fort Worth blasts away grease, roots and scale without chemicals. Safe for all pipe types, including older cast iron.", 
                    benefits: "Deeper clean than snaking, longer-lasting results.",
                    link: "/hydro-jetting",
                    icon: Waves 
                  },
                  { 
                    title: "Drain Camera Inspection", 
                    desc: "Before cleaning, our drain camera inspection pinpoints issues like root intrusion or cracks. Essential for accurate sewer line inspection.", 
                    benefits: "Precise diagnosis, no guesswork, preventative care.",
                    link: "/drain-camera-inspection",
                    icon: Search 
                  }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col items-start text-left shadow-sm hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors uppercase font-black">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed mb-6 italic">{s.desc}</p>
                    <div className="bg-bg/50 p-4 rounded-xl border border-border w-full mb-6">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Key Benefits:</h4>
                      <p className="text-xs text-text/50 font-bold italic">{s.benefits}</p>
                    </div>
                    <a href={s.link} className="mt-auto text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                       View service page <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
             <div className="mt-12 p-8 rounded-[2rem] bg-card border border-border text-center">
                <h3 className="text-2xl font-bold text-text mb-4 uppercase font-black">Root Removal Services</h3>
                <p className="text-text/60 font-medium italic max-w-2xl mx-auto">Tree roots damage Fort Worth sewer lines due to clay soil expansion. We specialize in sewer line root removal using hydro jetting and cutting tools.</p>
             </div>
          </div>
        </section>

        {/* 4. SIGNS YOU NEED DRAIN CLEANING */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase font-black italic underline decoration-primary decoration-4 underline-offset-8">
                    Signs You Need Drain Cleaning
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Spot these early warnings to avoid emergencies; these signs demand prompt professional drain cleaning in Fort Worth to prevent overflows.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 font-black uppercase tracking-tight">
                 {[
                   { t: "Slow Draining", d: "Sinks or tubs from grease or hair buildup.", icon: Clock },
                   { t: "Gurgling Sounds", d: "Air pockets signaling blockages.", icon: Activity },
                   { t: "Foul Odors", d: "Trapped organic matter in pipes.", icon: Droplets },
                   { t: "Frequent Clogs", d: "Requiring repeated plunging.", icon: ShieldAlert },
                   { t: "Water Backup", d: "Multiple fixtures signaling main sewer issues.", icon: Trash2 }
                 ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm text-center">
                       <div className="w-14 h-14 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner mx-auto">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-sm font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-[10px] text-text/40 font-bold tracking-widest leading-relaxed italic">{item.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. WHY DRAIN PROBLEMS ARE COMMON */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                   <div className="p-12 rounded-[3.5rem] bg-slate-900 border border-primary/20 text-white shadow-2xl space-y-8">
                      <ShieldAlert size={48} className="text-primary" />
                      <h3 className="text-3xl font-bold text-white tracking-tight uppercase font-black">Trinity River Basin Challenges</h3>
                      <p className="text-lg text-white/50 leading-relaxed font-medium italic">
                         Fort Worth's expansive clay soil causes pipe misalignment and cracks, inviting tree roots; especially from oaks and pecans near the Trinity River. Older homes often have cast iron or clay pipes that fail under soil pressure, while hard water (11.8 gpg average) deposits minerals narrowing pipes.
                      </p>
                   </div>
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                      Why Drain Problems Are Common in Fort Worth
                   </h2>
                   <p className="text-lg text-text/70 leading-relaxed font-medium italic">
                      Grease from local cooking habits and aging infrastructure spike clogs, with service calls rising recently.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                        <h4 className="text-primary font-black uppercase text-2xl mb-1">11.8</h4>
                        <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest">Average GPG Hardness</p>
                      </div>
                      <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                        <h4 className="text-primary font-black uppercase text-2xl mb-1">800</h4>
                        <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest">Miles of Aging Pipes</p>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </section>

        {/* 6. OUR PROCESS */}
        <section className="py-24 bg-card border-y border-border text-center">
           <div className="container">
              <div className="mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black italic">
                    Our Process for Reliable Results
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">We follow a proven 5-step process for every drain cleaning job to build trust with transparent, efficient service.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8 uppercase italic font-black">
                 {[
                   { t: "Camera Inspection", d: "Diagnose exact location and cause of blockage.", icon: Search },
                   { t: "Problem ID", d: "Assess roots, grease or scale issues.", icon: Activity },
                   { t: "Professional Clean", d: "Hydro jetting or snaking customized.", icon: Waves },
                   { t: "Testing & QC", d: "Run hot water to verify full flow.", icon: CheckCircle2 },
                   { t: "Prevention Tips", d: "Share FTW-specific advice (grease traps).", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-card font-black italic">
                            {i+1}
                         </div>
                         <s.icon size={24} />
                      </div>
                      <h4 className="text-[10px] font-black text-text tracking-widest group-hover:text-primary transition-colors">{s.t}</h4>
                      <p className="text-[9px] text-text/40 font-bold leading-relaxed">{s.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black">
               Why Choose DrainCleaningNearMe
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { t: "Licensed & Insured Technicians", d: "Fully certified for Fort Worth plumbing services in Texas.", icon: ShieldCheck },
                  { t: "Same-Day & 24/7 Services", d: "Fast response, no extra fees for emergencies.", icon: Clock },
                  { t: "Advanced Equipment", d: "Hydro jetting and Video cameras for precise work.", icon: Search },
                  { t: "Upfront Pricing", d: "No surprises; average $100-275 per drain cleaning.", icon: Trash2 },
                  { t: "Local Fort Worth Expertise", d: "We know clay soil and hard water challenges.", icon: MapPin },
                  { t: "Satisfaction Guarantee", d: "Free re-service if issues return within 7 days.", icon: CheckCircle2 }
                ].map((f, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                     <div className="w-14 h-14 rounded-2xl bg-bg text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                        <f.icon size={28} />
                     </div>
                     <h4 className="text-lg font-black uppercase tracking-tight text-text">{f.t}</h4>
                     <p className="text-sm text-text/50 font-bold italic">{f.d}</p>
                  </div>
                ))}
             </div>
             <div className="mt-16">
               <p className="text-text/40 font-bold uppercase tracking-widest text-xs italic">Visit DrainCleaningNearMe.us for more on our reliable plumbing & drain cleaning plumber of Fort Worth.</p>
             </div>
          </div>
        </section>

        {/* 8. PREVENTATIVE MAINTENANCE TIPS */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                Preventative Maintenance Tips
              </h2>
              <p className="text-lg text-text/70 font-medium italic">Protect your drains with these actionable tips; regular care saves money on emergency plumber service calls in Fort Worth.</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Avoid pouring grease down the drains; let it solidify and trash it.",
                   "Install drain strainers to catch hair and food.",
                   "Schedule annual inspections for early root intrusion detection.",
                   "Skip chemical cleaners; they corrode pipes over time.",
                   "Run hot water weekly to flush minor buildup."
                 ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                       <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Plus size={16} className="text-primary group-hover:text-white" />
                       </div>
                       <span className="text-sm font-black text-text tracking-tight leading-relaxed italic">{tip}</span>
                    </div>
                 ))}
              </div>
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white">
                 <p className="text-xl font-black italic uppercase tracking-tight">"Do not wait until a small clog becomes a costly repair."</p>
              </div>
           </div>
        </section>

        {/* 9. SERVICE AREAS */}
        <section className="py-24 bg-bg border-b border-border text-center">
          <div className="container">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase font-black">
               Fort Worth Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">We cover Fort Worth and nearby DFW spots for residential & commercial drain services.</p>
             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/20 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    {n}
                 </div>
               ))}
             </div>
             <p className="mt-12 text-sm font-black text-primary uppercase tracking-tighter italic">Fast drain unclogging near me, wherever you are.</p>
          </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black uppercase italic">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: "How much does drain cleaning cost in Fort Worth?", a: "Average cost is $100-275 for one drain cleaning, $175-600 for main drain cleaning, plus $50 service fee. Varies by clog severity and location." },
                  { q: "How long does drain cleaning take?", a: "Most jobs finish in 1-2 hours; hydro jetting may take longer for severe blockages." },
                  { q: "Is hydro jetting safe for pipes?", a: "Yes, safe for PVC pipes, cast iron and older pipes when done by professionals." },
                  { q: "What causes recurring clogs?", a: "Roots, grease, hard water scale and pipe shifts in clay soil." },
                  { q: "Do you offer emergency services?", a: "Yes, 24/7 emergency drain cleaning services in Fort Worth with quick dispatch." },
                  { q: "How can I prevent sewer backups?", a: "Use strainers, avoid grease, schedule drain inspections." },
                  { q: "What is the difference between snaking and hydro jetting?", a: "Snaking breaks clogs; hydro jetting cleans pipe walls thoroughly." }
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

        {/* 11. FINAL CTA */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                 Call Now for Fast Relief
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase">
                 Tired of slow drains and backups? DrainCleaningNearMe delivers affordable drain cleaning services in Fort Worth, resident trusts; same-day hydro jetting, rooter services and more.
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
                    Free On-Site Estimate
                 </a>
              </div>
              <div className="space-y-4">
                <p className="text-lg font-black text-primary uppercase italic animate-pulse">Limited same-day slots available; act fast to avoid flooding!</p>
                <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                   Your Fort Worth drain cleaning experts are ready 24/7
                </p>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
