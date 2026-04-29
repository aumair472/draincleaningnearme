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
  "Georgetown", "Capitol Hill", "Adams Morgan", "Dupont Circle", 
  "Foggy Bottom", "Petworth", "Anacostia"
];

const mainTelLink = "tel:+17247506935";

export function DCClient() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* 1. HERO SECTION (DC LOCAL) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="DC"
                text="Licensed and Insured Washington DC Plumbers"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1]"
              >
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> in Washington DC
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Aging federal-era pipes causing slow drains or backups? We deliver fast, reliable solutions for Washington DC's historic infrastructure and high-density residential needs.
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
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> DC Local Experts</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL PLUMBING CHALLENGES (DC LOCAL) */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                   Washington DC's Historic & Federal Challenges
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Washington DC's infrastructure is a mix of federal-era history and modern density. From the historic brownstones of Capitol Hill to the high-rise apartments in Foggy Bottom, we handle everything from sagging clay pipes to specialized historic preservation plumbing requirements.
                   </p>
                   <p>
                    The District's high-density living and vibrant culinary scene lead to significant grease and hair buildup in residential and commercial lines. Without professional hydro jetting, these clogs often result in severe property damage.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {[
                     { t: "Historic Pipe Decay", d: "Federal-era clay and cast iron systems prone to collapse.", icon: Activity },
                     { t: "High-Density Backups", d: "Frequent clogs in shared lines and multi-family units.", icon: Building2 },
                     { t: "Culinary Grease", d: "Heavy buildup from DC's thriving restaurant scene.", icon: Utensils },
                     { t: "Root Intrusion", d: "Aggressive urban tree roots invading older sewer joints.", icon: Droplets }
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
                       Professional service from Georgetown to Anacostia.
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
                  DC's Top-Rated Drain Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Same-day relief from clogging, odors and backups.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Residential Drain Cleaning", desc: "Removing hair and food clogs in historic DC homes and modern apartments.", icon: Bath },
                  { title: "Commercial Drain Unclogging", desc: "Specialized grease removal for Washington DC restaurants and offices.", icon: Building2 },
                  { title: "24/7 Emergency Service", desc: "Rapid response for sewer main backups and sudden plumbing crises.", icon: Zap },
                  { title: "Hydro Jetting DC", desc: "High-pressure water clearing of roots, grease and architectural debris.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Full-capacity restoration for main lines using advanced rooter tech.", icon: Droplets },
                  { title: "HD Camera Inspection", desc: "Precision diagnostics to find offsets and cracks in DC's historic pipes.", icon: Search }
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
             <p className="text-text/70 font-medium text-lg mb-16 italic">Serving every quadrant of the District with local expertise.</p>
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
                Washington DC Drain Cleaning FAQs
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How much does drain cleaning cost in Washington DC?", a: "Residential drain cleanings in the District typically range from $175 to $400. We provide free on-site estimates and upfront quotes." },
                  { q: "Can hydro jetting damage historic DC pipes?", a: "No, we always perform an HD camera inspection first to confirm your pipes are structurally sound before applying safe pressure." },
                  { q: "Do you offer emergency services in Georgetown?", a: "Yes, we provide 24/7 priority emergency response for Georgetown and all surrounding DC neighborhoods." },
                  { q: "Why do my drains smell in older DC homes?", a: "Older trap designs or venting issues in historic homes can let sewer gases escape. Professional cleaning and inspection usually resolve this fast." }
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
                 Stop DC Drain Disasters!
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
