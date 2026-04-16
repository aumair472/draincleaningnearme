"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle2, MapPin, Zap } from "lucide-react";

export function CTASection() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section className="py-24 bg-bg relative overflow-hidden font-body">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-12 md:p-20 rounded-[3rem] bg-slate-900 border border-border shadow-2xl relative overflow-hidden group"
        >
          {/* Internal background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          
          <div className="container-narrow relative z-10 space-y-12">
            <div className="space-y-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary"
                >
                  <Zap size={12} className="fill-primary" /> Active response network
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white px-4">
                  Get your drains cleared today
                </h2>
                
                <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                  Whether it’s a minor clog or major emergency, we’re standing by to connect you with a local expert within minutes. Available 24/7 across the USA.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a
                  href={mainTelLink}
                  className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight"
               >
                  <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call now (free estimate)
               </a>
               <a
                  href={mainTelLink}
                  className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-bold text-2xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 tracking-tight"
               >
                  Available 24/7
               </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
               {[
                 { t: "Expert match", Icon: CheckCircle2 },
                 { t: "Fast dispatch", Icon: Zap },
                 { t: "Licensed pros", Icon: MapPin },
                 { t: "No mess", Icon: CheckCircle2 }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 group">
                    <item.Icon size={24} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">{item.t}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
