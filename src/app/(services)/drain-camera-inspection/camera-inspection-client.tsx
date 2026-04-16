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
  Eye,
  ScanSearch,
  ShieldAlert,
  Info
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// FAQ Data
const faqs = [
  {
    question: "What is a drain camera inspection?",
    answer: "It is a non-invasive diagnostic procedure where a high-definition, waterproof camera is inserted into your plumbing system to provide a real-time video feed of the interior pipe walls."
  },
  {
    question: "Is it better than just guessing where the clog is?",
    answer: "Absolutely. Instead of trial-and-error digging or snaking, the camera pinpoints the exact cause (roots, cracks, grease) and location of the problem, saving you time and money on repairs."
  },
  {
    question: "Can the camera inspect both sewer lines and smaller drains?",
    answer: "Yes. We have various camera sizes designed to navigate everything from small secondary bathroom lines to large main sewer lines buried deep underground."
  },
  {
    question: "How often should I get my pipes inspected?",
    answer: "It depends on the age of your system. We recommend an inspection before buying a new home, before major renovations, or if you experience recurring clogs more than once a year."
  },
  {
    question: "Is emergency inspection service available?",
    answer: "Yes, our network provides 24/7 support. If you have a total backup and need an immediate diagnosis to plan an emergency repair, we can dispatch an expert right away."
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

export function CameraInspectionClient() {
  const mainTelLink = "tel:+17247506935";

  return (
    <div className="min-h-screen bg-bg text-center">
      <Navbar />
      {/* 🔹 HERO SECTION (HIGH TRUST + CONVERSION) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
          <div className="absolute top-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-8"
             >
               <Eye size={14} /> High-Definition Visual Diagnostics
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-text leading-[1.1]"
             >
                Expert Sewer & Drain <br className="hidden md:block" />
                <span className="text-primary italic border-b-4 border-primary/20">Video Inspections</span>
             </motion.h1>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl"
             >
                <p>
                  If your drains keep clogging, your sewer line backs up without warning or you suspect hidden pipe damage, a drain camera inspection is the fastest way to find the real problem without digging up your property.
                </p>
                <p>
                  At DrainCleaningNearMe, we provide accurate camera drain inspection services across the USA, helping homeowners and businesses get clear answers, faster repairs and less disruption. 
                </p>
                <p className="text-primary font-bold">
                   Our drain inspection services near you is designed to remove the guesswork. Instead of trial-and-error repairs, our technicians use live video to locate clogs, cracks, root intrusion and other hidden issues so you can make the right decision with confidence.
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
                 <ScanSearch size={24} className="text-primary" />
                 Get Inspection Help
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
                  <Zap size={16} className="text-primary" />
                  <span className="text-sm font-bold text-text/80">Advanced Technology</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-border md:block hidden" />
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-primary" />
                  <span className="text-sm font-bold text-text/80">Licensed Experts</span>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 WHY CAMERA INSPECTION MATTERS */}
      <section className="py-24 bg-bg border-b border-border text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-text">
                  Why Drain Camera <br />
                  <span className="text-primary italic">Inspection</span> Matters
                </h2>
                
                <p className="text-xl text-text/70 font-medium leading-relaxed max-w-xl">
                   A sewer camera inspection gives technicians a live look inside your plumbing system using a waterproof camera inserted into the pipe.
                </p>

                <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem] shadow-sm italic text-text font-black text-xl uppercase tracking-tighter text-center">
                   👉 No guessing — real-time diagnosis
                </div>

                <div className="space-y-6">
                   <h3 className="text-2xl font-black text-text uppercase tracking-tighter">Key Benefits of Sight</h3>
                   <div className="grid gap-4">
                      {[
                        { t: "Identify Problem Location", d: "Pinpoint exactly where the clog or damage is situated." },
                        { t: "Avoid Unnecessary Digging", d: "Save your yard/flooring by only addressing the failure point." },
                        { t: "Faster & Smarter Repairs", d: "Data-driven solutions instead of trial-and-error attempts." }
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all">
                           <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                              <CheckCircle2 size={24} />
                           </div>
                           <div>
                              <h4 className="font-black text-text uppercase tracking-tighter leading-none mb-1">{benefit.t}</h4>
                              <p className="text-text/60 text-xs font-medium uppercase tracking-widest">{benefit.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             
             <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] bg-card border border-border overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                   <div className="w-24 h-24 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-10 ring-8 ring-primary/5">
                      <ScanSearch size={48} />
                   </div>
                   <h4 className="text-2xl font-black text-text mb-4 uppercase tracking-tighter">Live Feed Monitoring</h4>
                   <p className="text-text/50 font-medium italic text-sm px-8">High-definition video visualization of roots, cracks, and deep pipeline blockages [Placeholder Image]</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🔹 WHAT IT DETECTS (CARD GRID) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-text uppercase leading-none pr-12">
             What a Camera Inspection Can Detect
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Hidden Pipe Damage", icon: ShieldAlert, desc: "Cracks, widespread breaks, or total system collapse." },
                { title: "Root Intrusion", icon: Waves, desc: "Tree roots naturally seeking water inside your pipes." },
                { title: "Grease & Debris", icon: Droplets, desc: "Stubborn kitchen or bathroom sludge buildup." },
                { title: "Pipe Misalignment", icon: Search, desc: "Low spots (bellies) causing constant recurring backups." },
                { title: "Foreign Objects", icon: Zap, desc: "Debris or construction material lodged in the waste stream." }
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

      {/* 🔹 BENEFITS (TRUST SECTION) */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">Benefits of Camera Inspection</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { t: "Accurate Diagnosis", icon: Search, d: "Pinpoint exact issue" },
                { t: "Non-Invasive", icon: ShieldCheck, d: "No digging or damage" },
                { t: "Saves Time & Money", icon: Clock, d: "Avoid wrong repairs" },
                { t: "Better Planning", icon: ScanSearch, d: "Choose right solution" },
                { t: "Prevents Emergencies", icon: AlertTriangle, d: "Early detection" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                   <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/5">
                      <item.icon size={32} />
                   </div>
                   <h3 className="text-xs font-black text-text uppercase tracking-widest leading-tight mb-2">{item.t}</h3>
                   <span className="text-[10px] font-bold text-text/40 uppercase tracking-widest leading-none">{item.d}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHEN YOU NEED INSPECTION */}
      <section className="py-24 bg-card/30 border-y border-border text-center">
        <div className="max-w-5xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter uppercase leading-[0.8]">
             When You Need a Drain Inspection
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { t: "Recurring Clogs", IconComponent: Clock },
                { t: "Slow Drains Everywhere", IconComponent: Waves },
                { t: "Sewer Odors", IconComponent: AlertTriangle },
                { t: "Before buying property", IconComponent: ShieldCheck },
                { t: "Before major repairs", IconComponent: Wrench }
              ].map((item, idx) => {
                 const Icon = item.IconComponent;
                 return (
                   <div key={idx} className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                         <Icon size={28} className="text-primary" />
                      </div>
                      <span className="text-xs font-black text-text uppercase tracking-widest leading-tight px-4">{item.t}</span>
                   </div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* 🔹 SERVICES SECTION (CATEGORIZED) */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20 text-center">
              <h2 className="text-3xl md:text-6xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">Our Inspection Services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { t: "Residential Inspection", features: ["Kitchen lines", "Bathroom lines", "Main sewer lines"] },
                { t: "Commercial Inspection", features: ["Restaurants & Grease traps", "Office buildings", "Industrial facilities"] },
                { t: "Emergency Inspection", features: ["24/7 priority diagnostic", "Urgent failure analysis", "Immediate repair planning"] },
                { t: "Storm Drain Inspection", features: ["Exterior drainage systems", "Parking lot drains", "Underground conduits"] },
                { t: "Full System Inspection", features: ["Complete pipeline review", "System health report", "Maintenance planning"] }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-3xl bg-card border border-border shadow-sm group hover:border-primary/50 transition-all text-center">
                   <h3 className="text-xl font-black text-text mb-6 tracking-tight uppercase leading-tight border-b border-border pb-4">{service.t}</h3>
                   <ul className="space-y-4">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center justify-center gap-3 text-text/60 font-bold text-xs uppercase tracking-widest leading-relaxed">
                           <CheckCircle2 size={16} className="text-primary shrink-0" /> {f}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE US (5 PILLARS) */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter">
             Why Choose DrainCleaningNearMe?
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { t: "24/7 Emergency Service", icon: Clock },
                { t: "Fast Local Dispatch", icon: Smartphone },
                { t: "Nationwide Coverage", icon: Waves },
                { t: "Licensed Professionals", icon: ShieldCheck },
                { t: "Advanced Equipment", icon: Zap }
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

      {/* 🔹 PROCESS (AIRTASKER FLOW) */}
      <section className="py-24 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8] pr-12">How the Process Works</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-[2.75rem] left-[5%] right-[5%] h-0.5 bg-border -z-10" />

             {[
               { s: "1", t: "Call Anytime", d: "Nationwide 24/7 dedicated support standing by to assist." },
               { s: "2", t: "Describe Issue", d: "Provide site details for optimized technician matching." },
               { s: "3", t: "Local Expert Match", d: "Connect with the nearest qualified inspection specialists." },
               { s: "4", t: "Live Diagnosis", d: "HD Camera feed visualization and expert report." }
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

      {/* 🔹 PRACTICAL TIPS GRID */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter uppercase leading-[0.8]">
             Practical Tips for Homeowners
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { t: "Inspect recurring clogs", d: "Don't just clear them; find the structural cause.", IconComponent: AlertTriangle },
                { t: "Inspect Before Buying", d: "Avoid buying a home with thousands in hidden damage.", IconComponent: Search },
                { t: "Documentation is key", d: "Keep video proof for insurance or future repairs.", IconComponent: Info },
                { t: "Prioritize Before Repairs", d: "Never repair an underground line without a camera diagnostic.", IconComponent: Wrench },
                { t: "Schedule Periodic Checks", d: "Annual inspections prevent major sewer backups.", IconComponent: Clock }
              ].map((tip, idx) => {
                 const Icon = tip.IconComponent;
                 return (
                   <div key={idx} className="p-8 rounded-3xl bg-card border border-border shadow-sm group hover:border-primary/50 transition-all flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                         <Icon size={20} />
                      </div>
                      <h4 className="text-[12px] font-black text-text mb-3 uppercase tracking-widest">{tip.t}</h4>
                      <p className="text-[10px] font-bold text-text/40 leading-relaxed uppercase tracking-[0.1em]">{tip.d}</p>
                   </div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* 🔹 VISUAL / UX SECTION (PLACEHOLDERS) */}
      <section className="py-24 bg-bg overflow-hidden text-center text-center">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-black text-text mb-16 tracking-tighter uppercase leading-[0.8] pr-12">
             Technical Sight, <span className="text-primary italic underline decoration-primary/20 italic">Visualized</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {[
                "Hero Overlay: Pipe Video", "HD Camera System Diagram", "Clog Visualization Grid", "Before/After Diagnostic Visual", "Process Step Iconography"
              ].map((item, i) => (
                <div key={i} className="aspect-video bg-card border border-border rounded-3xl flex items-center justify-center text-text/30 font-bold uppercase tracking-widest text-xs italic shadow-inner px-6 text-center">
                   {item} [Placeholder]
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 FAQ SECTION */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tighter uppercase leading-[0.8]">FAQ</h2>
              <p className="text-text/60 text-lg font-medium">Clear answers about professional drain camera inspection services.</p>
           </div>
           <FAQAccordion />
        </div>
      </section>

      {/* 🔹 FINAL CTA (HIGH TRUST 🚀) */}
      <section className="py-24 px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3.5rem] bg-card border border-border p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
           <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-text mb-10 leading-[0.9]">
                Get Fast <span className="text-primary italic underline decoration-primary/20 italic">Drain Inspection</span> <br className="hidden md:block" />
                Near You Today
              </h2>
              <p className="text-xl md:text-2xl text-text/80 font-medium mb-16 leading-relaxed max-w-2xl mx-auto italic">
                If you want to stop guessing and start solving the real problem, a professional drain camera inspection is the smartest first step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a
                    href={mainTelLink}
                    className="flex items-center justify-center gap-4 px-12 py-7 bg-primary text-white rounded-3xl font-black text-2xl shadow-2xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all group"
                  >
                    <Phone size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                    Call Now for Inspection
                  </a>
                  <a
                    href={mainTelLink}
                    className="flex items-center justify-center gap-4 px-12 py-7 bg-transparent border-3 border-border text-text rounded-3xl font-black text-2xl hover:bg-text/5 transition-all outline-none"
                  >
                    Get Expert Diagnosis
                  </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-10 text-[xs] font-bold text-text/20 uppercase tracking-[0.3em]">
                <span>HD Video Proof</span>
                <span>Licensed Pros</span>
                <span>24/7 Nationwide Support</span>
              </div>
           </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
