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
    <section id="why-us" className="py-20 bg-card relative border-y border-border">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight mb-4 text-text">
            Why Choose DrainCleaningNearMe?
          </h2>
          <p className="text-text/80 font-medium max-w-2xl mx-auto text-lg">
            When people search for 'drain cleaning near me', they want fast service and honest results.
            That is exactly what we focus on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 rounded-xl bg-card border border-border text-center transition-all hover:shadow-md hover:border-primary/20 group flex flex-col items-center h-full"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-text group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text/80 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modernized Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-10 rounded-2xl bg-primary/10 border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Quote size={120} className="text-primary" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Zap key={s} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-text mb-6 leading-tight">
              "I called in the morning and a technician arrived in under an hour. Kitchen sink clog fully cleared."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-white">AR</div>
              <div className="text-left">
                <p className="text-sm font-bold tracking-wide text-text">Amanda R.</p>
                <p className="text-[10px] font-bold text-text/60 uppercase tracking-wider">Verified Homeowner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
