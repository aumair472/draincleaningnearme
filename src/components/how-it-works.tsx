"use client";

import { motion } from "framer-motion";
import { Phone, Droplets, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Describe the Issue",
    id: "1",
    description: "Tell us what you need. From kitchen sinks to main line sewer blockages, our dispatchers instantly analyze the best fit.",
    icon: Phone,
  },
  {
    title: "Get Matched Instantly",
    id: "2",
    description: "We connect you within seconds to a highly-rated, verified local professional who is fully equipped to handle your specific clog.",
    icon: Droplets,
  },
  {
    title: "Problem Solved Fast",
    id: "3",
    description: "Your local expert arrives rapidly, clears the drain safely with upfront pricing, and leaves the work area spotless.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4">
            How It Works
          </h2>
          <p className="text-base font-medium text-text/80 max-w-2xl mx-auto">
            Getting your drain fixed is easier than you think. Available across the USA 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative text-center group flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text">
                {step.id}. {step.title}
              </h3>
              <p className="text-base text-text/80 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
