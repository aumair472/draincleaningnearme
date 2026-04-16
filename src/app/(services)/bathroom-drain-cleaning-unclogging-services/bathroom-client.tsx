"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Phone, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Bath, 
  Waves, 
  Search, 
  Wrench,
  AlertTriangle,
  Plus,
  Minus,
  CheckCircle2,
  Droplets,
  Heart,
  Smartphone
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "How quickly can you arrive?",
    answer: "We offer same-day service and often arrive within 1–2 hours for emergency bathroom drain situations."
  },
  {
    question: "Is hydrojetting safe for my bathroom pipes?",
    answer: "Yes, when performed by licensed professionals. We adjust the water pressure specifically for the size and material of your bathroom drain lines."
  },
  {
    question: "What is the safest way to unclog a toilet?",
    answer: "Using a professional-grade toilet auger is the safest method. We recommend avoiding harsh chemicals as they can damage both the porcelain and the pipes."
  },
  {
    question: "How can I prevent bathroom clogs?",
    answer: "Use high-quality drain covers to catch hair, avoid flushing anything other than toilet paper (no wipes), and occasionally flush with hot water."
  },
  {
    question: "Why do my toilet and shower clog at the same time?",
    answer: "This usually indicates a blockage in the shared branch line or the main sewer line which requires professional diagnosis and clearing."
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

export function BathroomClient() {
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
                Professional Bathroom <br className="hidden md:block" />
                <span className="text-primary italic border-b-4 border-primary/20">Drain Cleaning</span> & Unclogging
             </motion.h1>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl"
             >
                <p>
                  Is your shower drain clogged, tub backing up or bathroom sink barely draining? When you search for “bathroom drain cleaning near me” or “emergency drain service near me,” you are looking for fast, reliable help; especially when a clogged bathroom drain turns your morning routine into a mess.
                </p>
                <p>
                  At DrainCleaningNearMe, we connect you with licensed local plumbers who provide professional bathroom drain cleaning services across the United States.
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
               From <span className="text-primary font-bold">unclog bathroom sink</span> issues to toilet blockage cleaner near me emergencies, our team delivers 24/7 emergency drain cleaning near me so you can get your bathroom back to normal.
            </p>
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-text italic">
               If your toilet and shower clogged or your bathtub drain clogged, call now for fast help and get your bathroom drains flowing again today.
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 COMMON PROBLEMS */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter text-text">
             The Most Common Bathroom Drain Problems <br />
             <span className="text-text/60">(And Why They Happen)</span>
           </h2>
           <p className="max-w-2xl mx-auto text-lg text-text/60 font-medium mb-16 leading-relaxed">
             Bathroom drains are one of the most frequently clogged systems in U.S. homes. The causes are often invisible inside the pipes but impact your daily life immediately.
           </p>

           <h3 className="text-2xl font-bold text-primary mb-10 uppercase tracking-widest">Top Causes of Clogged Bathroom Drains</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
              {[
                { title: "Hair buildup: The #1 culprit", icon: Bath, desc: "Hair mixes with soap and debris to create dense, sticky clogs." },
                { title: "Soap scum and residue", icon: Droplets, desc: "Creates a thick layer inside pipes over time." },
                { title: "Toothpaste & Care Products", icon: Waves, desc: "Dense pastes build up in traps and narrow the flow." },
                { title: "Hygiene products and wipes", icon: AlertTriangle, desc: "The leading cause of severe toilet blockages." },
                { title: "Hard water and minerals", icon: Search, desc: "Reduces pipe flow through calcification." }
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
                   <h4 className="text-[15px] font-black text-text mb-3 leading-tight uppercase tracking-tighter">{card.title}</h4>
                   <p className="text-text/60 text-sm font-medium leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 SERVICES SECTION */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter">
                Our Bathroom Drain Cleaning Services
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                   title: "Sink & Vanity Drain Cleaning",
                   features: ["Motorized drain snaking", "Trap cleaning", "Safe unclogging"],
                   icon: Search
                },
                {
                   title: "Shower & Tub Drain Cleaning",
                   features: ["Unclog shower drain", "Hydrojetting", "Trap inspection"],
                   icon: Bath
                },
                {
                   title: "Toilet Drain Cleaning",
                   features: ["Toilet augers", "Safe unclogging", "Recurring issue diagnosis"],
                   icon: Wrench
                },
                {
                   title: "Advanced Techniques",
                   features: ["Professional drain snaking", "Hydrojetting", "Drain camera inspection"],
                   icon: Zap
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-primary/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                     <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-6 tracking-tight">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-text/70 font-bold text-sm uppercase tracking-widest">
                           <CheckCircle2 size={16} className="text-primary" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE US */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter">
             Why Choose DrainCleaningNearMe for Bathroom Drains?
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "24/7 Emergency Response", d: "Same-day or 1–2 hour response when emergencies strike." },
                { t: "Licensed Local Pros", d: "Highly experienced, licensed & insured technicians in your area." },
                { t: "Safe Methods", d: "No harsh chemicals; safe tools to protect your pipes & fixtures." },
                { t: "Nationwide Coverage", d: "A consistent national network with localized expert matching." }
              ].map((pill, i) => (
                <div key={i} className="space-y-4 px-4">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      {i === 0 ? <Clock /> : i === 1 ? <ShieldCheck /> : i === 2 ? <Droplets /> : <Smartphone />}
                   </div>
                   <h3 className="text-xl font-bold text-text leading-tight">{pill.t}</h3>
                   <p className="text-text/60 text-sm font-medium leading-relaxed">{pill.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 PROCESS (AIRTASKER FLOW) */}
      <section className="py-24 bg-bg">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter">
                Our Simple Bathroom Drain Cleaning Process
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-[2.75rem] left-[5%] right-[5%] h-0.5 bg-border -z-10" />

             {[
               { s: "1", t: "Call Anytime", d: "24/7 support standing by to help with any backup." },
               { s: "2", t: "Fast Dispatch", d: "Instant local matching for the quickest arrivals." },
               { s: "3", t: "Diagnosis", d: "Professional inspection, including cameras if needed." },
               { s: "4", t: "Clearing it", d: "Using snaking, hydrojetting, or specialized toilet tools." },
               { s: "5", t: "Clean Finish", d: "Thorough cleanup and helpful prevention tips." }
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

      {/* 🔹 UX / VISUAL SECTION */}
      <section className="py-24 bg-card/30 border-y border-border relative overflow-hidden text-center text-center">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
           <Heart size={300} className="text-primary" />
        </div>
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter">
             Expert Service, <span className="text-primary italic underline decoration-primary/20 italic">Visualized</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Hero Image: bathroom technician", "Before/After Slider", "Process Infographic", "Toilet Unclogging Demo"
              ].map((item, i) => (
                <div key={i} className="aspect-video bg-bg border border-border rounded-3xl flex items-center justify-center text-text/30 font-bold uppercase tracking-widest text-xs italic shadow-inner px-6 text-center">
                   {item} [Placeholder]
                </div>
              ))}
           </div>
           <p className="text-text/50 font-medium italic text-sm">Providing clear, professional visuals to ensure transparency and trust.</p>
        </div>
      </section>

      {/* 🔹 FAQ SECTION */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">FAQs</h2>
              <p className="text-text/60 text-lg font-medium">Common Bathroom Drain Questions</p>
           </div>
           <FAQAccordion />
        </div>
      </section>

      {/* 🔹 PREVENTION TIPS */}
      <section className="py-24 bg-primary/5 border-t border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-12 tracking-tighter">
                Actionable Tips to Prevent Clogged Bathroom Drains
              </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { t: "Use drain covers", d: "Catch hair and debris before it enters the plumbing system." },
                { t: "Avoid wipes", d: "Never flush wipes, even those labeled flushable, down the toilet." },
                { t: "Use liquid soap", d: "Liquid soap creates less scum than bar soaps inside pipes." },
                { t: "Run hot water", d: "Flush weekly with hot water to melt through product residue." },
                { t: "Schedule cleaning", d: "Maintain clear flow with periodic professional checkups." }
              ].map((tip, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-card border border-border shadow-sm group hover:border-primary/50 transition-all text-center"
                >
                   <h4 className="text-base font-bold text-text mb-3 leading-tight uppercase tracking-widest leading-none">{tip.t}</h4>
                   <p className="text-xs font-medium text-text/60 leading-relaxed uppercase tracking-wider">{tip.d}</p>
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
                Get Fast Bathroom <br className="hidden md:block" />
                Drain Cleaning <span className="text-primary italic underline decoration-primary/20 italic">Today!</span>
              </h2>
              <p className="text-xl md:text-2xl text-text/80 font-medium mb-16 leading-relaxed max-w-2xl mx-auto italic">
                If your bathroom drain cleaning issue is disrupting your day, do not wait. Early professional intervention saves money and prevents damage.
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
                <span>Nationwide Help</span>
                <span>Vetted Local Pros</span>
                <span>Fast Dispatch</span>
              </div>
           </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
