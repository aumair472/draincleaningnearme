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
  "Indianapolis", "Arlington", "Mansfield", "Burleson", 
  "North Richland Hills", "Carmel", "Fishers", "Zionsville", "Greenwood"
];

const mainTelLink = "tel:+17247506935";

export function IndyClient() {
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
                badgeText="INDY"
                text="Licensed, Insured, Local Experts - Free Estimates!"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] font-black"
              >
                Fast, Reliable Drain Cleaning in <span className="text-primary italic">Indianapolis</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                Clogged drains disrupt daily life in Indianapolis homes and businesses, leading to standing water, foul odors and potential property damage. DrainCleaningNearMe delivers fast, reliable drain cleaning services using advanced techniques like hydro jetting and rooter services.
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
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> 5,000+ Clogs Cleared</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Availability</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY INDIANAPOLIS NEEDS EXPERTS */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                   Why Indianapolis Needs Expert Drain Cleaning
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Indianapolis's older homes and aging sewer infrastructure make drain issues common, with tree root intrusion and grease buildup affecting thousands of cases yearly. Ignoring slow drains or backups risks costly sewer line repairs, especially during Indiana's freeze-thaw cycles that crack pipes.
                   </p>
                   <p>
                    As your local drain cleaning experts, DrainCleaningNearMe serves all of Indianapolis, IN, with same-day response times and transparent pricing. We have helped over 5,000 Hoosier properties stay clog-free, focusing on residential and commercial drain cleaning Indianapolis demands.
                   </p>
                </div>
                <a
                  href={mainTelLink}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors"
                >
                  Ready to unclog your drains? Get a Free Quote Today
                </a>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ShieldAlert size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Hoosier Pipe Protection</h3>
                    <p className="text-sm text-text/50 font-bold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Preventing freeze-thaw damage and root intrusion across Marion County.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR COMPREHENSIVE SERVICES */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Our Comprehensive Drain Cleaning Services in Indianapolis
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    DrainCleaningNearMe offers specialized drain cleaning services in Indianapolis customized to your needs.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Residential Drain Cleaning", 
                    desc: "Homeowners in Indianapolis face frequent clogged drains from hair, soap and food debris. We handle kitchen sinks, bathroom drains and laundry lines efficiently.", 
                    outcomes: "Kitchen sink grease removal, bathroom hair clearing fast.",
                    link: "/residential-drain-cleaning",
                    icon: Building2 
                  },
                  { 
                    title: "Commercial Drain Cleaning", 
                    desc: "Businesses cannot afford downtime. Our commercial drain cleaning services use heavy-duty equipment for restaurants, offices and retail spaces.", 
                    outcomes: "High-volume grease trap cleaning, floor & storm drain services.",
                    link: "/commercial-drain-cleaning",
                    icon: Utensils 
                  },
                  { 
                    title: "Emergency Drain Cleaning (24/7)", 
                    desc: "Sewer backups do not wait. Our emergency drain services in Indianapolis responds in under 60 minutes, whether it is day or night.", 
                    outcomes: "24/7 plumber services for standing water or foul odors.",
                    link: "/emergency-drain-cleaning",
                    icon: Zap 
                  },
                  { 
                    title: "Sewer Line Cleaning", 
                    desc: "Aging pipes in Indianapolis neighborhoods lead to root intrusion. We provide thorough sewer cleaning service, including camera inspections.", 
                    outcomes: "Sewer line root removal, pipe blockage removal for main lines.",
                    link: "/sewer-line-cleaning",
                    icon: Droplets 
                  },
                  { 
                    title: "Hydro Jetting Services", 
                    desc: "Hydro jetting blasts away roots, scale and debris at 4,000 PSI pressurized water, which is safer and more effective than snaking.", 
                    outcomes: "Ideal for Indianapolis sewer hydro jetting service. Restores pipes without damage.",
                    link: "/hydro-jetting",
                    icon: Waves 
                  },
                  { 
                    title: "Rooter Services & Snaking", 
                    desc: "Our rooter services use powered snakes for quick unclogging, perfect for initial pipe cleaning service and affordable drain services.", 
                    outcomes: "Affordable ($100–$275), fast root intrusion removal.",
                    link: "/drain-camera-inspection",
                    icon: Hammer 
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
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Outcomes:</h4>
                      <p className="text-xs text-text/50 font-bold italic">{s.outcomes}</p>
                    </div>
                    <a href={s.link} className="mt-auto text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                       View service page <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
             <div className="mt-12 text-center">
                <p className="text-primary font-black uppercase italic animate-pulse">Do not wait: Call (724) 750-6935 for immediate help!</p>
             </div>
          </div>
        </section>

        {/* 4. COMMON DRAIN PROBLEMS IN INDY */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase font-black italic underline decoration-primary decoration-4 underline-offset-8">
                    Common Drain Problems in Indianapolis
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Indianapolis's clay soils, mature trees and heavy rains exacerbate drain issues. Here is what locals face most.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-black uppercase tracking-tight">
                 {[
                   { t: "Slow Drains", d: "Gradual buildup causing overflows. Tip: Use hot water + vinegar weekly.", icon: Clock },
                   { t: "Foul Odors", d: "Sewer gases escaping from dry traps. Common in humid Indy summers.", icon: Activity },
                   { t: "Sewer Backups", d: "Tree roots invade 20–30 feet via pipe cracks, worsened by freeze-thaw.", icon: Droplets },
                   { t: "Gurgling Sounds", d: "Air pressure issues signaling deeper pipe blockages.", icon: ShieldAlert }
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
              <div className="mt-16 p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 bg-primary/20 p-4 rounded-full">
                  <Star size={48} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase mb-2">Real Scenario: Carmel, IN</h4>
                  <p className="text-white/60 italic">A Carmel homeowner ignored gurgling toilets; roots caused a $5,000 backup. Early camera inspection prevents this. Data Insight: 58% of calls are residential, driven by aging systems.</p>
                </div>
              </div>
           </div>
        </section>

        {/* 5. OUR PROVEN PROCESS */}
        <section className="py-24 bg-bg border-y border-border text-center">
           <div className="container">
              <div className="mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black italic">
                    Our Proven 5-Step Drain Cleaning Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">We ensure complete cleaning and lasting results with this expert process, reducing recurrence by 80%.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8 uppercase italic font-black">
                 {[
                   { t: "Video Inspection", d: "Diagnose with sewer line inspection tools; no guesswork.", icon: Search },
                   { t: "Problem ID", d: "Pinpoint issue whether clogs, roots or corrosion.", icon: Activity },
                   { t: "Method Selection", d: "Snaking, hydro jetting or rooter based on severity.", icon: Waves },
                   { t: "Blockage Removal", d: "Clear 100% blockage removal with advanced tools.", icon: CheckCircle2 },
                   { t: "Prevention Tips", d: "Enzyme treatments and quarterly drain checks.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
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

        {/* 6. WHY CHOOSE US */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black">
               Why Choose DrainCleaningNearMe in Indianapolis
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { t: "Fast Response", d: "Under 1 hour for small clogs, 2-3 hours for emergencies.", icon: Clock },
                  { t: "Advanced Equipment", d: "Hydro jetting, Video camera inspection; not just snakes.", icon: Search },
                  { t: "Transparent Pricing", d: "No surprises; always upfront quotes provided.", icon: Trash2 },
                  { t: "Licensed & Insured", d: "Fully compliant in Indiana state with expert plumbers.", icon: ShieldCheck },
                  { t: "100% Satisfaction", d: "Trusted by 5,000+ satisfied Indianapolis customers.", icon: Star }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     {f.t}
                     <p className="text-[8px] text-text/30 mt-2 lowercase">{f.d}</p>
                  </div>
                ))}
             </div>
             <p className="mt-12 text-sm text-text/60 italic max-w-3xl mx-auto font-medium">Unlike national chains, we are Indy-focused, understanding seasonal issues like post-rain storm drain cleaning issues in Indianapolis.</p>
          </div>
        </section>

        {/* 7. REALISTIC PRICING */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text text-center mb-16 uppercase font-black">
                Realistic Pricing for Indianapolis
              </h2>
              <div className="overflow-x-auto">
                 <table className="w-full border-collapse bg-card border border-border rounded-3xl overflow-hidden">
                    <thead>
                       <tr className="bg-slate-900 text-white font-black uppercase text-xs tracking-widest">
                          <th className="p-6 text-left">Service Type</th>
                          <th className="p-6 text-left">Average Cost Range</th>
                          <th className="p-6 text-left">Factors Affecting Price</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm font-bold text-text/70 italic">
                       <tr className="border-b border-border">
                          <td className="p-6">Basic Clog (Sink/Toilet)</td>
                          <td className="p-6">$100–$275</td>
                          <td className="p-6">Accessibility, time of day</td>
                       </tr>
                       <tr className="border-b border-border">
                          <td className="p-6">Main Line Cleaning</td>
                          <td className="p-6">$175–$600</td>
                          <td className="p-6">Multiple drains, depth</td>
                       </tr>
                       <tr className="border-b border-border">
                          <td className="p-6">Hydro Jetting</td>
                          <td className="p-6">$300–$800</td>
                          <td className="p-6">Severity, pipe size</td>
                       </tr>
                       <tr className="border-b border-border">
                          <td className="p-6">Sewer Line Repair</td>
                          <td className="p-6">$50–$64 per ft</td>
                          <td className="p-6">Roots, collapse</td>
                       </tr>
                       <tr>
                          <td className="p-6">Emergency Surcharge</td>
                          <td className="p-6">+20–50%</td>
                          <td className="p-6">After-hours service</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <p className="mt-8 text-center text-sm font-bold text-primary uppercase italic">Tip: Preventive cleaning saves 50% vs. emergencies. Free estimates available!</p>
           </div>
        </section>

        {/* 8. SIGNS YOU NEED PROFESSIONAL HELP */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                Signs You Need Professional Drain Cleaning
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Slow draining in multiple fixtures.",
                   "Standing water in sinks or tubs.",
                   "Foul odors from drains or yard.",
                   "Gurgling toilets during showers.",
                   "Sewage backup in lowest drains.",
                   "Frequent minor clogs (recurring issue).",
                   "Lush grass over sewer lines (root intrusion sign)."
                 ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                       <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Plus size={16} className="text-primary group-hover:text-white" />
                       </div>
                       <span className="text-sm font-black text-text tracking-tight leading-relaxed italic">{tip}</span>
                    </div>
                 ))}
              </div>
              <div className="p-8 rounded-[2.5rem] bg-red-600/10 border border-red-600/20">
                 <p className="text-lg font-black italic uppercase tracking-tight text-red-600">Urgency: Unaddressed backups can cause $1,000+ water damage in hours.</p>
                 <a href={mainTelLink} className="mt-4 inline-block px-8 py-4 bg-red-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors">Spot these? Book Same-Day Service</a>
              </div>
           </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black uppercase italic">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: "How Much Does Drain Cleaning Cost in Indianapolis?", a: "Typically $100–$800, averaging $190-$275 for basics. Depends on clog type, severity and method used." },
                  { q: "How Fast Can DrainCleaningNearMe Respond in Indianapolis?", a: "Under 60 minutes for emergencies, same-day for most of the cases. 24/7 availability." },
                  { q: "Is Hydro Jetting Safe for Indianapolis Pipes?", a: "Yes, non-abrasive high-pressure water cleans without damage. Safer than chemicals." },
                  { q: "Do You Offer “Same-Day Drain Unclogging Near Me”?", a: "Absolutely, reliable for unclogging blocked drains in Indianapolis requests." },
                  { q: "What Causes Recurring Clogs in Indy Homes?", a: "Grease, roots, hair; worsened by aging pipes and weather. We inspect to prevent clogging." },
                  { q: "Can You Handle Commercial Sewer Cleaning in Indianapolis?", a: "Yes, specialized for high-volume needs like grease traps." },
                  { q: "Do You Provide Sewer Line Repair in Indianapolis?", a: "Yes, including root removal and Video camera inspections." }
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
                 Secure Your Drains Today
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase">
                 Do not let clogged drains flood your Indianapolis day. As the go-to for drain cleaning services in Indianapolis, DrainCleaningNearMe guarantees fast, affordable relief.
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
                <p className="text-lg font-black text-primary uppercase italic">Licensed technicians arrive equipped, quote upfront and leave your pipes pristine.</p>
                <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                   Join thousands of satisfied Indy customers; act now before small clogs become big problems!
                </p>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
