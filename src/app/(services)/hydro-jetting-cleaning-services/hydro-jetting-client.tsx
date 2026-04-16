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
  Info,
  ShieldAlert
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "Is hydro jetting safe for my pipes?",
    answer: "Yes, when performed by licensed professionals who inspect the pipes beforehand. We adjust the PSI specifically for your pipe's material and condition to ensure a safe, restorative cleaning."
  },
  {
    question: "What is the main difference between hydro jetting and snaking?",
    answer: "Snaking dislodges blockages but leaves residue behind. Hydro jetting scours the entire pipe wall clean, removing all grease, sludge, and hair for much longer-lasting results."
  },
  {
    question: "Is hydro jetting always needed for clogs?",
    answer: "Not necessarily. Simple clogs often respond well to professional snaking. Hydro jetting is reserved for recurring issues, heavy grease buildup, or severe main line blockages."
  },
  {
    question: "Can hydro jetting cut through tree roots?",
    answer: "Yes, in many cases. Specialized nozzles and high-pressure water can cut through roots, though severely damaged pipes may still require repair after the cleaning."
  },
  {
    question: "How often should I schedule hydro jetting?",
    answer: "Residential homes usually only need it for serious or recurring clogs. Commercial properties, especially restaurants, should schedule periodic maintenance to prevent grease failures."
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

export function HydroJettingClient() {
  const mainTelLink = "tel:+17247506935";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      {/* 🔹 HERO SECTION (HIGH-CONVERSION) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
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
               <Droplets size={14} /> Advanced Restorative Technology
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-text leading-[1.1]"
             >
                High-Pressure <br className="hidden md:block" />
                <span className="text-primary italic border-b-4 border-primary/20">Hydro Jetting</span> Services
             </motion.h1>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl"
             >
                <p>
                  When regular drain cleaning is no longer enough, hydro jetting services are often the most effective way to clear tough clogs and restore full flow to your plumbing system.
                </p>
                <p>
                  Professional hydro jet drain cleaning uses high-pressure water to scrub the inside of your pipes, remove years of buildup and solve recurring blockages that snaking alone cannot fix.
                </p>
                <p className="text-primary font-bold">
                   At DrainCleaningNearMe, we connect homeowners and businesses across the USA with trusted local experts who provide 24/7 high-pressure drain cleaning, sewer line hydro jetting and hydro jetting kitchen sink services.
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
                 <Waves size={24} className="text-primary" />
                 Get Jetting Help
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

      {/* 🔹 WHAT IS HYDRO JETTING SECTION */}
      <section className="py-24 bg-bg border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter text-text">
                  What Is Hydro Jetting? <br />
                  <span className="text-text/60 italic font-medium text-2xl">(Advanced Technology)</span>
                </h2>
                <p className="text-xl text-text/70 font-medium mb-10 leading-relaxed max-w-xl">
                   Hydro jetting is an advanced hydro jetting cleaning method that uses high-pressure water <strong>(1,500–8,000 PSI)</strong> to remove clogs and clean pipe walls.
                </p>
                
                <h3 className="text-xl font-black text-primary uppercase tracking-widest mb-6 border-l-4 border-primary pl-4">Key Steps in our Process</h3>
                <ul className="space-y-4 mb-10">
                   {[
                     "Inspect pipe condition with diagnostic camera",
                     "Insert specialized hydro jet nozzle into line",
                     "Increase water pressure gradually for safety",
                     "Move nozzle systematically to scrub pipe",
                     "Flush debris completely through the system"
                   ].map((step, i) => (
                     <li key={i} className="flex items-center gap-4 text-text/80 font-bold uppercase tracking-widest text-xs">
                        <CheckCircle2 size={16} className="text-primary" /> {step}
                     </li>
                   ))}
                </ul>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-text/80 font-bold italic text-center text-sm">
                   👉 Cleans entire pipe — not just the clog
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-6 p-4">
                <div className="aspect-[3/4] rounded-[3rem] bg-card border border-border shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 group">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Waves size={32} />
                   </div>
                   <h4 className="text-3xl font-black text-text mb-2 tracking-tighter">8,000</h4>
                   <p className="text-xs font-bold text-text/40 uppercase tracking-[0.2em]">Max PSI</p>
                </div>
                <div className="aspect-[3/4] rounded-[3rem] bg-card border border-border shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 mt-12 group">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Clock size={32} />
                   </div>
                   <h4 className="text-3xl font-black text-text mb-2 tracking-tighter">24 / 7</h4>
                   <p className="text-xs font-bold text-text/40 uppercase tracking-[0.2em]">Availability</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 PROBLEMS IT SOLVES (CARD GRID) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-text uppercase">
             Problems Hydro Jetting Solves
           </h2>
           <p className="text-text/60 font-bold uppercase tracking-widest text-sm mb-16">
              Ideal Situations where Snaking Fails
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Grease & Oil", icon: Droplets, desc: "Solidified kitchen fats that snaking can't remove." },
                { title: "Soap Scum", icon: Waves, desc: "Thick layers of residue inside secondary lines." },
                { title: "Tree Roots", icon: AlertTriangle, desc: "Intrusions that require high-pressure removal." },
                { title: "Mineral Scale", icon: Search, desc: "Hard water buildup that narrows pipe capacity." },
                { title: "Recurring Clogs", icon: Clock, desc: "Persistent issues that suggest deep line residue." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-8 rounded-3xl group transition-all hover:shadow-xl hover:-translate-y-2 text-center"
                >
                   <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                     <item.icon size={24} />
                   </div>
                   <h4 className="text-[15px] font-black text-text mb-3 tracking-tighter uppercase leading-none">{item.title}</h4>
                   <p className="text-text/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-16 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-black uppercase text-xs tracking-[0.2em]">
              <Zap size={14} /> Best solution when snaking fails
           </div>
        </div>
      </section>

      {/* 🔹 WHY HYDRO JETTING IS BEST (BENEFITS) */}
      <section className="py-24">
        <div className="container">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter text-center uppercase leading-[0.8] pr-12">
             Why Hydro Jetting Is Often the Best Solution
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Deep Cleaning", d: "Removes full pipe interior buildup, not just a narrow channel.", i: Waves },
                { t: "Prevents Future Clogs", d: "Eliminating sticky residue means debris can't snag anymore.", i: ShieldCheck },
                { t: "Eco-Friendly", d: "Clean, high-pressure water technology—zero harsh chemicals.", i: Heart },
                { t: "Improves Performance", d: "Restores your system's diameter to original flow capacity.", i: Zap },
                { t: "Handles Severe Blockages", d: "Cuts through grease, sludge, and many root intrusions safely.", i: AlertTriangle }
              ].map((benefit, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-card border border-border shadow-sm group hover:border-primary/30 transition-all flex flex-col items-center text-center">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                      <benefit.i size={28} />
                   </div>
                   <h3 className="text-xl font-black text-text mb-4 tracking-tighter uppercase">{benefit.t}</h3>
                   <p className="text-text/60 font-medium text-sm leading-relaxed">{benefit.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 HYDRO JETTING VS SNAKING (COMPARISON) */}
      <section className="py-24 border-y border-border bg-card/10">
        <div className="container-narrow px-4">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter text-center uppercase leading-[0.8]">
             Hydro Jetting vs Traditional Snaking
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border shadow-2xl">
              <div className="bg-bg p-12 text-center group">
                 <h3 className="text-sm font-black text-text uppercase tracking-[0.3em] mb-8">Snaking</h3>
                 <div className="h-40 flex items-center justify-center mb-8 opacity-20 grayscale group-hover:grayscale-0 transition-all">
                    <Wrench size={80} />
                 </div>
                 <p className="text-text/40 font-bold uppercase tracking-widest text-xs mb-4">The Result</p>
                 <p className="text-lg font-black text-text/80 tracking-tight">Opens a narrow path, but leaves sticky residue behind.</p>
              </div>
              <div className="bg-card p-12 text-center group">
                 <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-8">Hydro Jetting</h3>
                 <div className="h-40 flex items-center justify-center mb-8 text-primary transition-all group-hover:scale-110">
                    <Waves size={100} />
                 </div>
                 <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">The Result</p>
                 <p className="text-lg font-black text-text tracking-tight">Fully scrubs and restores the entire pipe interior.</p>
              </div>
           </div>
           
           <div className="mt-12 p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center font-black text-2xl uppercase tracking-tighter text-primary">
              👉 Hydro = The Long-Term Permanent solution
           </div>
        </div>
      </section>

      {/* 🔹 SERVICES SECTION (CATEGORIZED) */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">Our Hydro Jetting Services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Kitchen Sinks & Lines", features: ["Remove grease buildup", "Restore full flow", "Prevent future clogs"] },
                { t: "Bathroom & Secondary Lines", features: ["Remove soap residue", "Clear hair blockages", "Improve drainage speed"] },
                { t: "Main Sewer Line Hydro Jetting", features: ["Clear deep roots", "Remove years of buildup", "Paired with camera inspection"] },
                { t: "Commercial Hydro Jetting", features: ["Restaurants & Grease traps", "Hotels & Multiplexes", "Industrial scale drains"] },
                { t: "Septic & Exterior Lines", features: ["Storm drain clearing", "Exterior pipeline flushing", "Septic system health"] }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-3xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all">
                   <h3 className="text-xl font-black text-text mb-6 tracking-tight uppercase leading-tight border-b border-border pb-4">{service.t}</h3>
                   <ul className="space-y-4">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-text/60 font-bold text-xs uppercase tracking-widest leading-relaxed">
                           <CheckCircle2 size={16} className="text-primary shrink-0" /> {f}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE US (TRUST PILLARS) */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter">
             Why Choose DrainCleaningNearMe?
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { t: "24/7 Availability", icon: Clock },
                { t: "Fast Local Dispatch", icon: Smartphone },
                { t: "Licensed Experts", icon: ShieldCheck },
                { t: "Advanced Equipment", icon: Zap },
                { t: "Safe PSI Control", icon: ShieldAlert }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                   <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/5">
                      <item.icon size={28} />
                   </div>
                   <h3 className="text-sm font-black text-text uppercase tracking-widest leading-tight px-4">{item.t}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHEN YOU NEED HYDRO JETTING */}
      <section className="py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 relative">
           <div className="absolute top-0 right-0 p-12 text-primary opacity-5">
              <Zap size={200} />
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-text mb-12 tracking-tighter text-center uppercase leading-[0.8] pr-12">
             When Do You Need Hydro Jetting?
           </h2>
           <div className="space-y-4">
              {[
                "Persistent/Recurring clogs in the same fixture",
                "Slow drainage across multiple fixture points",
                "Foul odors suggesting deep line sewage backup",
                "High-grease output (Kitchen & Commercial)",
                "Standard snaking/auger attempts failed"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all">
                   <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} />
                   </div>
                   <span className="text-lg font-black text-text tracking-tight group-hover:text-primary transition-colors italic">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 PROCESS (AIRTASKER FLOW) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">4-Step Hydro Jetting Process</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-[2.75rem] left-[5%] right-[5%] h-0.5 bg-border -z-10" />

             {[
               { s: "1", t: "Call Anytime", d: "24/7 dedicated support standing by to help." },
               { s: "2", t: "Describe Issue", d: "Provide site details for accurate technician matching." },
               { s: "3", t: "Inspection", d: "Camera diagnostic to confirm pipe safety & health." },
               { s: "4", t: "Hydro Jetting", d: "Professional jetting followed by final verification." }
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

      {/* 🔹 BEST PRACTICES / TIPS SECTION */}
      <section className="py-24 bg-bg border-b border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text tracking-tighter">
                Actionable Hydro Jetting Tips
              </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { t: "Use for Maintenance", d: "Preventive jetting stops clogs before they start.", i: Clock },
                { t: "Pair with Camera", d: "Always verify pipe condition before apply pressure.", i: Search },
                { t: "Avoid Chemicals", d: "Hydro jetting removes the need for corrosive cleaners.", i: Droplets },
                { t: "Schedule Periodically", d: "Annual cleaning is ideal for commercial sewer health.", i: Zap }
              ].map((tip, i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-card border border-border shadow-sm group hover:border-primary/50 transition-all text-center">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <tip.i size={24} />
                   </div>
                   <h4 className="text-[14px] font-black text-text mb-3 leading-tight uppercase tracking-widest">{tip.t}</h4>
                   <p className="text-xs font-medium text-text/60 leading-relaxed uppercase tracking-wider">{tip.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 VISUAL / UX SECTION (PLACEHOLDERS) */}
      <section className="py-24 bg-card/10 overflow-hidden text-center">
        <div className="container">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter uppercase leading-[0.8] pr-12">
             Technical Precision, <span className="text-primary italic underline decoration-primary/20 italic">Visualized</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Hero Image: Jetting Pipe", "Process Infographic UI", "Pipe Before/After Slider", "Video: Tech Tutorial"
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
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">FAQs</h2>
              <p className="text-text/60 text-lg font-medium">Everything you need to know about professional hydro jetting.</p>
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
                Get Fast <span className="text-primary italic underline decoration-primary/20 italic">Hydro Jetting</span> <br className="hidden md:block" />
                Help Near You Today
              </h2>
              <p className="text-xl md:text-2xl text-text/80 font-medium mb-16 leading-relaxed max-w-2xl mx-auto italic">
                Tired of recurring clogs and slow drains? Upgrade to professional hydro jetting and restore your plumbing to like-new condition.
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
                    className="flex items-center justify-center gap-4 px-12 py-7 bg-transparent border-3 border-border text-text rounded-3xl font-black text-2xl hover:bg-text/5 transition-all outline-none"
                  >
                    Request Service
                  </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-10 text-[xs] font-bold text-text/20 uppercase tracking-[0.3em]">
                <span>Nationwide Dispatch</span>
                <span>Licensed Plumbers</span>
                <span>Fixed Price Quotes</span>
              </div>
           </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
