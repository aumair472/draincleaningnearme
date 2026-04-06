"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Zap, DollarSign, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Nationwide Coverage",
    description:
      "From New York to Los Angeles, our network covers all 50 states. Licensed drain cleaning professionals are nearby.",
    icon: Globe,
  },
  {
    title: "No Mess Guarantee",
    description:
      "Every call connects you with a pre-vetted, locally licensed technician focused on clean, pipe-safe methods.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Dispatch",
    description:
      "Most calls are dispatched within minutes. Technicians typically arrive in 30–60 minutes, even on weekends.",
    icon: Zap,
  },
  {
    title: "Transparent Pricing",
    description:
      "No surprise charges. Get upfront pricing before any work starts. Clear explanations and professional results.",
    icon: DollarSign,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-[#0B1120] relative border-y border-white/5">
      <div className="container relative z-10 italic">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-white">
            Why Choose <span className="text-primary italic">DrainCleaningNearMe?</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto">
            When people search for &apos;drain cleaning near me&apos;, they want fast service and honest results.
            That is exactly what we focus on.
          </p>
        </div>

        <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-[#111827]/80 backdrop-blur-md border border-white/5 text-center transition-all hover:border-primary/30 hover:shadow-glow group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 border border-primary/10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modernized Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-primary/5 via-[#111827] to-accent/5 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Quote size={120} className="text-primary" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Zap key={s} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
              &quot;I called in the morning and a technician arrived in under an hour. Kitchen sink clog fully cleared.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-black text-xs text-primary italic">AR</div>
              <div className="text-left">
                <p className="text-sm font-black uppercase tracking-widest text-white">Amanda R.</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em]">Verified Homeowner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
