"use client";

import { motion } from "framer-motion";
import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Trash2, ShieldAlert,
  Plus, Minus, HelpCircle, Zap, Bath, Hammer, ThermometerSun,
  AlertTriangle, ArrowRight, MousePointerClick, TrendingUp,
  Leaf, Info, Heart
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const serviceAreas = [
  "North Beach", "Japantown", "Jackson Square", "Mission District", 
  "Noe Valley", "Haight-Ashbury", "Daly City", "South SF"
];

const mainTelLink = "tel:+17247506935";

export function SFClient() {
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
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-card border border-border rounded-full shadow-sm mb-10"
              >
                <div className="flex -space-x-1.5">
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-[8px] font-bold">SF</div>)}
                </div>
                <span className="text-sm font-semibold text-text/60 font-black">
                   Licensed, Insured & Available 24/7 Across San Francisco
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] font-black"
              >
                Expert Drain Cleaning & <span className="text-primary italic">Clogged Pipe</span> Solutions in San Francisco
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed italic"
              >
                DrainCleaningNearMe delivers fast, reliable drain cleaning services San Francisco residents trust for clogged drain repair and emergency needs. Our team, available 24/7, tackles sewer line cleaning with hydro jetting and rooter services across San Francisco, ensuring clear pipes quickly.
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
                  href="#quote"
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95"
                >
                  Free Estimate
                </a>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 uppercase tracking-widest font-black"
              >
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> 24/7 Available</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Over 4.6/5 Stars</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. SAN FRANCISCO DRAIN CHALLENGES */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black underline decoration-primary decoration-4 underline-offset-8">
                   San Francisco Drain Challenges
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    San Francisco's aging infrastructure, tree roots and grease buildup create frequent plumbing issues like slow drains and sewer backups. In this hilly city with old clay pipes, root intrusions from nearby trees seek water, causing pipe blockages, while urban runoff adds debris during rains.
                   </p>
                   <p>
                    Regular drain cleaning in San Francisco prevents these issues, as clogs from grease, hair and debris affect 1 in 5 households yearly. Foul odors from drains signal early problems; professional intervention stops costly sewer line repair in San Francisco.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {[
                     { t: "Aging Infrastructure", d: "Old clay and iron pipes prone to collapse.", icon: Activity },
                     { t: "Tree Root Intrusion", d: "Roots seeking water penetrate older pipe joints.", icon: Droplets },
                     { t: "Grease Buildup", d: "Major cause of clogs in high-density areas.", icon: Utensils },
                     { t: "Hilly Terrain", d: "Gravity-fed systems face unique flow challenges.", icon: TrendingUp }
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
                    <Activity size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Local SF Experts</h3>
                    <p className="text-sm text-text/50 font-bold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Specializing in the City's unique plumbing landscape.
                    </p>
                    <div className="mt-8">
                       <p className="text-xs font-black text-primary uppercase tracking-widest bg-primary/5 px-6 py-3 rounded-full border border-primary/20 shadow-inner">
                          (724) 750-6935
                       </p>
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
                  Our Drain Cleaning Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-3xl mx-auto italic">
                    We offer comprehensive professional drain cleaning services in San Francisco, from residential to commercial needs.
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    title: "Residential Drain Cleaning", 
                    desc: "Handle kitchen drain cleaning, bathroom drain unclogging and shower clogs with our targeted approach. Hair, soap scum and food waste cause most backups; we clear them fast. Enjoy improved flow and no standing water in your home.",
                    link: "/bathroom-drain-cleaning-unclogging-services",
                    icon: Bath 
                  },
                  { 
                    title: "Commercial Drain Cleaning", 
                    desc: "Restaurants and offices face high grease buildup; our commercial drain cleaning in San Francisco keeps operations smooth. Bi-annual cleanings prevent downtime in high-traffic spots.",
                    link: "/kitchen-sink-drain-cleaning-unclogging-services",
                    icon: Building2 
                  },
                  { 
                    title: "Emergency Drain Cleaning", 
                    desc: "For sewer backup or urgent unclog drain in San Francisco, our 24/7 emergency technician responds same-day. No more flooding; get reliable plumbing and drain cleaning now.",
                    link: "/emergency-drain-cleaning-services",
                    icon: Zap 
                  },
                  { 
                    title: "Sewer Line Cleaning", 
                    desc: "Address deep blockages, root intrusion sewer lines and main line issues with sewer cleaning San Francisco expertise. Tree roots plague Bay Area pipes, but we remove them effectively.",
                    link: "/sewer-line-cleaning-repair-usa",
                    icon: Droplets 
                  }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors uppercase font-black">{s.title}</h3>
                    <p className="text-base text-text/60 font-medium leading-relaxed grow italic mb-8">{s.desc}</p>
                    <Link href={s.link} className="text-primary font-bold text-sm flex items-center gap-2 group/link uppercase tracking-widest font-black border-t border-border pt-6">
                       View Service Details <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. ADVANCED SOLUTIONS */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black italic underline decoration-primary decoration-4 underline-offset-8">
                    Advanced Solutions
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Utilizing state-of-the-art technology for lasting results.
                 </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { 
                     t: "Hydro Jetting Service", 
                     d: "High-pressure water cleans pipes fully, outperforming snaking for long-term results; no use of chemicals, eco-friendly cleaning method.",
                     link: "/hydro-jetting-cleaning-services",
                     icon: Waves 
                   },
                   { 
                     t: "Drain Snaking Services", 
                     d: "Quick solution for removing simple clogs in PVC pipes. Mechanical removal for tight clogs and blockages.",
                     link: "#",
                     icon: Hammer 
                   },
                   { 
                     t: "Camera Inspection", 
                     d: "Sewer line inspection through video camera reveals hidden issues like cracks and blockage. HD inspection reveals root removal needs with 100% diagnostic accuracy.",
                     link: "/drain-camera-inspection",
                     icon: Search 
                   }
                 ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm text-center flex flex-col items-center">
                       <div className="w-14 h-14 rounded-2xl bg-card text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          <item.icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors uppercase font-black">{item.t}</h3>
                       <p className="text-sm text-text/50 font-bold leading-relaxed grow italic mb-6">{item.d}</p>
                       <Link href={item.link} className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:underline">
                          Learn More <ArrowRight size={12} />
                       </Link>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. SIGNS YOU NEED DRAIN CLEANING */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="space-y-6">
                       {[
                         { t: "Slow Draining", d: "Sinks or tubs taking forever to empty due to buildup.", icon: Clock },
                         { t: "Foul Odors", d: "Smells coming from drains caused by grease clogs.", icon: AlertTriangle },
                         { t: "Gurgling Sounds", d: "Standing water or odd noises indicating pipe blockages.", icon: Activity },
                         { t: "Multiple Backups", d: "Multiple fixtures affected signals major sewer problems.", icon: Trash2 }
                       ].map((sign, i) => (
                          <div key={i} className="flex gap-6 p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all group">
                             <div className="w-12 h-12 rounded-xl bg-bg border border-border text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                <sign.icon size={20} />
                             </div>
                             <div>
                                <h4 className="text-lg font-black text-text uppercase tracking-tight">{sign.t}</h4>
                                <p className="text-sm text-text/50 font-medium italic">{sign.d}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                       Signs You Need Drain Cleaning
                    </h2>
                    <p className="text-xl text-text/70 leading-relaxed font-medium italic">
                       Spot issues early to avoid major repairs. These early indicators prevent sewer backups; call for drain unclogging near you.
                    </p>
                    <a href={mainTelLink} className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">
                       <Phone size={18} fill="currentColor" /> Call for Inspection
                    </a>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. WHY CHOOSE DRAIN CLEANING NEAR ME */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                    Why Choose DrainCleaningNearMe
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    As San Francisco drain experts, we stand out with our commitment to quality and local expertise.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Licensed & Insured", d: "Professionals with deep local knowledge of SF plumbing codes.", icon: ShieldCheck },
                   { t: "24/7 Availability", d: "Emergency plumbers ready across San Francisco anytime.", icon: Clock },
                   { t: "Latest Tools", d: "Hydro jetting and drain camera inspection services in San Francisco, CA.", icon: Zap },
                   { t: "Affordable Rates", d: "Average $250 for residential cleaning; competitive pricing.", icon: CheckCircle2 },
                   { t: "Experienced Techs", d: "Handling residential and commercial services efficiently.", icon: Star },
                   { t: "Eco-Friendly", d: "Protecting the Bay with safe cleaning methods.", icon: Leaf }
                 ].map((f, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-bg border border-border shadow-sm flex items-start gap-6 group hover:border-primary/50 transition-all">
                       <div className="w-12 h-12 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          <f.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-base font-black text-text uppercase tracking-widest mb-2">{f.t}</h4>
                          <p className="text-xs text-text/50 font-bold leading-relaxed italic">{f.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm">
                    <Info size={24} />
                    <span>See EPA guidelines on proper FOG disposal</span>
                 </div>
                 <a href="https://www.epa.gov" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-all shadow-md">
                    Visit EPA Site <MousePointerClick size={14} />
                 </a>
              </div>
           </div>
        </section>

        {/* 7. OUR CLEANING PROCESS */}
        <section className="py-24 bg-bg border-y border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black uppercase italic">
                    Our Cleaning Process
                 </h2>
                 <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">We ensure thorough, efficient service using advanced tools.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                 {[
                   { t: "1. Inspection", d: "Camera technology spots issues instantly.", icon: Search },
                   { t: "2. Diagnosis", d: "Identify root causes like root intrusion.", icon: Activity },
                   { t: "3. Cleaning", d: "Hydro jetting or snaking removes blockages.", icon: Waves },
                   { t: "4. Testing", d: "Verify flow and prevent future clogs.", icon: CheckCircle2 }
                 ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-6 group p-10 bg-card border border-border rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                       <div className="w-20 h-20 rounded-3xl bg-bg border border-border flex items-center justify-center text-primary font-bold shadow-inner relative group-hover:bg-primary group-hover:text-white transition-all">
                          <s.icon size={32} />
                       </div>
                       <h4 className="text-xl font-black text-text uppercase tracking-tight group-hover:text-primary transition-colors">{s.t}</h4>
                       <p className="text-sm text-text/50 font-bold italic leading-relaxed">{s.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. SERVICE AREAS */}
        <section className="py-24 bg-card border-b border-border text-center">
          <div className="container">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase font-black">
               Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-16 italic">Proudly serving San Francisco and Bay Area neighborhoods.</p>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-6 rounded-2xl bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/20 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    {n}
                 </div>
               ))}
             </div>
             <p className="mt-12 text-sm text-text/40 font-bold uppercase tracking-widest italic">Fast response for storm or French drain cleaning services in San Francisco. Learn more at our <Link href="/" className="text-primary underline">drain cleaning City Landing pages</Link>.</p>
          </div>
        </section>

        {/* 9. CUSTOMER BENEFITS */}
        <section className="py-24 bg-bg border-b border-border">
           <div className="container">
              <div className="text-center mb-20 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                    Customer Benefits
                 </h2>
                 <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto italic">
                    Why regular professional maintenance is worth it. Read our <Link href="/blogs/drain-cleaning-guide-tips-usa" className="text-primary underline">Sewer & Drain Cleaning Guide</Link> for more tips.
                 </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Prevent Repairs", d: "Regular maintenance saves thousands in the long run.", icon: ShieldCheck },
                   { t: "Restore Flow", d: "Eliminate slow drains and foul odors permanently.", icon: Waves },
                   { t: "Extend Lifespan", d: "Protect your pipes against corrosion and damage.", icon: TrendingUp },
                   { t: "Eco-Friendly", d: "Methods that protect San Francisco's local environment.", icon: Leaf },
                   { t: "Home Value", d: "Clean, reliable plumbing boosts your property value.", icon: Star },
                   { t: "Peace of Mind", d: "24/7 support means you're never alone in an emergency.", icon: Heart }
                 ].map((b, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-card border border-border flex gap-6 items-center group hover:bg-primary/5 transition-all">
                       <div className="text-primary group-hover:scale-110 transition-transform">
                          <b.icon size={28} />
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-text uppercase tracking-tight">{b.t}</h4>
                          <p className="text-xs text-text/50 font-bold italic">{b.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-16 text-center">
                 <a href={mainTelLink} className="px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-blue-700 transition-all shadow-xl shadow-primary/30 inline-flex items-center gap-4">
                    Book Service Now <MousePointerClick size={24} />
                 </a>
              </div>
           </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase font-black uppercase italic underline decoration-primary decoration-4 underline-offset-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 font-black uppercase italic">
                {[
                  { 
                    q: "How much does drain cleaning cost in San Francisco?", 
                    a: "Average $100–$400 for sinks/toilets, $400–$700 for hydro jetting, plus $50 fee. Varies by clog severity." 
                  },
                  { 
                    q: "How often should drains be cleaned?", 
                    a: "Residential drains should be cleaned on a yearly basis. Commercial: Twice yearly or more for grease-heavy spots." 
                  },
                  { 
                    q: "What is hydro jetting?", 
                    a: "High-pressure water blasts pipes clean, removing grease and roots better than snaking for lasting results." 
                  },
                  { 
                    q: "Do you offer emergency service?", 
                    a: "Yes, 24/7 plumbers are available for emergency service in San Francisco with same-day response." 
                  },
                  { 
                    q: "DIY vs. professional drain cleaning?", 
                    a: "DIY risks pipe damage; professionals use cameras and Hydro-jetting for safe, complete fixes." 
                  },
                  { 
                    q: "What causes most San Francisco clogs?", 
                    a: "Grease, tree roots, hair, aging pipes etc. The hilly terrain and old infrastructure also play major roles." 
                  },
                  { 
                    q: "Can you handle sewer line repair in San Francisco?", 
                    a: "Yes, we can handle sewer line repair in San Francisco, from cleaning to trenchless repairs." 
                  }
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
        <section className="py-24 bg-bg overflow-hidden relative border-y border-border" id="quote">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-12 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black uppercase">
                 Get Clog-Free Pipes Today
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase underline decoration-primary decoration-4">
                 Do not let clogged drains disrupt your day; DrainCleaningNearMe offers plumbing services across San Francisco, CA you can trust.
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
                    Free Quote
                 </a>
              </div>
              <p className="text-xs font-bold text-text/30 tracking-widest uppercase">
                 Same-Day Service Available &middot; Licensed, Insured, Guaranteed.
              </p>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
