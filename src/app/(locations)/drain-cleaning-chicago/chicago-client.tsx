"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap, Bath
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const neighborhoods = [
  "Downtown (Loop)", "Lincoln Park", "Hyde Park", "River North",
  "West Loop", "Logan Square", "Wicker Park"
];

const mainTelLink = "tel:+17247506935";

export function ChicagoClient() {
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">CHI</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60">
                   Licensed and Insured Chicagoland Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Chicago Drain Cleaning & <span className="text-primary">Rooter Services</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Fast, reliable and local drain cleaning services across Chicago. Tired of slow drains or backups? We connect you with licensed professionals who fix clogged drains fast.
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
                  Book Service online
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day dispatch</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Emergency Support</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Trusted Chicago Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY CHICAGO NEEDS EXPERTS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                  Why Chicago homes need professional drain cleaning
                </h2>
                <p className="text-lg text-text/70 leading-relaxed font-medium">
                  Chicago plumbing faces serious challenges that can quickly turn into sewer issues and flooding if not handled by local experts.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { t: "Grease buildup", d: "A major cause of clogs in busy Chicago kitchens." },
                     { t: "Hair & soap clogs", d: "Standard bathroom blockages in historic homes." },
                     { t: "Tree roots", d: "Roots invading older clay sewer lines across the city." },
                     { t: "Aging infrastructure", d: "Older neighborhoods require specialist care." },
                     { t: "Heavy rainfall", d: "High water pressure causing regional backups." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-bg border border-border shadow-sm group hover:border-primary/20 transition-all">
                         <CheckCircle2 size={20} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                         <span className="text-base font-bold text-text leading-tight">{item.t}</span>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Building2 size={80} className="text-primary mb-8" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Chicago Infrastructure Experts</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed">
                       We understand the complex sewer systems and freezing impacts specific to Chicagoland properties.
                    </p>
                    <div className="absolute top-0 right-0 p-8">
                       <ShieldCheck size={40} className="text-primary opacity-20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES GRID (HIGH VALUE + SEO) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our drain cleaning services in Chicago
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto">
                   Professional flow restoration for kitchens, bathrooms and main sewer lines across the city.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Kitchen drain cleaning", desc: "Removes grease, food debris and stubborn buildup safely from sink lines.", icon: Utensils },
                  { title: "Bathroom drain cleaning", desc: "Clears hair, soap scum and cosmetic clogs from tubs, showers and toilets.", icon: Bath },
                  { title: "Sewer line cleaning", desc: "Removes roots, heavy debris and deep scale from your main system lines.", icon: Droplets },
                  { title: "Hydro jetting Chicago", desc: "4000 PSI high-pressure deep pipe cleaning for the most stubborn blockages.", icon: Waves },
                  { title: "Emergency drain cleaning Chicago", desc: "24/7 rapid response for total backups and floor drain overflows.", icon: Zap },
                  { title: "Camera inspection", desc: "Detects hidden pipe cracks, root intrusion and system failures in HD.", icon: Search }
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
                       Call for fast service <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. COMMON PROBLEMS (SEO BOOST) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                      Common drain problems we fix
                   </h2>
                   <p className="text-lg text-text/70 font-medium leading-relaxed">
                      Small issues can quickly escalate into total sewer failures in Chicago's vertical and deep-drain systems. Catching these signs early prevents major property damage.
                   </p>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { t: "Slow draining water", icon: Clock },
                        { t: "Bad odors", icon: Activity },
                        { t: "Standing water", icon: Droplets },
                        { t: "Gurgling pipes", icon: Waves },
                        { t: "Recurring clogs", icon: Plus }
                      ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-bg border border-border shadow-sm group hover:bg-card transition-all">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                               <item.icon size={20} />
                            </div>
                            <span className="text-sm font-bold text-text tracking-tight">{item.t}</span>
                         </div>
                      ))}
                   </div>
                   <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner">
                      <p className="text-sm font-bold text-text/50 italic leading-relaxed">
                         "Early intervention is the key to protecting your Chicago home from structural water damage and mold."
                      </p>
                   </div>
                </div>
                <div className="relative">
                   <div className="aspect-[4/3] bg-bg border border-border rounded-[3rem] p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-start space-y-6">
                      <ShieldAlert size={60} className="text-red-600 mb-2" />
                      <h3 className="text-2xl font-bold text-text tracking-tight">Act early, save money</h3>
                      <p className="text-sm text-text/60 font-medium leading-relaxed">
                         Minor drainage delays often lead to $5,000+ in avoidable restoration costs if the system overflows.
                      </p>
                      <a href={mainTelLink} className="inline-flex items-center gap-2 text-primary font-bold text-sm group">
                        Get a diagnostic call now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US (CONVERSION DRIVER) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Why choose DrainCleaningNearMe in Chicago
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Transparent pricing and local expertise you can rely on.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { t: "Licensed Technicians", d: "Vetted and insured local professionals.", icon: ShieldCheck },
                  { t: "Same-Day & 24/7", d: "Emergency support whenever you need it.", icon: Clock },
                  { t: "Affordable Pricing", d: "Typical jobs range from $100–$275.", icon: Search },
                  { t: "Advanced Tools", d: "Hydro jetting and HD camera gear.", icon: Zap },
                  { t: "Local Expertise", d: "Understanding Chicago's specific sewers.", icon: Building2 }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/20 transition-all">
                     <f.icon size={28} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-sm font-bold text-text tracking-tight">{f.t}</h4>
                     <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase leading-relaxed">{f.d}</p>
                  </div>
                ))}
             </div>
             <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center p-8 bg-card border border-border rounded-3xl shadow-xl">
                   <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-accent text-accent" />)}
                   </div>
                   <p className="text-lg font-bold text-text mb-2 tracking-tight">“Cleared our sewer clog in under 3 hours!”</p>
                   <span className="text-xs font-bold text-text/40 uppercase tracking-widest">— Happy Chicago Homeowner</span>
                </div>
             </div>
          </div>
        </section>

        {/* 6. PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our 5-step drain cleaning process
                 </h2>
                 <p className="text-text/70 font-medium text-lg">Fast, efficient, and no guesswork for your peace of mind.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { num: "1", t: "Inspection", d: "Detailed camera or manual fixture check.", icon: Search },
                   { num: "2", t: "Diagnosis", d: "Identify precise block location and cause.", icon: Activity },
                   { num: "3", t: "Cleaning", d: "Professional snaking or hydro jetting treatment.", icon: Droplets },
                   { num: "4", t: "Testing", d: "Confirm full system flow restoration.", icon: CheckCircle2 },
                   { num: "5", t: "Prevention", d: "Ongoing tips to avoid repeat system clogs.", icon: ShieldAlert }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-sm relative group-hover:bg-primary group-hover:text-white transition-all">
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

        {/* 7. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Drain cleaning services across Chicago
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Fast local response across all city neighborhoods.</p>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
               {neighborhoods.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight leading-tight">{n}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Cost of drain cleaning in Chicago?", a: "Typical professional jobs range from $100 to $275 depending on the severity." },
                  { q: "Emergency service available?", a: "Yes, our network is active 24/7 for Chicago drain emergencies." },
                  { q: "Causes of clogs?", a: "Common Chicago causes include grease buildup, bathroom hair clogs, and tree roots." },
                  { q: "Is hydro jetting safe?", a: "Yes, it is a safe and high-pressure effective deep cleaning method for most pipes." },
                  { q: "Time to fix?", a: "Most residential fixtures are cleared and running within a few hours." },
                  { q: "Sewer backup solution?", a: "We typically recommend a camera inspection followed by professional hydro jetting for main backups." }
                ].map((faq, index) => (
                  <div key={index} className="bg-bg border border-border rounded-2xl overflow-hidden shadow-sm">
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

        {/* 9. URGENCY SECTION */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-red-600/5 blur-[120px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight">
                 Do not wait – drain problems get worse fast
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                 {[
                   { t: "Structural flooding", icon: Waves },
                   { t: "Toxic mold development", icon: ShieldAlert },
                   { t: "Excessive sewer backups", icon: Trash2 }
                 ].map((e, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-card border border-red-600/10 shadow-sm text-center group hover:border-red-600/30 transition-all">
                      <e.icon size={32} className="text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-text tracking-tight tracking-widest leading-relaxed">Ignoring clogs can cause <span className="block text-red-600">{e.t}</span></span>
                   </div>
                 ))}
              </div>
              <p className="text-xl text-text/60 font-medium italic">Act early and save thousands in preventable property restoration costs.</p>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-24 bg-card">
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
                       Call results: Call for same-day drain cleaning in Chicago
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto italic">
                       Protect your home and avoid costly damage with fast professional Chicago service. Available 24/7.
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
                          Book your service today
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
