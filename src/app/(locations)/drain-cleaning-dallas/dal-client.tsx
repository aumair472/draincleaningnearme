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
  "Oak Lawn", "Highland Park", "Lakewood", "Dixon Circle", 
  "South Dallas", "University Park"
];

const mainTelLink = "tel:+17247506935";

export function DallasClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (DALLAS LOCAL) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="DFW"
                text="Licensed and Insured Dallas Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Expert Drain Cleaning Services in <span className="text-primary italic font-black">Dallas</span> with Upfront Pricing
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Tired of slow drains, foul odors or sudden backups disrupting your Dallas home or business? We restore flow instantly using advanced hydro jetting and rooter services.
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
                  Get Your Free Estimate
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Emergency Response</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Dallas Neighborhood Specialists</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY DALLAS FACES FREQUENT ISSUES (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   Why Dallas Homes face Frequent Drain Issues
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    Dallas's unique climate and soil create perfect conditions for plumbing nightmares. With hard water averaging 8.9 grains per gallon, mineral buildup clogs pipes quickly, reducing water pressure and damaging fixtures.
                   </p>
                   <p>
                    Shifting clay soil; swelling in heavy rains and shrinking in scorching summers; cracks sewer lines, inviting aggressive tree roots from cedar elms and Mexican sycamores common in Lakewood and Highland Park.
                   </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><ThermometerSun size={60} /></div>
                   <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase">Climate Impact</h3>
                   <p className="text-sm text-text/50 italic leading-relaxed">
                      "Fats, oils, and grease (FOG) from Dallas kitchens combine with scaling for stubborn blockages, especially in older homes across University Park and South Dallas."
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Activity size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Dallas Clay Soil experts</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed uppercase tracking-widest">
                       Experts in identifying cracks caused by DFW's swelling and shrinking earth.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                          Hard Water Analysis: 8.9 Grains Scaling
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES (HIGH VALUE + SEO) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                  Our Professional Drain Cleaning Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Comprehensive solutions customized to Dallas's specific environmental challenges.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Cleaning", desc: "Clear hair, soap and grease in Oak Lawn or Dixon Circle homes without harsh chemicals.", icon: Bath },
                  { title: "Commercial Drain Cleaning", desc: "Enzyme foams safe for pipes in Dallas restaurants and offices. Off-hours scheduling.", icon: Building2 },
                  { title: "Emergency Drain Cleaning", desc: "1-2 hour response across Dallas TX. Handles gurgling toilets or sewer overflows.", icon: Zap },
                  { title: "Sewer Line Cleaning", desc: "Targets tree root intrusions in clay soil. Rooter services to prevent major repairs.", icon: Droplets },
                  { title: "Hydro Jetting Services", desc: "4,000 PSI water blasts remove stubborn roots, scale and FOG completely.", icon: Waves },
                  { title: "Camera Inspection Dallas", desc: "Waterproof HD cameras pinpoint issues like soil-shift cracks without digging.", icon: Search }
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
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest">
                       View service <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
             </div>
             <div className="mt-16 text-center">
                <p className="text-sm font-bold text-text mb-4 tracking-tight uppercase">Book Commercial Service Now</p>
                <p className="text-xs font-bold text-text/40 tracking-widest uppercase bg-card/50 border border-border px-8 py-4 rounded-full inline-block">
                   Affordable rates starting at $199
                </p>
             </div>
          </div>
        </section>

        {/* 4. COMMON PROBLEMS (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase">
                    Common Drain Problems in Dallas & Causes
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Dallas's expansive clay soil and weather exacerbate clogs, leading to thousands of local service calls.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Slow Drains", d: "Mineral scaling from hard water (152 mg/L average) builds gradually in sinks.", icon: Activity },
                   { t: "Recurring Clogs", d: "Grease solidifies; tree roots from cedar elms invade cracks in Lakewood.", icon: Clock },
                   { t: "Bad Odors", d: "Sewer gas from FOG buildup or root blockages; common in humid Dallas summers.", icon: Activity },
                   { t: "Gurgling Sounds", d: "Air pockets from partial blockages in shifting soil pipes.", icon: Waves },
                   { t: "Water Backups", d: "Multiple fixtures overflow due to main line roots or storm infiltration.", icon: ShieldAlert }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm">
                       <div className="w-14 h-14 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{item.t}</h3>
                       <p className="text-sm text-text/60 font-medium leading-relaxed">{item.d}</p>
                    </div>
                 ))}
                 <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-border flex flex-col justify-center items-center text-center space-y-4 text-white">
                    <ShieldAlert size={48} className="text-red-600 animate-pulse" />
                    <h3 className="text-xl font-bold tracking-tight">Main line roots?</h3>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                       Cedar elms cause 30%+ of severe sewer cases in mature Dallas neighborhoods.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. SIGNS YOU NEED SERVICE (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                Signs You Need Professional Cleaning
              </h2>
              <p className="text-lg text-text/70 font-medium italic">Ignore these signs at your peril; DIY chemicals roughen DFW pipes, worsening clogs:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Water draining slowly from sinks or tubs",
                   "Multiple fixtures clogging simultaneously",
                   "Foul sewage smells from drains",
                   "Standing water in showers or around toilets",
                   "Recurring problems despite plunging"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all font-bold text-text tracking-tight uppercase leading-tight text-sm">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       {sign}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. OUR PROCESS (AIRTASKER FLOW) */}
        <section className="py-24 bg-card border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                    Our Proven Dallas Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Build trust with transparency; here is how we work.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { t: "Inspection", d: "Arrive fast, assess visible signs in your Dallas home.", icon: Search },
                   { t: "Diagnosis", d: "Camera inspection reveals hidden roots or scaling.", icon: Activity },
                   { t: "Cleaning", d: "Hydro jetting or snaking clears 99% of blockages.", icon: Waves },
                   { t: "Testing", d: "Run water to verify full unclogged flow.", icon: CheckCircle2 },
                   { t: "Prevention", d: "Custom advice, like strainers for kitchens.", icon: ShieldAlert }
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
              <div className="mt-16 text-center">
                 <p className="text-sm font-bold text-text/40 tracking-widest uppercase">Upfront pricing, no surprises; average drain clean $99-$399.</p>
              </div>
           </div>
        </section>

        {/* 7. WHY CHOOSE DALLAS DRAIN SERVICES (TRUST DRIVER) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black">
               Why Choose Dallas Drain Specialists
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { t: "Local Expertise", icon: MapPin },
                  { t: "Same-Day Response", icon: Clock },
                  { t: "Advanced Equipment", icon: Hammer },
                  { t: "Upfront Pricing", icon: Search },
                  { t: "Licensed & Insured", icon: ShieldCheck },
                  { t: "Satisfaction Guarantee", icon: Star }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-[10px] font-bold text-text tracking-widest uppercase leading-tight">{f.t}</h4>
                  </div>
                ))}
             </div>
             <p className="mt-12 text-sm text-text/60 font-medium italic">5-star reviews praise our speed and cleanliness across North Dallas.</p>
          </div>
        </section>

        {/* 8. PREVENTION TIPS (DALLAS DATA) */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                  Preventive Maintenance Tips for Dallas Homes
                </h2>
                <p className="text-lg text-text/70 font-medium italic">Avoid costly sewer line repair in Dallas with these data-backed habits:</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   { t: "Never pour grease", icon: Trash2, d: "Cool and trash kitchen FOG (fats, oils, grease) instead." },
                   { t: "Install strainers", icon: Hammer, d: "Catch hair and debris before it reaches Highland Park pipes." },
                   { t: "Monthly Kitchen Cleans", icon: Clock, d: "Routine boiling water flushes prevent solidification." },
                   { t: "Annual Inspections", icon: Search, d: "Catch main line roots before they explode in clay soil." },
                   { t: "Water Softeners", icon: Droplets, d: "Reduce scaling in high mineral-count neighborhoods." },
                   { t: "Check Storm Drains", icon: Waves, d: "Post-rain maintenance is essential in storm-prone Dallas." }
                 ].map((tip, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm group hover:-translate-y-1 transition-all">
                       <tip.icon className="text-primary mb-6" size={28} />
                       <h4 className="text-lg font-bold text-text mb-2 tracking-tight group-hover:text-primary transition-colors">{tip.t}</h4>
                       <p className="text-xs text-text/50 font-bold uppercase tracking-widest leading-relaxed">{tip.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. SERVICE AREAS (LOCAL SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">
               Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Covering all Dallas neighborhoods with specialized local know-how.</p>
             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-sm font-bold text-text tracking-tight leading-tight">{n}</span>
                 </div>
               ))}
               <div className="p-6 rounded-2xl bg-slate-900 border border-border shadow-sm flex flex-col items-center justify-center text-primary font-bold text-[10px] uppercase tracking-widest">
                   Lakewood & South Dallas
               </div>
             </div>
          </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in Dallas TX?", a: "Expect $99-$399 for standard jobs; hydro jetting $250-$600. Factors include severity and pipe material." },
                  { q: "How often should drains be cleaned in Dallas?", a: "Kitchen monthly, bathrooms 3-4 months, main lines yearly—more in root-heavy areas like University Park." },
                  { q: "Is hydro jetting safe for Dallas pipes?", a: "Yes, uses only high-pressure water. Safe for all Modern DFW pipes, eco-friendly and extends pipe life." },
                  { q: "What causes recurring clogs in Dallas?", a: "Hard water minerals (8.9 gpg), grease, tree roots from cedar elms exploiting clay soil cracks." },
                  { q: "Can DIY fix clogged drains Dallas?", a: "DIY works for minor clogs, but chemicals damage pipes; professionals handle roots and mains safely." },
                  { q: "Do you offer sewer hydro jetting service Dallas?", a: "Absolutely; powerful for roots and FOG in commercial/residential lines across Dallas." },
                  { q: "What is emergency drain service Dallas response time?", a: "1-2 hours, 24/7 for backups anywhere in Dallas TX." }
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

        {/* 11. FINAL CTA / URGENCY (DALLAS) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Stop Dallas Drain Disasters; Act Now!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic">
                 Do not let clogs turn into sewer line repair nightmares amid shifting soils and hard water.
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
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-2xl hover:border-primary transition-all active:scale-95 tracking-tight"
                 >
                    Book Online
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Trusted Dallas Sewer Cleaning &middot; Licensed, Insured, Guaranteed.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
