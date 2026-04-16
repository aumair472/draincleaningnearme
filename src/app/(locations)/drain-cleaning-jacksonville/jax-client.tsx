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
  "Riverside", "San Marco", "Avondale", "Mandarin", 
  "Southside", "Jacksonville Beaches", "Northside"
];

const mainTelLink = "tel:+17247506935";

export function JAXClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (JACKSONVILLE LOCAL) */}
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
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold tracking-widest">FL</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60 font-black">
                   Licensed and Insured Jacksonville Plumbers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] font-black"
              >
                Professional Drain Cleaning & <span className="text-primary italic">Rooter Services</span> in Jacksonville
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                Clogged drains disrupting your life? We deliver fast, reliable solutions for Jacksonville's coastal challenges, from hair and grease clogs to aggressive Live Oak root intrusions.
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
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Availability</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Jax Local Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL PLUMBING CHALLENGES (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                   Jacksonville's Coastal Plumbing Challenges
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Jacksonville's humid coastal climate and sandy soil create unique stresses on residential and commercial plumbing. Shifting ground often leads to pipe misalignments, while high humidity accelerates organic decay and odors in slow-moving drains.
                   </p>
                   <p>
                    In historic neighborhoods like Riverside and San Marco, mature Live Oak roots aggressively seek moisture, often invading older sewer lines and causing severe blockages that generic chemicals cannot touch.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {[
                     { t: "Sandy Soil Shifts", d: "Instability leads to cracked and offset pipes.", icon: Activity },
                     { t: "Live Oak Intrusion", d: "Aggressive roots invade sewer joints for moisture.", icon: Droplets },
                     { t: "Coastal Humidity", d: "Faster organic breakdown and foul drain odors.", icon: ThermometerSun },
                     { t: "Mineral Scaling", d: "Local water deposits narrow pipe capacity.", icon: Waves }
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
                    <ShieldCheck size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Authorized Rooter Experts</h3>
                    <p className="text-sm text-text/50 font-bold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Delivering 5-star service from Mandarin to Jacksonville Beaches.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-black text-primary uppercase tracking-widest bg-primary/5 px-6 py-3 rounded-full border border-primary/20 shadow-inner">
                          Hydro Jetting: 4,000 PSI Power
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
                  Jacksonville's Top-Rated Drain Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Same-day relief from backups, slow drains and foul odors.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Unclogging", desc: "Fast removal of hair, soap scum and grease in kitchen and bathroom lines.", icon: Bath },
                  { title: "Commercial Drain Cleaning", desc: "Heavy-duty solutions for Jacksonville restaurants and high-traffic facilities.", icon: Building2 },
                  { title: "24/7 Emergency Service", desc: "Rapid response for sewer main overflows and sudden pipe blockages.", icon: Zap },
                  { title: "Hydro Jetting Services", desc: "4,000 PSI water blasts remove roots, minerals and grease without chemicals.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Restoring full capacity to main lines using advanced rooter and camera tech.", icon: Droplets },
                  { title: "HD Camera Inspection", desc: "Pinpoint root intrusion or pipe offsets precisely to avoid unnecessary digging.", icon: Search }
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
                    Common Jacksonville Drain Issues
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Florida's environmental factors accelerate pipe issues. Do not ignore the warnings!
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-black uppercase tracking-tight">
                 {[
                   { t: "Slow Flow", d: "Mineral scaling narrows pipes over time.", icon: Activity },
                   { t: "Foul Odors", d: "Bacterial decay in humid, slow drains.", icon: Utensils },
                   { t: "Gurgling", d: "Air pockets trapped by partial blockages.", icon: Waves },
                   { t: "Multiple Backups", d: "Main line root issue requiring urgency.", icon: ShieldAlert }
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
                    Our 5-Step Restoration Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Transparent, thorough and clean. We leave no mess behind.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8 uppercase italic font-black">
                 {[
                   { t: "Inspection", d: "Visual and tool-based assessment.", icon: Search },
                   { t: "Diagnosis", d: "Camera scope to find the true cause.", icon: Activity },
                   { t: "Clearing", d: "Hydro jetting or snaking selection.", icon: Waves },
                   { t: "Verification", d: "Flow testing to ensure 100% clearing.", icon: CheckCircle2 },
                   { t: "Prevention", d: "Expert tips to stop future clogs.", icon: ShieldAlert }
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
                  { t: "Licensed & Insured", icon: ShieldCheck, d: "State-certified Florida experts." },
                  { t: "Same-Day Service", icon: Clock, d: "Fast response across Duval County." },
                  { t: "Affordable Rates", icon: Search, d: "Starting at $99 with upfront quotes." },
                  { t: "Local Knowledge", icon: MapPin, d: "Experts in Jax coastal plumbing." }
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
             <p className="text-text/70 font-medium text-lg mb-16 italic italic">Serving all of Jacksonville from Northside to the Beaches.</p>
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
                Jacksonville Drain Cleaning FAQs
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { q: "How much does drain cleaning cost in Jacksonville?", a: "Residential drains typically run $99-$299; sewer main hydro-jetting averages $300-$600. Free estimates provided on arrival." },
                  { q: "How often should I clean my drains in Florida?", a: "Annually for preventive health; more frequently in older neighborhoods like Avondale with mature trees and sandy soil." },
                  { q: "Is hydro jetting safe for older Jacksonville pipes?", a: "Yes, our HD camera inspection confirms pipe integrity before high-pressure cleaning to ensure 100% safety." },
                  { q: "Do you offer emergency services in Duval County?", a: "24/7 emergency response available. We typically arrive in under 60 minutes for severe backups." },
                  { q: "Why do my drains smell like rotten eggs?", a: "In Jacksonville's humidity, organic waste decays fast. Professional cleaning removes the source of the odor immediately." },
                  { q: "Can I use store-bought cleaners for Jacksonville clogs?", a: "Not recommended. They often fail on roots/grease and can damage your pipes. Professional snaking or jetting is safer." }
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

        {/* 9. FINAL CTA / URGENCY (JACKSONVILLE) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="max-w-5xl mx-auto px-4 text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Stop Jax Drain Disasters Now!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic italic font-black uppercase underline decoration-primary decoration-4">
                 Licensed Jacksonville Professionals Ready 24/7. Same-Day Relief.
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
                 Authorized Jacksonville Sewer Experts &middot; Licensed, Insured, Guaranteed.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
