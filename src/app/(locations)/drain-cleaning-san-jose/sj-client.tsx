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
  "Willow Glen", "Rose Garden", "Almaden Valley", "Evergreen", 
  "Berryessa", "Silver Creek", "Downtown San Jose"
];

const mainTelLink = "tel:+17247506935";

export function SJClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (SAN JOSE LOCAL) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="SJ"
                text="Licensed and Insured Silicon Valley Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] font-black"
              >
                Professional Drain Cleaning Services in <span className="text-primary italic">San Jose</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Clogged drains causing slow drains, foul odors or backups in your San Jose home? We provide rooter and hydro jetting services residents trust for 24/7 reliability.
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
                  Call now for 24/7 service
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
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 uppercase tracking-widest"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> 24/7 Availability</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> San Jose Expertise</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY SAN JOSE NEEDS EXPERTS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border font-black tracking-tight">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase italic">
                   Why San Jose Homes Need Expert Drain Cleaning
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Silicon Valley's high population density and aging infrastructure create unique plumbing challenges. In older neighborhoods like Willow Glen and the Rose Garden, clay and cast iron pipes are prone to corrosion, cracks and collapse over time.
                   </p>
                   <p>
                    Hard water mineral scale and aggressive tree roots seeking moisture; especially in areas like Almaden Valley; often lead to recurring clogs and costly sewer line repairs if not professionally maintained.
                   </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Activity size={60} /></div>
                   <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase">Silicon Valley Standards</h3>
                   <p className="text-sm text-text/50 font-bold leading-relaxed italic">
                      "We use state-of-the-art diagnostic tools to pinpoint issues in the Santa Clara Valley's complex underground systems, ensuring long-lasting flow for tech hubs and homes alike."
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Building2 size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Aging infrastructure Experts</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Specializing in Willow Glen and Rose Garden aging clay pipe systems.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                          Hydro Jetting: Tech-Grade Cleaning
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <div className="mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black uppercase">
                  Our Drain Cleaning Services in San Jose
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic italic">
                    Comprehensive solutions using 4,000 PSI hydro jetting and HD camera diagnostics.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Unclogging", desc: "Fast removal of hair, soap scum and grease in Silicon Valley homes.", icon: Bath },
                  { title: "Hydro Jetting San Jose", desc: "Technically advanced cleaning using 4,000 PSI water blasts to clear mineral scale and roots.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Deep cleaning to prevent backups from tree root intrusion or aging pipe cracks.", icon: Droplets },
                  { title: "Sewer Repair San Jose", desc: "Trenchless options to fix broken clay pipes without digging your yard in Willow Glen.", icon: Building2 },
                  { title: "HD Camera Inspection", desc: "Visualize and pinpoint blockages in Evergreen and Almaden Valley pipes precisely.", icon: Search },
                  { title: "Emergency Drain Service", desc: "24/7 service arriving in under 60 minutes for sudden sewer overflows.", icon: Zap }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
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
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase font-black uppercase">
                    Common Drain Problems in San Jose & Santa Clara
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic italic">
                    Silicon Valley's environment and infrastructure create recurring drain challenges.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center uppercase tracking-tight font-black">
                 {[
                   { t: "Slow Draining Sinks", d: "Mineral scale and hair buildup slow flow in Almaden Valley master suites.", icon: Activity },
                   { t: "Foul Drain Odors", d: "Signs of decaying food or sewer line cracks in Downtown older homes.", icon: Utensils },
                   { t: "Sewer Backups", d: "Clay pipe joint intrusion from mature valley trees causing water to backup.", icon: Droplets },
                   { t: "Recurring Clogs", d: "Grease solidification needing professional hydro-jetting to remove completely.", icon: Clock },
                   { t: "Gurgling Sounds", d: "Air trapped by partial blockages in aging cast iron pipes.", icon: Waves }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm">
                       <div className="w-14 h-14 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner mx-auto">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-xs text-text/40 font-bold uppercase tracking-widest leading-relaxed italic">{item.d}</p>
                    </div>
                 ))}
                 <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-border flex flex-col justify-center items-center text-center space-y-4 text-white uppercase italic">
                    <ShieldAlert size={48} className="text-primary animate-bounce shadow-primary/20" />
                    <h3 className="text-xl font-bold tracking-tight">Willow Glen Warning</h3>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                       Aging clay pipes in historic districts are susceptible to $3k+ root damage if neglected.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. SIGNS YOU NEED SERVICE (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border text-center">
           <div className="container-narrow space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                Signs You Need Professional Help
              </h2>
              <p className="text-lg text-text/70 font-medium italic italic">Watch for these 4 red flags to avoid expensive emergency repairs:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Slow draining water in tubs or sinks",
                   "Recurring clogs despite snaking/plunging",
                   "Multiple fixtures backing up simultaneously",
                   "Foul odors and gurgling in pipes"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/20 transition-all font-bold text-text tracking-tight uppercase leading-tight text-sm font-black">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       {sign}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. OUR STEP-BY-STEP PROCESS */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container text-center">
              <div className="mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black uppercase">
                    Our Step-by-Step Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic italic">Professionalism, transparency and Silicon Valley efficiency.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { t: "Inspection", d: "HD Camera scope to visualize the blockage cause.", icon: Search },
                   { t: "Diagnosis", d: "Pinpoint roots, mineral scale or cracked clay pipe.", icon: Activity },
                   { t: "Cleaning", d: "Safe, chemical-free hydro jetting or snaking.", icon: Waves },
                   { t: "Final testing", d: "Confirmed flow tests and no-leak verification.", icon: CheckCircle2 },
                   { t: "Prevention", d: "Guidance on drain maintenance and water softeners.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group italic font-black uppercase">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-card">
                            {i+1}
                         </div>
                         <s.icon size={24} />
                      </div>
                      <h4 className="text-[10px] font-bold text-text tracking-widest group-hover:text-primary transition-colors">{s.t}</h4>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. WHY CHOOSE US (TRUST DRIVER) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black uppercase">
               Why Choose DrainCleaningNearMe
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { t: "Licensed & Insured", icon: ShieldCheck },
                  { t: "24/7 Availability", icon: Zap },
                  { t: "Upfront SJ Pricing", icon: Search },
                  { t: "4,000 PSI Jetting", icon: Waves },
                  { t: "HD Camera Scopes", icon: Search },
                  { t: "7-Day Guarantee", icon: Star }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/20 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     {f.t}
                  </div>
                ))}
             </div>
             <p className="mt-12 text-sm text-text/40 font-bold uppercase tracking-widest italic italic">Serving 5-star quality from Berryessa to Silver Creek.</p>
          </div>
        </section>

        {/* 8. COMMERCIAL SERVICES (TECH HUB SEO) */}
        <section className="py-24 bg-card border-b border-border text-center">
           <div className="container-narrow space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                Commercial Drain Services for Tech Hubs
              </h2>
              <p className="text-lg text-text/70 font-medium italic italic max-w-2xl mx-auto">
                 We keep Silicon Valley moving. Professional grease trap cleaning and industrial-grade unclogging for office campuses and restaurants.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                 {[
                   { t: "Grease Trap Cleaning", d: "Compliance-based maintenance for eateries.", icon: Utensils },
                   { t: "Office Campus Support", d: "High-volume plumbing for tech facilities.", icon: Building2 },
                   { t: "Industrial Hydro Jetting", d: "Heavy-duty fixes for large-scale lines.", icon: Waves }
                 ].map((c, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-bg border border-border shadow-sm flex flex-col items-center gap-6 italic group">
                       <div className="w-14 h-14 rounded-2xl bg-card border border-border text-primary flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
                          <c.icon size={28} />
                       </div>
                       <h4 className="text-xl font-bold text-text uppercase tracking-tight">{c.t}</h4>
                       <p className="text-xs text-text/40 font-bold uppercase tracking-widest leading-relaxed">{c.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border text-center">
          <div className="container">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase font-black uppercase">
               Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic italic">Across Santa Clara valley with 60-minute dispatch.</p>
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

        {/* 10. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: "How much does drain cleaning cost in San Jose?", a: "Residential drains average $99-$299; sewer main hydro-jetting averages $300-$550. Fast, free estimates available." },
                  { q: "What is hydro jetting?", a: "A tech-grade cleaning method using 4,000 PSI water to blast roots and mineral build-up without chemicals. Superior for older Willow Glen pipes." },
                  { q: "Are chemicals safe for San Jose drains?", a: "No, they corrode older clay and cast iron pipes common in our city districs. Opt for professional snaking or jetting." },
                  { q: "Do you offer emergency rooter service in San Jose?", a: "Yes, 24/7 service with arrival times under 60 minutes for most zip codes." },
                  { q: "Can you remove tree roots from sewer lines permanently?", a: "Yes, via hydro jetting or trenchless pipe lining to seal joints and prevent regrowth. Essential in Almaden Valley." },
                  { q: "What is the best way to unclog a drain in San Jose?", a: "Professional hydro jetting; it's safest for older infrastructure and removes 100% of debris." }
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

        {/* 11. FINAL CTA / URGENCY (SAN JOSE) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Do not let clogged drains disrupt your tech life!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic italic font-black uppercase underline decoration-primary decoration-4">
                 Licensed San Jose professionals ready 24/7. Same-day service.
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
                 Local San Jose Drain Experts &middot; Licensed, Insured, Guaranteed.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
