"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Phone, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Utensils, 
  Waves, 
  Search, 
  Wrench,
  AlertTriangle,
  Plus,
  Minus,
  CheckCircle2,
  Droplets,
  Heart
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "How fast can you unclog my kitchen sink?",
    answer: "Same-day service, often within 1–2 hours for most emergency calls in localized areas."
  },
  {
    question: "Is hydrojetting safe for kitchen pipes?",
    answer: "Yes, when done professionally. We adjust the pressure based on your pipe material and age to ensure safe clearing without damage."
  },
  {
    question: "What is the best drain cleaner for grease?",
    answer: "Professional cleaning (augering or hydrojetting) is much more effective than store-bought chemicals, which often only provide a temporary fix."
  },
  {
    question: "Can a blocked sink cause other issues?",
    answer: "Absolutely. If ignored, a slow drain can turn into a full blockage, sewage backup, and foul odors that affect your entire home."
  },
  {
    question: "Why choose DrainCleaningNearMe?",
    answer: "We combine nationwide reliability with vetted local experts, ensuring fast response times and professional results 24/7."
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

export function KitchenSinkClient() {
  const mainTelLink = "tel:+17247506935";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      {/* 🔹 HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
          <div className="absolute top-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-8"
             >
               <Zap size={14} /> Professional Service Nationwide
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-text leading-[1.1]"
             >
                Professional Kitchen Sink <br className="hidden md:block" />
                <span className="text-primary italic border-b-4 border-primary/20">Drain Cleaning</span> Services
             </motion.h1>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl"
             >
                <p>
                  Is your kitchen sink backing up or refuse to drain at all? If you are searching for “kitchen sink drain cleaning” or “kitchen drain cleaner near me”, you are in the right place.
                </p>
                <p>
                  Slow drains, clogged sinks and kitchen drain pipe clogged situations are more than just inconvenience; they can lead to foul odors, water damage and even full sewer backups.
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
                 <Zap size={24} className="text-primary" />
                 Get Emergency Help
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

      {/* 🔹 INTRO / VALUE SECTION */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8 text-xl md:text-2xl text-text/80 font-medium leading-relaxed">
            <p>
               At <span className="text-primary font-bold">DrainCleaningNearMe</span>, we connect you with licensed local drain cleaning experts across the USA for 24/7 clogged sink repair and professional kitchen drain cleaning services.
            </p>
            <p>
               Whether you need to unclog kitchen sink pipes in a rush or prevent future kitchen sink blockage cleaner issues, we are just a call away.
            </p>
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-text italic">
               If you are stuck with a kitchen sink drain stopped or a kitchen sink drain clog remover emergency, call now for immediate assistance and get your sink flowing again today.
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 WHY CLOGS HAPPEN */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter text-text">
             Why Kitchen Sink Drain Clogs Happen <br />
             <span className="text-text/60">(And Why They’re Serious)</span>
           </h2>
           <p className="max-w-2xl mx-auto text-lg text-text/60 font-medium mb-16">
             Before you go searching for a “best drain cleaner for kitchen sink” off the store shelf, it helps to understand what’s really happening inside your pipes.
           </p>

           <h3 className="text-2xl font-bold text-primary mb-10 uppercase tracking-widest">Everyday Causes of Kitchen Sink Drain Clogs</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Grease and cooking oil buildup", icon: Droplets, desc: "Liquid fats cool inside the pipe and solidify into thick, rubbery clogs that DIY plungers and chemical cleaners rarely remove." },
                { title: "Food particles and debris", icon: Utensils, desc: "Small scraps, coffee grounds, eggshells and rice expand in water and stick to grease, creating stubborn blockages." },
                { title: "Soap scum and hard water minerals", icon: Waves, desc: "Dish soap and hard water minerals coat pipe walls, narrowing the opening and trapping debris." }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-10 rounded-3xl text-center group transition-all hover:shadow-xl hover:-translate-y-2"
                >
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <card.icon size={32} />
                   </div>
                   <h4 className="text-xl font-bold text-text mb-4 leading-tight">{card.title}</h4>
                   <p className="text-text/70 font-medium leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="max-w-3xl mx-auto p-6 rounded-2xl border-2 border-dashed border-primary/20 text-primary font-bold text-lg md:text-xl">
              👉 If ignored, these clogs can turn into a kitchen sink drain stopped or even sewage backup.
           </div>
        </div>
      </section>

      {/* 🔹 SERVICES SECTION */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter">
                Our Kitchen Sink Drain Cleaning Services
              </h2>
              <p className="text-text/60 text-lg font-medium">(What You Get)</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Kitchen Sink Drain Cleaning & Clogged Sink Repair */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-[2.5rem] p-10 md:p-14 shadow-sm relative overflow-hidden group"
              >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <Wrench size={120} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-text mb-8 tracking-tighter uppercase leading-tight pr-12">
                     Kitchen Sink Drain Cleaning <br className="hidden md:block" /> & Clogged Sink Repair
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                    {[
                      "Clogged sink repair", "Motorized augers & snakes", "P-trap cleaning", "Unclog kitchen sink", "Hydrojetting", "Kitchen drain repair", "Camera inspection"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-text/80 font-bold text-sm uppercase tracking-widest">
                        <CheckCircle2 size={16} className="text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-primary font-bold text-sm tracking-wide text-center uppercase">
                    👉 After service: clean, fast, reliable drainage
                  </div>
              </motion.div>

              {/* Types of Problems We Handle */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-bg border border-border rounded-[2.5rem] p-10 md:p-14 shadow-sm relative group overflow-hidden"
              >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <Search size={120} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-text mb-8 tracking-tighter uppercase pr-12">Types of Problems We Handle</h3>
                  <div className="space-y-6">
                    {[
                      { t: "Kitchen sink drain clog remover cases", d: "Hard blockages that standard tools can't touch." },
                      { t: "Clogged sink (water rises slowly)", d: "Slow drainage causing debris and odor buildup." },
                      { t: "Drain blocked after disposal use", d: "Fixing disposal mishaps and ground food clogs." },
                      { t: "Clogged with grease", d: "Removal of solidified fats and oils deep in pipes." },
                      { t: "Slow, gurgling drains", d: "Air pockets caused by partial blockages." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <div>
                          <p className="font-bold text-text uppercase tracking-widest text-xs mb-1">{item.t}</p>
                          <p className="text-xs font-medium text-text/60 leading-relaxed uppercase tracking-wider">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </motion.div>
           </div>

           {/* DIY vs Pro */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="container-narrow rounded-[3rem] bg-card border border-border p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
           >
              <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <h4 className="text-2xl md:text-4xl font-black text-text mb-12 tracking-tighter">
                   DIY vs. <span className="text-primary italic underline decoration-primary/20 italic">Professional</span> Drain Cleaning
                </h4>
                <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                   {[
                     { t: "Chemical Damage", d: "Harsh chemicals can damage older pipes or gaskets." },
                     { t: "Deep Clogs", d: "DIY methods rarely reach blockages deep in the system." },
                     { t: "Pushing It Further", d: "Amateur plunging can push clogs deeper and compact them." }
                   ].map((pill, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-bg border border-border group hover:border-primary/30 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
                          <AlertTriangle size={20} />
                        </div>
                        <p className="font-bold text-text uppercase tracking-widest text-xs mb-2">{pill.t}</p>
                        <p className="text-xs font-medium text-text/60 leading-relaxed uppercase tracking-wider">{pill.d}</p>
                     </div>
                   ))}
                </div>
                <div className="p-6 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20 font-bold text-lg md:text-xl uppercase tracking-widest text-center">
                   👉 Professional services are safer and more effective
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 🔹 PROCESS (AIRTASKER FLOW) */}
      <section className="py-24 bg-bg border-y border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter">
                How Our Kitchen Sink Drain Cleaning Process Works
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-[2.75rem] left-[5%] right-[5%] h-0.5 bg-border -z-10" />

             {[
               { s: "1", t: "Call or Book Online", d: "Call anytime for immediate dispatch and 24/7 support." },
               { s: "2", t: "Fast Dispatch", d: "Local technician matching ensures less waiting time." },
               { s: "3", t: "Diagnosis", d: "Check P-trap and camera inspection if needed." },
               { s: "4", t: "Clearing It", d: "Drain snake, auger, or hydrojetting for deep clogs." },
               { s: "5", t: "Prevention Tips", d: "Clean up and provide professional prevention tips." }
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
                  <h3 className="text-lg font-bold text-text mb-3 leading-tight tracking-tight px-2">{step.t}</h3>
                  <p className="text-sm text-text/60 font-medium leading-relaxed">{step.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE US */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter">
                Why Choose Professional Services
              </h2>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[2.5rem] bg-card border border-border shadow-sm group hover:border-primary/30 transition-all"
              >
                 <h3 className="text-2xl font-black text-text mb-10 tracking-tight uppercase flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                       <Zap />
                    </div>
                    Speed, Safety & Long-Term Results
                 </h3>
                 <ul className="space-y-6">
                    {[
                      { t: "24/7 Immediate Response", d: "Emergency clogged sink repair any time of day or night." },
                      { t: "Faster, Permanent Relief", d: "Total removal of debris instead of partial clearing." },
                      { t: "Pipe-Safe Methods", d: "We protect your infrastructure from corrosive cleaners." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="mt-1.5 shrink-0"><ArrowRight size={18} className="text-primary" /></div>
                         <div>
                            <p className="font-bold text-text uppercase tracking-widest text-xs mb-1">{item.t}</p>
                            <p className="text-sm font-medium text-text/70">{item.d}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[2.5rem] bg-bg border border-border shadow-sm group hover:border-accent/30 transition-all"
              >
                 <h3 className="text-2xl font-black text-text mb-10 tracking-tight uppercase flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                       <ShieldCheck />
                    </div>
                    Nationwide with Local Expertise
                 </h3>
                 <ul className="space-y-6">
                    {[
                      { t: "Licensed Local Experts", d: "Pros who know local building codes and pipe standards." },
                      { t: "Rapid Response Times", d: "Nationwide network means a local expert is always close by." },
                      { t: "Verified Professionals", d: "Fully insured and vetted for your peace of mind." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="mt-1.5 shrink-0"><ArrowRight size={18} className="text-accent" /></div>
                         <div>
                            <p className="font-bold text-text uppercase tracking-widest text-xs mb-1">{item.t}</p>
                            <p className="text-sm font-medium text-text/70">{item.d}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 🔹 UX / VISUAL SECTION */}
      <section className="py-24 bg-card/30 border-y border-border relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
           <Heart size={300} className="text-primary" />
        </div>
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter">
             Expert Service, <span className="text-primary italic underline decoration-primary/20 italic">Visualized</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Hero Image: technician at sink", "Before/After Slider", "Process Infographic", "Helpful Tips Video"
              ].map((item, i) => (
                <div key={i} className="aspect-video bg-bg border border-border rounded-3xl flex items-center justify-center text-text/30 font-bold uppercase tracking-widest text-xs italic shadow-inner px-6 text-center">
                   {item} [Placeholder]
                </div>
              ))}
           </div>
           <p className="text-text/50 font-medium italic text-sm">Professional visuals ensuring trust and transparency throughout your journey.</p>
        </div>
      </section>

      {/* 🔹 FAQ SECTION */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">FAQs</h2>
              <p className="text-text/60 text-lg font-medium">Common Kitchen Drain Questions Answered</p>
           </div>
           <FAQAccordion />
        </div>
      </section>

      {/* 🔹 PREVENTION TIPS */}
      <section className="py-24 bg-primary/5 border-t border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-12 tracking-tighter">
                Keeping Your Kitchen Sink Drain Clear
              </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Never pour grease", d: "Cooling fats solidify inside pipes, causing major blockages." },
                { t: "Use a sink strainer", d: "Catch food scraps, eggshells, and debris daily." },
                { t: "Hot water weekly", d: "Flush pipes with hot water for 60 seconds to melt low levels of buildup." },
                { t: "Avoid chemicals", d: "Store-bought cleaners are often acidic and can eat through older pipes." }
              ].map((tip, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-card border border-border shadow-sm group hover:border-primary/50 transition-all text-center"
                >
                   <div className="text-primary font-black text-lg mb-4 uppercase tracking-tighter italic">Tip #{i+1}</div>
                   <h4 className="text-lg font-bold text-text mb-2 leading-tight uppercase tracking-widest leading-none">{tip.t}</h4>
                   <p className="text-sm font-medium text-text/60 leading-relaxed uppercase tracking-wider">{tip.d}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 FINAL CTA */}
      <section className="py-24 px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-narrow rounded-[3.5rem] bg-card border border-border p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-text mb-10 leading-[0.9]">
                Get Your Sink Fixed Today. <br className="hidden md:block" />
                <span className="text-primary italic underline decoration-primary/20 italic">Call Now!</span>
              </h2>
              <p className="text-xl md:text-2xl text-text/80 font-medium mb-16 leading-relaxed max-w-2xl mx-auto italic">
                If your kitchen sink drain stopped or you are constantly trying to unclog kitchen sink, it is time to call professional drain cleaners.
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
                    Request Callback
                  </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-10 text-[xs] font-bold text-text/20 uppercase tracking-[0.3em]">
                <span>24/7 Support</span>
                <span>Licensed Pros</span>
                <span>Nationwide Dispatch</span>
              </div>
           </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
