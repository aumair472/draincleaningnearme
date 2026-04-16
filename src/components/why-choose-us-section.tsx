"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Quote, Truck, Trash2, Globe, DollarSign, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Fast 30-60 minute dispatch",
    description: "Our local experts are typically on-site within an hour to address your drainage emergencies fast.",
    icon: Truck,
  },
  {
    title: "Licensed professionals",
    description: "Every technician in our network is a fully licensed and insured plumbing expert you can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide service coverage",
    description: "Broad availability across the entire United States, ensuring expert help is always nearby.",
    icon: Globe,
  },
  {
    title: "Transparent pricing",
    description: "Get honest, upfront pricing for your specific drain challenge before any work begins on-site.",
    icon: DollarSign,
  },
  {
    title: "No mess guarantee",
    description: "Our professionals prioritize cleanliness and treat your property with complete care and respect.",
    icon: Trash2,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-bg relative border-y border-border font-body">
      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Why choose DrainCleaningNearMe?
          </h2>
          <p className="text-text/70 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Your problem is solved quickly, safely and professionally. We focus on results that keep your pipes flowing long after we leave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-8 rounded-[2rem] bg-card border border-border text-center transition-all hover:shadow-2xl hover:border-primary/20 group flex flex-col items-center h-full shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-8 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-inner">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-text leading-tight group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text/60 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔹 AIRTASKER STYLE TESTIMONIAL HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-12 rounded-[2.5rem] bg-primary/10 border border-primary/20 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[1.7] group-hover:rotate-0">
            <Quote size={150} className="text-primary" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1.5 mb-8 text-accent">
              {[1, 2, 3, 4, 5].map((s) => (
                <CheckCircle2 key={s} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-xl md:text-3xl font-bold tracking-tight text-text mb-10 leading-relaxed">
              "Your problem is solved quickly, safely and professionally. If we leave a mess, we haven't done our job."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center font-bold text-xl text-white shadow-xl shadow-primary/20 border-4 border-card">DN</div>
              <div className="text-center">
                <p className="text-base font-bold text-text">Drain Network Quality Team</p>
                <p className="text-xs font-semibold text-text/40 tracking-wider">Verified satisfaction standard</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
