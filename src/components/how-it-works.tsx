"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, UserCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Call us anytime (24/7)",
    description: "Speak with our professional coordination team instantly for immediate support across the USA.",
    icon: Phone,
  },
  {
    number: "2",
    title: "Describe your problem",
    description: "Tell us exactly what’s happening – from minor kitchen clogs to major sewer line backups.",
    icon: MessageSquare,
  },
  {
    number: "3",
    title: "Get matched instantly",
    description: "We instantly connect you with a verified local drain expert who is closest to your location.",
    icon: UserCheck,
  },
  {
    number: "4",
    title: "Problem solved fast",
    description: "Technician arrives with HD cameras and professional gear to fix the issue on the spot.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            How it works – simple & fast
          </h2>
          <p className="text-text/70 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Connecting you with top-tier local expertise shouldn't be complicated. We've streamlined the process for maximum speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative items-start">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-24 h-24 rounded-3xl bg-card border-2 border-border text-primary flex items-center justify-center shadow-xl mb-8 relative group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-4 border-card group-hover:bg-white group-hover:text-primary transition-colors">
                  {step.number}
                </div>
                <step.icon size={36} strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-text mb-4 leading-tight tracking-tight px-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-text/60 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
