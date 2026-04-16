"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, Phone, Waves, Droplets, Trash2 } from "lucide-react";

const risks = [
  { t: "Water damage", d: "Leading cause of structural rot and foundation issues.", Icon: Droplets },
  { t: "Sewer backups", d: "Hazardous waste flooding your living or work spaces.", Icon: Waves },
  { t: "Mold growth", d: "Toxic spores developing within 24-48 hours of moisture.", Icon: ShieldAlert },
  { t: "Expensive repairs", d: "Preventable clogs turning into full system replacements.", Icon: Trash2 },
];

export function UrgencySection() {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden font-body">
      {/* Red Glow Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-red-600/5 blur-[120px] rounded-full opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-red-600 mx-auto"
          >
            <AlertTriangle size={12} /> Time is critical
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-tight px-4">
            Every minute counts when drains overflow
          </h2>
          <p className="text-lg text-text/60 font-medium max-w-2xl mx-auto leading-relaxed">
             Drain issues don't just stay clogs. Unattended backups can quickly escalate into hazardous conditions and costly structural failures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {risks.map((risk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-card border border-border group hover:border-red-600/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-600/5 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
                <risk.Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-text tracking-tight mb-3 leading-tight">{risk.t}</h3>
              <p className="text-sm text-text/50 font-semibold leading-relaxed">{risk.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="p-12 rounded-[3rem] bg-slate-900 border border-red-600/20 text-white text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-center max-w-4xl mx-auto"
        >
           <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
           <p className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">Immediate response prevents disaster</p>
           <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-10 text-white">
              Call now before it gets worse
           </h3>
           <a
              href="tel:+17247506935"
              className="flex items-center justify-center gap-4 px-12 py-6 bg-red-600 text-white rounded-2xl font-bold text-2xl shadow-2xl shadow-red-600/30 hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight"
           >
              <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Emergency help now
           </a>
        </motion.div>
      </div>
    </section>
  );
}
