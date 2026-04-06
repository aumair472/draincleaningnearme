"use client";

import { motion } from "framer-motion";
import { Phone, ChevronRight, Zap, Droplets, Search, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Call Us Anytime",
    id: "1",
    description: "Reach out 24/7 and explain the problem. Our dispatchers are ready to help.",
    icon: Phone,
  },
  {
    title: "Describe the Issue",
    id: "2",
    description: "Whether it is a kitchen sink clog, bathroom drain problem, or sewer backup.",
    icon: Zap,
  },
  {
    title: "Get Matched Instantly",
    id: "3",
    description: "We connect you with a local professional who can respond quickly.",
    icon: Droplets,
  },
  {
    title: "Problem Solved Fast",
    id: "4",
    description: "A technician arrives, diagnoses the issue and clears it efficiently.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0B1120] relative italic overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none mb-6">
            How It Works — <span className="text-primary italic">4 Simple Steps</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Getting your drain fixed is easier than you think. Available across the USA 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-[#111827]/80 border border-white/5 backdrop-blur-md hover:border-primary/30 transition-all text-center group"
            >
              <div className="absolute top-0 left-0 p-6 opacity-5 pointer-events-none">
                <span className="text-8xl font-black">{step.id}</span>
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[#0077CC] text-white shadow-glow mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <step.icon size={28} className="fill-white/10" />
              </div>

              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-slate-700 opacity-20">
                  <ChevronRight size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
