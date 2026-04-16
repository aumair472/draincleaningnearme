"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Phone, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Waves, 
  Search, 
  Wrench,
  AlertTriangle,
  Plus,
  Minus,
  CheckCircle2,
  Droplets,
  Heart,
  Smartphone,
  Drill,
  ShieldAlert
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "Do I need sewer cleaning or a full repair?",
    answer: "A professional camera inspection is the only way to decide. We start with a diagnostic to see if the blockage is just debris that can be jetted away or if the pipe has structural damage requiring repair."
  },
  {
    question: "Is hydro jetting safe for my older sewer line?",
    answer: "Yes, when performed by experts. We carefully adjust the water pressure specifically for the material (like clay or cast iron) and the current condition of your pipes."
  },
  {
    question: "Can I DIY a sewer line cleaning?",
    answer: "We strongly recommend against it. Main sewer lines require heavy-duty industrial equipment and specialized knowledge to avoid causing internal pipe collapses or sewage flooding."
  },
  {
    question: "How often should I have my sewer line cleaned?",
    answer: "It depends on the age of your home and proximity to large trees. Generally, a preventive cleaning every few years can save you from catastrophic emergency backups."
  },
  {
    question: "What is the difference between drain cleaning and sewer cleaning?",
    answer: "Drain cleaning usually refers to the smaller pipes inside your home. Sewer cleaning focuses on the 'main line' that carries all waste from your house out to the municipal system."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-card border border-border rounded-2xl overflow-hidden transition-all hover:shadow-md"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="text-lg font-bold text-text leading-tight">{faq.question}</span>
            {openIndex === index ? (
              <Minus className="shrink-0 text-primary" size={24} />
            ) : (
              <Plus className="shrink-0 text-text/40" size={24} />
            )}
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 text-text/70 font-medium leading-relaxed border-t border-border/50 pt-4 mx-6">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function SewerClient() {
  const mainTelLink = "tel:+17247506935";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      {/* 🔹 HERO SECTION (HIGH-CONVERSION) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50 text-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
          <div className="absolute top-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-8"
             >
               <Drill size={14} /> Professional Main Line Experts
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-text leading-[1.1]"
             >
                Sewer Line & Main <br className="hidden md:block" />
                <span className="text-primary italic border-b-4 border-primary/20">Drain Cleaning</span> Services
             </motion.h1>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl"
             >
                <p>
                  Sewage smells in your home, drains backing up in more than one room, or strange gurgling from your toilet are all red flags that your main sewer line needs attention right away.
                </p>
                <p>
                  When that happens, you do not just need basic drain cleaning; you need professional sewer line cleaning and, in many cases, main drain repair from specialists who know how to diagnose and fix underground problems safely and fast. 
                </p>
                <p className="text-primary font-bold">
                   DrainCleaningNearMe connects homeowners across the United States with licensed local professionals who provide sewer line cleaning, sewer line repair near you and emergency drain repair services 24/7.
                </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
             >
               <a
                 href={mainTelLink}
                 className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all group"
               >
                 <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                 Call Now – 24/7
               </a>
               <a
                 href={mainTelLink}
                 className="flex items-center justify-center gap-3 px-10 py-5 bg-card border-2 border-primary/20 text-text rounded-2xl font-bold text-xl hover:border-primary hover:bg-primary/5 transition-all"
               >
                 <ShieldAlert size={24} className="text-primary" />
                 Get Sewer Help
               </a>
             </motion.div>

             {/* Trust Bar */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 px-8 py-4 bg-card/50 border border-border rounded-2xl shadow-sm"
             >
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-text/80">4.8/5 Rating</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-border md:block hidden" />
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-primary" />
                  <span className="text-sm font-bold text-text/80">Licensed Experts</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-border md:block hidden" />
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm font-bold text-text/80">Fast Local Dispatch</span>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 UNDERSTANDING SEWER LINE PROBLEMS */}
      <section className="py-24 bg-bg border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-text">
                  Understanding <br />
                  <span className="text-primary italic">Sewer Line</span> Problems
                </h2>
                
                <div className="space-y-6">
                   <h3 className="text-2xl font-black text-text/80 uppercase tracking-tighter">Your Home's Lifeblood</h3>
                   <p className="text-lg text-text/70 leading-relaxed max-w-xl">
                      Your home’s main sewer line carries wastewater from every fixture; kitchen, bathroom, laundry; out to the city sewer or septic system.
                   </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm">
                   <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6">Key Symptoms of System Failure</h3>
                   <ul className="space-y-4">
                      {[
                        "Multiple fixtures backing up at once",
                        "Toilets gurgling or bubbles rising",
                        "Sewage smells or water backing into drains"
                      ].map((symptom, i) => (
                        <li key={i} className="flex items-start gap-4 text-text font-bold text-sm uppercase tracking-widest leading-relaxed">
                           <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5" /> {symptom}
                        </li>
                      ))}
                   </ul>
                   <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-text/40 text-xs font-black uppercase tracking-widest">
                      <Zap size={14} className="text-primary" /> Indicates main line issue (not just one drain)
                   </div>
                </div>
             </div>
             
             <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] bg-card border border-border overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                   <div className="w-24 h-24 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-10 ring-8 ring-primary/5">
                      <Search size={48} />
                   </div>
                   <h4 className="text-2xl font-black text-text mb-4 uppercase tracking-tighter">Diagnostic Visual</h4>
                   <p className="text-text/50 font-medium italic text-sm">Professional camera inspection to visualize tree roots, cracks, and deep blockages [Placeholder Image]</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 COMMON CAUSES (CARD GRID) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-text uppercase leading-none pr-12">
             Common Causes of Sewer Line Issues
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Tree Root Intrusion", icon: Waves, desc: "Roots naturally seek moisture and grow into small leaks or cracks." },
                { title: "Grease & Debris", icon: Droplets, desc: "Solidified kitchen fats that narrow the pipe diameter over time." },
                { title: "Flushable Wipes", icon: AlertTriangle, desc: "A leading cause of massive system blockages across the USA." },
                { title: "Aging Pipes", icon: Wrench, desc: "Cracks, widespread corrosion, or total system collapse." },
                { title: "Soil Movement", icon: Search, desc: "Pipe misalignment or breaks caused by earth shifting." }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-8 rounded-3xl text-center group transition-all hover:shadow-xl hover:-translate-y-2"
                >
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <card.icon size={28} />
                   </div>
                   <h4 className="text-[15px] font-black text-text mb-3 leading-tight uppercase tracking-widest leading-none">{card.title}</h4>
                   <p className="text-text/60 text-xs font-medium leading-relaxed uppercase tracking-wider">{card.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WARNING SIGNS (IMPORTANT) */}
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4">
           <div className="rounded-[3rem] bg-primary p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                 <ShieldAlert size={200} />
              </div>
              <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter text-center uppercase leading-none">
                   Warning Signs You Need Sewer Help
                 </h2>
                 <div className="grid sm:grid-cols-2 gap-8 text-lg font-bold">
                    {[
                      "Multiple drains clogging",
                      "Strange gurgling sounds",
                      "Pervasive sewage odors",
                      "Wastewater backing up",
                      "Soggy yard patches"
                    ].map((sign, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-sm">
                         <Zap size={20} className="text-white shrink-0" /> {sign}
                      </div>
                    ))}
                 </div>
                 <div className="mt-16 text-center">
                    <a href={mainTelLink} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-black text-xl hover:scale-105 transition-transform uppercase tracking-tighter shadow-xl">
                       Call Immediately
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 🔹 SERVICES SECTION (CATEGORIZED) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container">
           <div className="text-center mb-20 text-center">
              <h2 className="text-3xl md:text-6xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">Our Sewer & Drain Services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                   title: "Sewer Line Cleaning",
                   icon: Waves,
                   features: ["Mechanical snaking", "High-pressure hydro jetting", "Full system restoration"]
                },
                {
                   title: "Main Drain Repair",
                   icon: Drill,
                   features: ["Spot pipe repairs", "Trenchless repair (CIPP)", "Modern pipe bursting"]
                },
                {
                   title: "Diagnostics & Inspection",
                   icon: Search,
                   features: ["Digital camera inspection", "Deep root intrusion detection", "Pipe condition analysis"]
                }
              ].map((service, i) => (
                <div key={i} className="bg-card border border-border p-12 rounded-[2.5rem] flex flex-col items-center text-center group hover:border-primary/50 transition-all shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors">
                     <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-text mb-8 tracking-tighter uppercase leading-none">{service.title}</h3>
                  <ul className="space-y-4 w-full">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center justify-center gap-3 text-text/70 font-bold text-xs uppercase tracking-[0.1em] border-t border-border/50 pt-4 first:border-0 first:pt-0">
                         <CheckCircle2 size={14} className="text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY IMMEDIATE ACTION */}
      <section className="py-24 bg-bg">
        <div className="container-narrow px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-6 tracking-tighter uppercase leading-[0.8]">
                Why Immediate Action Is Critical
              </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { t: "Property Damage", d: "Raw sewage can ruin flooring, walls, and personal items in minutes." },
                { t: "Health Risks", d: "Bacteria and pathogens in sewage are severe biological hazards." },
                { t: "Structural Integrity", d: "Leaking sewer lines can wash away foundation soil over time." },
                { t: "Higher Costs", d: "Early interventions (snaking/jetting) prevent total pipe collapses." }
              ].map((risk, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-card border border-border group hover:bg-red-600/5 transition-all">
                   <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <AlertTriangle size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-text mb-2 uppercase tracking-tighter leading-none">{risk.t}</h3>
                      <p className="text-text/60 font-medium text-sm leading-relaxed">{risk.d}</p>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center font-black text-xl uppercase tracking-tighter text-primary">
              👉 Early action saves money and protects your family health.
           </div>
        </div>
      </section>

      {/* 🔹 PROCESS (AIRTASKER FLOW) */}
      <section className="py-24 bg-card/10 border-y border-border">
        <div className="container">
           <div className="text-center mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">Our Simple 4-Step Process</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-[2.75rem] left-[5%] right-[5%] h-0.5 bg-border -z-10" />

             {[
               { s: "1", t: "Call Anytime", d: "24/7 dedicated sewer support standing by nationwide." },
               { s: "2", t: "Describe Issue", d: "Explain symptoms for optimized technician matching." },
               { s: "3", t: "Local Match", d: "Connect with the most qualified main line expert nearby." },
               { s: "4", t: "Fix & Verify", d: "Camera diagnostic followed by cleaning or expert repair." }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-primary/20 mb-8 border-4 border-bg relative transition-transform hover:scale-110"
                  >
                     {step.s}
                  </motion.div>
                  <h3 className="text-lg font-bold text-text mb-3 leading-tight tracking-tight px-2 uppercase">{step.t}</h3>
                  <p className="text-sm text-text/60 font-medium leading-relaxed">{step.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 🔹 RELATED SERVICES & INTERNAL LINKS */}
      <section className="py-24 bg-bg border-b border-border">
        <div className="container-narrow px-4 text-center">
           <h2 className="text-2xl font-black text-text mb-12 tracking-tighter uppercase leading-none">Complete System Restoration</h2>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { t: "Kitchen Drain Hub", href: "/kitchen-sink-drain-cleaning-unclogging-services" },
                { t: "Bathroom Repair Hub", href: "/bathroom-drain-cleaning-unclogging-services" },
                { t: "Emergency Priority", href: "/emergency-drain-cleaning-services" }
              ].map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  className="p-8 rounded-3xl bg-card border border-border group hover:border-primary/50 transition-all flex flex-col items-center gap-4 text-center"
                >
                   <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight size={20} />
                   </div>
                   <span className="text-xs font-black text-text uppercase tracking-widest leading-none">{link.t}</span>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 VISUAL / UX SECTION (PLACEHOLDERS) */}
      <section className="py-24 bg-card/10 overflow-hidden text-center text-center">
        <div className="container">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter uppercase leading-[0.8] pr-12">
             Major Repair Experts, <span className="text-primary italic underline decoration-primary/20 italic">Visualized</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Sewer Cleanout Hero UI", "System Layout Diagram", "Pipe Before/After Grid", "Process Iconography UI"
              ].map((item, i) => (
                <div key={i} className="aspect-video bg-bg border border-border rounded-3xl flex items-center justify-center text-text/30 font-bold uppercase tracking-widest text-xs italic shadow-inner px-6 text-center">
                   {item} [Placeholder]
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 FAQ SECTION */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">Major Drain FAQs</h2>
              <p className="text-text/60 text-lg font-medium">Questions about Sewer Line Cleaning & Main Drain Repair.</p>
           </div>
           <FAQAccordion />
        </div>
      </section>

      {/* 🔹 FINAL CTA (HIGH CONVERSION 🚀) */}
      <section className="py-24 px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-narrow rounded-[3.5rem] bg-card border border-border p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-text mb-10 leading-[0.9]">
                Restore Your Sewer <br className="hidden md:block" />
                Flow <span className="text-primary italic underline decoration-primary/20 italic">Reliably</span> Today!
              </h2>
              <p className="text-xl md:text-2xl text-text/80 font-medium mb-16 leading-relaxed max-w-2xl mx-auto italic">
                Sewer problems are not just inconvenient; they can quickly become hazardous and expensive if ignored. Act now to protect your home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a
                    href={mainTelLink}
                    className="flex items-center justify-center gap-4 px-12 py-7 bg-primary text-white rounded-3xl font-black text-2xl shadow-2xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all group"
                  >
                    <Phone size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                    Call Now – 24/7
                  </a>
                  <a
                    href={mainTelLink}
                    className="flex items-center justify-center gap-4 px-12 py-7 bg-transparent border-3 border-border text-text rounded-3xl font-black text-2xl hover:bg-text/5 transition-all outline-none text-center"
                  >
                    Request Emergency Service
                  </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-10 text-[xs] font-bold text-text/20 uppercase tracking-[0.3em]">
                <span>24/7 Nationwide Help</span>
                <span>Licensed Plumbers</span>
                <span>Fixed Price Diagnostics</span>
              </div>
           </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
