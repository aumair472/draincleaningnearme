"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Activity } from "lucide-react";

const problems = [
  "Kitchen sink clogs",
  "Bathroom drain blockages",
  "Sewer backups",
  "Slow drains",
  "Main drain clog",
  "Washing machine drain issues"
];

export function CommonProblems() {
  return (
    <section className="py-24 bg-bg border-y border-border overflow-hidden font-body">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-red-600"
              >
                  <Activity size={12} /> System diagnostics
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
                Common drain problems we solve
              </h2>
              <p className="text-lg text-text/70 font-medium leading-relaxed max-w-xl">
                Drain issues usually build up over time. Our experts are equipped to handle any residential or commercial drainage challenge fast.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {problems.map((problem, i) => (
                <div key={i} className="flex items-center gap-3 group translate-x-0 hover:translate-x-1 transition-transform">
                  <CheckCircle2 size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-base font-semibold text-text/80">{problem}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+17247506935"
              className="inline-flex items-center gap-2 text-primary font-bold tracking-tight text-sm group"
            >
              Find drain cleaning near you – call now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-card border border-border rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
               <div className="h-full flex flex-col justify-center items-center text-center space-y-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center transition-all shadow-inner">
                     <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L4.5 9h15L12 2zM4.5 9v11a2 2 0 002 2h11a2 2 0 002-2V9H4.5z" />
                        <path d="M12 13a2 2 0 100 4 2 2 0 000-4z" />
                     </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text tracking-tight mb-4">Expert local solutions</h3>
                    <p className="text-text/50 font-medium text-sm px-4 leading-relaxed">
                      Every drain problem has a root cause. We don't just clear the clog; we solve the system failure.
                    </p>
                  </div>
                  <div className="px-6 py-2.5 bg-primary text-white font-bold text-sm tracking-tight rounded-xl">
                    Verified diagnostics
                  </div>
               </div>
               
               {/* Abstract decorative elements */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
