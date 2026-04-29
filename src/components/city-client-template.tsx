"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, ShieldAlert,
  Plus, Minus, Zap, Bath, Hammer
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TrustBadge } from "@/components/ui/trust-badge";

interface CityClientTemplateProps {
  cityName: string;
  h1: string;
  description: string;
}

const defaultSuburbs = [
  "Downtown", "Residential Areas", "Commercial Districts", "Suburban Neighborhoods"
];

const mainTelLink = "tel:+17247506935";

export function CityClientTemplate({ cityName, h1, description }: CityClientTemplateProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText={cityName.substring(0, 2)}
                text={`Licensed and Insured ${cityName} Plumbers`}
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                {h1}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                {description}
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
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Rated 4.9/5</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Availability</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY EXPERTS */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                  Expert Drain Solutions in {cityName}
                </h2>
                <p className="text-lg text-text/70 leading-relaxed font-medium italic">
                  Residents of {cityName} face unique plumbing challenges from aging infrastructure to local environmental factors. Our team is equipped with the latest technology to handle any drain issue efficiently.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { t: "Hydro Jetting", d: "High-pressure water clearing for the most stubborn blockages.", icon: Waves },
                     { t: "Camera Inspection", d: "HD video diagnostics to find the exact source of your problem.", icon: Search },
                     { t: "Sewer Line Care", d: "Comprehensive cleaning and repair for main sewer lines.", icon: Droplets },
                     { t: "Emergency Response", d: "Fast dispatch for urgent backups and standing water.", icon: Zap }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg border border-border shadow-sm group hover:bg-card hover:border-primary/20 transition-all">
                         <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <item.icon size={20} />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-text mb-1 uppercase">{item.t}</h4>
                            <p className="text-xs text-text/50 font-semibold">{item.d}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ShieldCheck size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Trusted {cityName} Pros</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Providing reliable plumbing and drain services across {cityName} and surrounding areas.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Our Professional Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    From residential kitchens to commercial sewer lines, we handle it all with precision.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Kitchen Drain Cleaning", desc: "Remove grease and food buildup safely from sink lines.", icon: Utensils },
                  { title: "Bathroom Drain Unclogging", desc: "Clear hair and soap scum from tubs and showers instantly.", icon: Bath },
                  { title: "Sewer Line Cleaning", desc: "Fix root intrusion and major blockages in main lines.", icon: Droplets },
                  { title: "Hydro Jetting", desc: "4000 PSI deep pipe cleaning for long-lasting results.", icon: Waves },
                  { title: "Emergency Service", desc: "24/7 fast response for immediate pipe relief.", icon: Zap },
                  { title: "Camera Inspection", desc: "HD diagnostics to see exactly what's blocking your pipes.", icon: Search }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all hover:shadow-2xl group flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors uppercase font-black">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow italic">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                       Call for service <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section className="py-24 bg-card border-y border-border text-center">
           <div className="container">
              <div className="mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black italic">
                    Our 5-Step Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Ensuring thorough cleaning and lasting results for every job.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8 uppercase italic font-black">
                 {[
                   { t: "Inspection", d: "Initial camera diagnostic check.", icon: Search },
                   { t: "Diagnosis", d: "Pinpoint cause and location.", icon: Activity },
                   { t: "Cleaning", d: "Professional unclogging.", icon: Hammer },
                   { t: "Testing", d: "Verify full flow restored.", icon: CheckCircle2 },
                   { t: "Prevention", d: "Advice on future care.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
                         <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border-4 border-card font-black italic">
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

        {/* 5. FAQ */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black uppercase italic">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: `How much does drain cleaning cost in ${cityName}?`, a: "Pricing typically ranges from $100 to $350 depending on the severity and location of the clog. We provide upfront quotes." },
                  { q: "Do you offer emergency services?", a: `Yes, we provide 24/7 emergency drain cleaning services across ${cityName} with fast response times.` },
                  { q: "Is hydro jetting safe for my pipes?", a: "Hydro jetting is safe for most modern pipes and is the most effective way to clean pipe walls thoroughly." },
                  { q: "How fast can you arrive?", a: "In many cases, we can have a technician at your door within 60 minutes for emergency calls." }
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

        {/* 6. FINAL CTA */}
        <section className="py-24 bg-card overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                 Fast Relief for Your Drains
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase">
                 Don't let a clogged drain ruin your day. Contact the {cityName} experts for same-day service and professional results.
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
                    Free Estimate
                 </a>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
