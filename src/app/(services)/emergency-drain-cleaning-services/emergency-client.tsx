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
  ShieldAlert,
  Smartphone,
  Info
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "How quickly can you arrive?",
    answer: "We offer same-day service and often arrive within 1–2 hours for high-priority emergency calls to ensure your home is protected from further damage."
  },
  {
    question: "Is hydrojetting safe for emergency clearing?",
    answer: "Yes, when performed by licensed professionals. It is the most effective way to clear deep blockages without damaging your existing pipe infrastructure."
  },
  {
    question: "Can a clogged drain cause a sewer backup?",
    answer: "Absolutely. A partial clog in the main line can progressively worsen until wastewater backs up into your home through floor drains or tubs."
  },
  {
    question: "What should I do during a sewage backup?",
    answer: "Stop using all water immediately, move valuables from the affected area, and call us for immediate emergency clearing and sewage cleanup guidance."
  },
  {
    question: "Is septic cleaning available through your network?",
    answer: "Yes. If the emergency originates from a full or failing septic system, we can connect you with specialized septic experts in our nationwide network."
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

export function EmergencyClient() {
  const mainTelLink = "tel:+17247506935";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      {/* 🔹 HERO SECTION (HIGH URGENCY 🔥) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
          <div className="absolute top-0 w-full h-[500px] bg-red-500/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-xs font-bold uppercase tracking-widest text-red-500 mb-8 animate-pulse"
             >
               <AlertTriangle size={14} /> Immediate Dispatch Available 24/7
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-text leading-[1.1]"
             >
                Expert Emergency <br className="hidden md:block" />
                <span className="text-primary italic border-b-4 border-primary/20">Drain Cleaning</span> Services Across the USA
             </motion.h1>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl text-center"
             >
                <p>
                  When a clogged drain emergency strikes at 2 AM; an overflowing sink, a backed-up toilet or a sewer backup emergency; you need fast, professional help, not guesswork.
                </p>
                <p>
                  At DrainCleaningNearMe, we provide emergency drain cleaning and 24/7 drain cleaning services across the United States, connecting you with licensed local plumbers who can respond within minutes, not days.
                </p>
                <p className="text-primary font-bold italic">
                  If you are searching “emergency drain cleaning near me” or “sewer cleaning near me”, we are built for these urgent moments.
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
                 className="flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-red-700 hover:-translate-y-1 transition-all group"
               >
                 <ShieldAlert size={24} className="group-hover:scale-110 transition-transform" />
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

      {/* 🔹 WHEN YOU NEED EMERGENCY SERVICE */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="container-narrow">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-text mb-6 tracking-tighter">
                 When Do You Need Emergency Drain Cleaning?
               </h2>
               <p className="text-xl text-text/80 font-medium">
                 You should call 24/7 drain cleaning if you see:
               </p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 mb-16 px-4">
                {[
                  "Water backing up into sinks, showers or toilets",
                  "Foul sewage odors from drains",
                  "Multiple clogged drains at the same time",
                  "Gurgling sounds from pipes",
                  "Standing water in basements or yards"
                ].map((sign, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all">
                     <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                       <CheckCircle2 size={24} />
                     </div>
                     <span className="text-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">{sign}</span>
                  </div>
                ))}
             </div>

             <div className="p-8 rounded-[2rem] bg-red-600 text-white text-center font-black text-xl md:text-2xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                   <ShieldAlert size={100} />
                </div>
                <span className="relative z-10">
                   👉 These are classic signs of sewer backup emergency situations.
                </span>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 COMMON TYPES OF EMERGENCIES (CARD GRID) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-text">
             Common Types of Drain Emergencies
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Overflowing Sinks & Toilets", icon: Droplets, desc: "Clogged drain emergency requiring immediate attention to prevent floor damage." },
                { title: "Sewer Line Backups", icon: AlertTriangle, desc: "Sewer backup emergencies are dangerous situations causing damage and health risks." },
                { title: "Blocked Drains & Flooding", icon: Waves, desc: "Completely blocked lines that stop drainage entirely, creating immediate flooding risks." }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-12 rounded-[2.5rem] text-center group transition-all hover:shadow-xl hover:-translate-y-2"
                >
                   <div className="w-20 h-20 rounded-2xl bg-red-600/10 text-red-600 flex items-center justify-center mx-auto mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                     <card.icon size={40} />
                   </div>
                   <h3 className="text-2xl font-black text-text mb-4 leading-tight tracking-tight uppercase">{card.title}</h3>
                   <p className="text-text/70 font-medium leading-relaxed leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 CAUSES OF EMERGENCIES */}
      <section className="py-24 bg-bg">
        <div className="container">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-text tracking-tighter">
                What Causes Drain & Sewer Emergencies?
              </h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Grease & Oil", icon: Droplets },
                { title: "Hair & Soap", icon: Search },
                { title: "Wipes & Hygiene", icon: AlertTriangle },
                { title: "Tree Roots", icon: Wrench },
                { title: "Mineral Buildup", icon: Waves }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card border border-border flex flex-col items-center text-center group hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 ring-4 ring-primary/5">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-sm font-black text-text/80 uppercase tracking-widest leading-none">{item.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY IMMEDIATE ACTION IS CRITICAL */}
      <section className="py-24">
         <div className="container-narrow px-4">
            <div className="bg-card border border-border rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
               <h2 className="text-3xl md:text-5xl font-black text-text mb-12 tracking-tighter text-center">
                 Why Immediate Action Is <span className="text-red-600 italic">Critical</span>
               </h2>
               
               <p className="text-xl text-text/70 font-medium mb-12 text-center">
                 Ignoring early warning signs can lead to catastrophic property damage and health hazards:
               </p>

               <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                  {[
                    "Water damage to floors and walls",
                    "Mold and mildew growth",
                    "Structural weakening",
                    "Expensive restoration & repairs"
                  ].map((risk, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-bg border border-border">
                       <div className="w-8 h-8 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                         <AlertTriangle size={16} />
                       </div>
                       <span className="font-bold text-text uppercase tracking-widest text-xs">{risk}</span>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-primary rounded-2xl text-white text-center font-black text-2xl uppercase tracking-tighter shadow-xl shadow-primary/20">
                 👉 Emergency drain cleaning saves you thousands in repairs.
               </div>
            </div>
         </div>
      </section>

      {/* 🔹 OUR EMERGENCY SERVICES */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">Our Emergency Services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                   title: "Drain Unclogging",
                   icon: Zap,
                   features: ["Motorized snakes", "Professional augers", "Fast restoration"]
                },
                {
                   title: "Sewer Line Cleaning",
                   icon: Waves,
                   features: ["Deep line snaking", "Hydrojetting", "Camera inspection"]
                },
                {
                   title: "Sewer Backup SVC",
                   icon: AlertTriangle,
                   features: ["Emergency clearing", "Cleanup guidance", "Expert restoration"]
                },
                {
                   title: "Septic tank Support",
                   icon: Droplets,
                   features: ["Full network access", "Septic expert matching", "Priority help"]
                }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-3xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all flex flex-col items-center text-center">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon size={32} />
                   </div>
                   <h3 className="text-xl font-black text-text mb-6 tracking-tighter uppercase leading-tight">{service.title}</h3>
                   <ul className="space-y-4">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-text/60 font-bold text-xs uppercase tracking-widest">
                           <CheckCircle2 size={14} className="text-primary" /> {f}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE US */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text tracking-tighter">
                Why Choose DrainCleaningNearMe for Emergencies?
              </h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4">
              {[
                { t: "24/7 Priority Support", icon: Clock },
                { t: "Fast local Match", icon: Smartphone },
                { t: "Licensed & Insured", icon: ShieldCheck },
                { t: "Safe Methods", icon: ShieldAlert }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                   <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                      <item.icon size={32} />
                   </div>
                   <h3 className="text-xl font-black text-text uppercase tracking-tighter leading-tight">{item.t}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 PROCESS (AIRTASKER FLOW) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">Our Rapid Response Process</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-[2.75rem] left-[5%] right-[5%] h-0.5 bg-border -z-10" />

             {[
               { s: "01", t: "Call Anytime", d: "Describe your emergency and site info for immediate support." },
               { s: "02", t: "Instant Match", d: "The nearest local technician is assigned to your site." },
               { s: "03", t: "Diagnosis", d: "Fast inspection with professional diagnostic tools." },
               { s: "04", t: "Restoration", d: "Clearing blockages via snaking or professional hydrojetting." },
               { s: "05", t: "Clean Finish", d: "Debris cleanup and professional advice for prevention." }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-red-600/20 mb-8 border-4 border-bg relative transition-transform hover:scale-110"
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

      {/* 🔹 VISUAL / UX SECTION */}
      <section className="py-24 bg-bg overflow-hidden">
        <div className="container text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter">
             Expert Emergency Care, <span className="text-primary italic underline decoration-primary/20 italic">Visualized</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Hero Image: Emergency Plumber", "Warning Checklist UI", "Before/After Damage Slider", "Video: Emergency Unclog Demo"
              ].map((item, i) => (
                <div key={i} className="aspect-video bg-card border border-border rounded-3xl flex items-center justify-center text-text/30 font-bold uppercase tracking-widest text-xs italic shadow-inner px-6 text-center">
                   {item} [Placeholder]
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 PREVENTION TIPS */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-12 tracking-tighter">
                Tips to Prevent Future Emergencies
              </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { t: "Never pour grease", d: "Cooling fats solidify inside pipes, causing major sewer failures." },
                { t: "Avoid wipes", d: "Wipes snag inside lines and create massive compact blockages." },
                { t: "Use strainers", d: "Catch hair and food scraps in every sink before they reach pipes." },
                { t: "Run hot water", d: "Flush with hot water weekly to melt away greasy residue." },
                { t: "Schedule cleaning", d: "Professional maintenance prevents 90% of emergencies." }
              ].map((tip, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-card border border-border shadow-sm group hover:border-primary/50 transition-all text-center"
                >
                   <h4 className="text-[15px] font-black text-text mb-3 leading-tight uppercase tracking-widest leading-none">{tip.t}</h4>
                   <p className="text-xs font-medium text-text/60 leading-relaxed uppercase tracking-wider">{tip.d}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 FAQ SECTION */}
      <section className="py-24">
        <div className="container">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">Emergency FAQs</h2>
              <p className="text-text/60 text-lg font-medium">Common Emergency Drain Questions Answered</p>
           </div>
           <FAQAccordion />
        </div>
      </section>

      {/* 🔹 FINAL CTA (VERY HIGH CONVERSION 🚀) */}
      <section className="py-24 px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-narrow rounded-[3.5rem] bg-card border border-border p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-text mb-10 leading-[0.9]">
                Call Now for Emergency <br className="hidden md:block" />
                Drain Cleaning <span className="text-primary italic underline decoration-primary/20 italic">Help!</span>
              </h2>
              <p className="text-xl md:text-2xl text-text/80 font-medium mb-16 leading-relaxed max-w-2xl mx-auto italic">
                If you are dealing with a clogged drain emergency or sewer backup emergency, wait is the enemy. Act now to save your property.
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
                <span>Immediate Support</span>
                <span>Licensed Pros</span>
                <span>Emergency Coverage</span>
              </div>
           </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
