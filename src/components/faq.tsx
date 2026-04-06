"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircleQuestion } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does drain cleaning cost?",
    answer: "Pricing depends on the severity of the clog and the service required. We offer free estimates over the phone — call now for a fast quote.",
  },
  {
    question: "How fast can service arrive?",
    answer: "In many cases, technicians can arrive within 60 minutes. We have a nationwide network of pros ready to be dispatched any time of day or night.",
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency drain cleaning nationwide. Whether it is a weekend, holiday, or 2 AM on a Tuesday, we are ready to help.",
  },
  {
    question: "What causes clogged drains?",
    answer: "The most common causes are grease buildup, hair, soap residue, food scraps, and foreign objects. Recurring clogs may indicate more serious pipe issues.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#111827] relative italic overflow-hidden border-y border-white/5">
      <div className="container relative z-10 italic">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-6"
          >
            <HelpCircle size={14} className="fill-primary text-white" /> Frequently Asked Questions
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none mb-6">
             Common <span className="text-primary italic">Questions</span> 
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common drain cleaning questions and prepare for your service appointment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] bg-[#0B1120] border border-white/5 transition-all hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-8 text-left transition-colors"
              >
                <div className="flex items-center gap-4">
                   <div className={cn(
                     "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                     openIndex === index ? "bg-primary text-white shadow-glow" : "bg-white/5 text-slate-500"
                   )}>
                      <span className="text-xs font-black">{index + 1}</span>
                   </div>
                   <span className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus className="shrink-0 text-primary" size={24} />
                ) : (
                  <Plus className="shrink-0 text-slate-600 group-hover:text-primary transition-colors" size={24} />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-base font-medium leading-relaxed text-slate-400 border-t border-white/5 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-[#0B1120] to-accent/5 border border-white/5 text-center max-w-xl mx-auto italic"
        >
          <div className="flex justify-center mb-6">
             <MessageCircleQuestion size={48} className="text-primary opacity-20" />
          </div>
          <p className="text-lg font-black uppercase tracking-tight text-white mb-6 leading-none">Still have questions?</p>
          <p className="text-sm font-medium text-slate-500 mb-8 max-w-xs mx-auto">
            Our experts are standing by 24/7 to help you with any plumbing needs.
          </p>
          <a href="tel:+17247506935" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase italic tracking-widest shadow-glow hover:scale-105 transition-transform">
             Call (724) 750-6935
          </a>
        </motion.div>
      </div>
    </section>
  );
}
