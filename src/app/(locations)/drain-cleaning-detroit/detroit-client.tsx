"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap, Bath, Hammer, ThermometerSnowflake
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TrustBadge } from "@/components/ui/trust-badge";

const serviceAreas = [
  "Downtown", "Midtown", "Corktown", "West Village", 
  "Palmer Park", "Indian Village", "Greektown"
];

const mainTelLink = "tel:+17247506935";

export function DetroitClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (DETROIT LOCAL) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="DET"
                text="Licensed and Insured Detroit Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> in Detroit
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Clogged drains causing backups or slow drainage in the Motor City? We deliver fast, reliable services Detroit residents trust for hydro jetting, sewer cleaning and emergency fixes.
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
                  Call now for same-day service
                </a>
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95"
                >
                  Get your free estimate
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
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Priority Emergency</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Detroit Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHY DETROIT NEEDS EXPERT HELP (LOCAL AUTHORITY) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                   Why Detroit Homes Need Expert Drain Cleaning
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6">
                   <p>
                    Detroit's historic housing stock often features aging cast-iron and galvanized steel pipes that are prone to corrosion and sediment buildup. Harsh Michigan winters also bring the constant threat of frozen and burst pipes as soil shifts during freeze-thaw cycles.
                   </p>
                   <p>
                    From Midtown rowhomes to Indian Village estates, older infrastructure requires specialized knowledge to prevent costly backups and foundation damage. We understand Detroit's unique combined sewer challenges and how they impact local residential plumbing.
                   </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-bg border border-border shadow-inner relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><ThermometerSnowflake size={60} /></div>
                   <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase">Winter Weather Specialization</h3>
                   <p className="text-sm text-text/50 italic leading-relaxed">
                      "We resolve complex drain issues before they lead to emergency sewage backups or catastrophic pipe failure during Detroit's deep freeze months."
                   </p>
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <Droplets size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">Motor City Plumbing Experts</h3>
                    <p className="text-sm text-text/50 font-semibold max-w-xs leading-relaxed uppercase tracking-widest">
                       Specialized in clearing scale and corrosion from Detroit's historic plumbing systems.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                          Resilience against Michigan's deep freeze
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
                  Our Drain Cleaning Services in Detroit
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Comprehensive solutions customized to Detroit local needs. From snaking to high-pressure jetting.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Rooter Services Detroit", desc: "Mechanical snaking to break up tough blockages from hair and organic waste in Midtown kitchen drains.", icon: Hammer },
                  { title: "Hydro Jetting Services", desc: "High-pressure water blasting to clear grease and mineral scale from aging Detroit sewer lines.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Tackling tree root intrusion common in mature neighborhoods like Indian Village and Palmer Park.", icon: Droplets },
                  { title: "Emergency Drain Service", desc: "24/7 rapid response for basement backups and overflows, arriving within 60 minutes city-wide.", icon: Zap },
                  { title: "HD Camera Inspection", desc: "Pinpoint hidden pipe corrosion or shifts in Corktown properties before they become disasters.", icon: Search },
                  { title: "Commercial Drain Care", desc: "Specialized grease trap and large-line maintenance for Detroit's bustling restaurant scene.", icon: Building2 }
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
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest">
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
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight max-w-4xl mx-auto uppercase">
                    Common Drain Problems in Detroit
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Detroit's aging infrastructure and cold climate create unique plumbing headaches.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Cast-Iron Corrosion", d: "Old sewer lines rust from the inside out, catching debris and causing recurring clogs.", icon: Activity },
                   { t: "Frozen Pipe Damage", d: "Deep Michigan winters expand water in pipes, leading to cracks and subterranean leaks.", icon: Utensils },
                   { t: "Tree Root Intrusion", d: "Aggressive roots seek moisture in aging clay pipe joints in established neighborhood blocks.", icon: Droplets },
                   { t: "Soil Shift Misalignment", d: "Freeze-thaw cycles move the ground, causing sewer pipes to shift out of alignment.", icon: Building2 },
                   { t: "Combined Sewer Backups", d: "Heavy rains can overwhelm local systems, causing basement backups in older homes.", icon: Waves }
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
                    <ShieldAlert size={48} className="text-primary animate-pulse shadow-primary/20" />
                    <h3 className="text-xl font-bold tracking-tight">Stop basement floods!</h3>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                       Old Detroit homes are at high risk for backups during sudden freezes.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. SIGNS YOU NEED SERVICE (SEO BOOST) */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container-narrow text-center space-y-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                Signs You Need Professional Help
              </h2>
              <p className="text-lg text-text/70 font-medium italic">Do not ignore early warnings; acting fast saves thousands on drain repair in Detroit:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Slow drains pooling in historic cast-iron tubs",
                   "Gurgling sounds: air trapped by sediment or roots",
                   "Foul odors from sewer gases escaping aging pipes",
                   "Recurring issues signaling structural pipe needs",
                   "Water backups in basement floor drains"
                 ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all font-bold text-text tracking-tight uppercase leading-tight text-sm">
                       <CheckCircle2 size={24} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                       {sign}
                    </div>
                 ))}
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
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">Transparent, efficient service for Detroit homes.</p>
              </div>
              <div className="grid md:grid-cols-5 gap-8">
                 {[
                   { t: "Inspection", d: "HD camera scope for hidden corrosion or root damage.", icon: Search },
                   { t: "Diagnosis", d: "Identify the root cause: scale, roots, or soil shift.", icon: Activity },
                   { t: "Method selection", d: "Snaking for debris; hydro jetting for deep pipe cleaning.", icon: Hammer },
                   { t: "Execution", d: "Safe, thorough cleaning with specialized historic pipe care.", icon: CheckCircle2 },
                   { t: "Final testing", d: "Confirm full flow and zero drainage delays.", icon: Waves }
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

        {/* 7. WHY CHOOSE US (TRUST DRIVER) */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-16 uppercase font-black">
               Why Choose DrainCleaningNearMe
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { t: "Fast 60-Min Response", icon: Clock },
                  { t: "Licensed & Experienced", icon: ShieldCheck },
                  { t: "HD Camera Scopes", icon: Search },
                  { t: "Upfront Detroit Pricing", icon: Search },
                  { t: "7-Day Guarantee", icon: Star },
                  { t: "24/7 Availability", icon: Zap }
                ].map((f, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/50 transition-all">
                     <f.icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                     <h4 className="text-[10px] font-bold text-text tracking-widest uppercase leading-tight">{f.t}</h4>
                  </div>
                ))}
             </div>
             <p className="mt-12 text-sm text-text/60 font-medium italic">5-star service from Corktown to Palmer Park.</p>
          </div>
        </section>

        {/* 8. PREVENTION TIPS (DETROIT DATA) */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow space-y-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                Prevention Tips for Detroit Drains
              </h2>
              <p className="text-lg text-text/70 font-medium italic max-w-2xl mx-auto">Reduce the risk of winter backups by 70% with these localized tips:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 {[
                   { t: "Insulate exposed pipes", icon: Trash2 },
                   { t: "Clear yard debris", icon: Hammer },
                   { t: "Annual inspections", icon: Search },
                   { t: "Avoid corrosive cleaners", icon: ShieldAlert }
                 ].map((tip, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:-translate-y-1 transition-all">
                       <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                          <tip.icon size={22} />
                       </div>
                       <span className="text-xs font-bold text-text/80 tracking-widest uppercase">{tip.t}</span>
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
             <p className="text-text/70 font-medium text-lg mb-16 italic">Covering all Detroit neighborhoods with localized Motor City expertise.</p>
             <div className="grid grid-cols-2 lg:grid-cols-7 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <span className="text-[10px] font-black font-bold text-text tracking-tight leading-tight">{n}</span>
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
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in Detroit?", a: "Typical service for sinks and toilets ranges from $150-$300. Complex main line cleanings vary, but we provide free upfront estimates." },
                  { q: "How often should I clean my drains in an older Detroit home?", a: "For homes with cast-iron or clay pipes, we recommend a professional inspection and cleaning every 12 months to prevent collapse or severe root damage." },
                  { q: "Can hydro jetting damage my old Detroit pipes?", a: "When performed by professionals after a camera inspection, hydro jetting is safe. We adjust pressure settings specifically for Detroit's historic plumbing infrastructure." },
                  { q: "Do you offer emergency services on winter holidays?", a: "Yes, we are Detroit's 24/7 emergency response team, available even during power outages and deep freezes." },
                  { q: "What causes most sewer backups in Midtown?", a: "A combination of aging cast-iron corrosion and heavy tree root intrusion from historic neighborhood foliage." }
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

        {/* 11. FINAL CTA / URGENCY (DETROIT) */}
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                 Do not let clogged drains disrupt your life!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic">
                 Licensed professionals ready 24/7. Same-day drain cleaning across Detroit.
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
                    Book Now
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Local Detroit Drain Experts &middot; Licensed, Insured, Guaranteed.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
