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
  "Summerlin", "Henderson", "Spring Valley", "Paradise", 
  "Enterprise", "North Las Vegas", "Boulder City"
];

const mainTelLink = "tel:+17247506935";

export function LVClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (LV LOCAL) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="LV"
                text="Licensed and Insured Las Vegas Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> in Las Vegas
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Desert heat and hard water scaling causing slow drains? We deliver fast, reliable solutions for Las Vegas's unique caliche soil and hospitality-driven plumbing demands.
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
                className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Availability</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Vegas Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL PLUMBING CHALLENGES (LV LOCAL) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                   Las Vegas Desert & Commercial Challenges
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Las Vegas sits on a layer of caliche; a rock-hard calcium carbonate that makes underground pipe repairs extremely difficult. Our hard water also leads to severe mineral scaling, narrowing pipes and causing frequent slow drains in Summerlin and Henderson.
                   </p>
                   <p>
                    From high-volume grease traps on the Strip to sand infiltration in newer Spring Valley developments, we provide specialized hydro jetting and rooter services designed for the Mojave Desert environment.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {[
                     { t: "Hard Water Scaling", d: "Mineral deposits narrow pipe capacity over time.", icon: Waves },
                     { t: "Caliche Soil Issues", d: "Rock-hard ground complicates underground sewer needs.", icon: Hammer },
                     { t: "Heat-Induced Expansion", d: "Desert temperatures stress pipe joints and fittings.", icon: ThermometerSun },
                     { t: "Hospitality Grease", d: "Heavy commercial clogs in restaurants and resorts.", icon: Utensils }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm">
                         <item.icon className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                         <div>
                            <h4 className="text-xs font-black text-text uppercase">{item.t}</h4>
                            <p className="text-[10px] text-text/40 font-bold leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ShieldCheck size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Authorized Rooter Experts</h3>
                    <p className="text-sm text-text/50 font-bold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Serving Summerlin, Henderson, and the entire Valley.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <div className="mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  Vegas's Top-Rated Drain Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Fast relief from backups, odors and high-mineral clogs.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Cleaning", desc: "Removing hair and calcium scale in homes from Enterprise to North Las Vegas.", icon: Bath },
                  { title: "Commercial Drain Solutions", desc: "High-capacity grease trap cleaning for Vegas restaurants and hotels.", icon: Building2 },
                  { title: "24/7 Emergency Service", desc: "Rapid response for sewer main backups and sudden plumbing crises.", icon: Zap },
                  { title: "Hydro Jetting Vegas", desc: "4,000 PSI water blasting to clear minerals, sand and grease.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Restoring flow to main lines using advanced rooter and camera tech.", icon: Droplets },
                  { title: "HD Camera Inspection", desc: "Precision diagnostics to find caliche-related pipe damage.", icon: Search }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase font-black">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow italic">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                       Learn more <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. SERVICE AREAS */}
        <section className="py-24 bg-card border-b border-border text-center">
          <div className="container">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase font-black">
                Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Serving the entire Las Vegas Valley and Henderson.</p>
             <div className="grid grid-cols-2 lg:grid-cols-7 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/20 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    {n}
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Las Vegas Drain Cleaning FAQs
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in Las Vegas?", a: "Residential services typically range from $99 to $299. We offer free visual inspections and upfront quotes before any work begins." },
                  { q: "Does hard water affect my Vegas drains?", a: "Definitely. Las Vegas has some of the hardest water in the country, leading to calcium buildup that narrows pipes and causes frequent clogs." },
                  { q: "Is hydro jetting safe for older Vegas homes?", a: "Yes, but we always use a camera inspection first to confirm your pipes can handle the pressure, ensuring a safe and effective clean." },
                  { q: "Do you offer emergency services in Summerlin?", a: "Yes, we provide 24/7 priority emergency response for Summerlin, Henderson, and the entire Las Vegas metro area." }
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
                 Stop Vegas Drain Disasters!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase underline decoration-primary decoration-4">
                 Licensed Professionals Ready 24/7. Same-Day Relief.
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
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
