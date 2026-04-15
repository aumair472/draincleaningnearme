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
    <section id="faq" className="py-20 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6"
          >
            <HelpCircle size={14} className="text-primary" /> Frequently Asked Questions
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4">
             Common Questions
          </h2>
          <p className="text-base font-medium text-text/80 max-w-2xl mx-auto">
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
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left transition-colors"
               >
                <div className="flex items-center gap-4">
                   <div className={cn(
                     "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                     openIndex === index ? "bg-primary text-white shadow-sm" : "bg-bg text-text/60"
                   )}>
                      <span className="text-sm font-bold">{index + 1}</span>
                   </div>
                   <span className="text-lg font-bold tracking-tight text-text leading-tight">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus className="shrink-0 text-primary" size={24} />
                ) : (
                  <Plus className="shrink-0 text-slate-400 group-hover:text-primary transition-colors" size={24} />
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
                    <div className="px-6 pb-6 pt-2 text-text/80 leading-relaxed border-t border-border/50 mx-6 font-medium text-base">
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
          className="mt-16 p-10 rounded-2xl bg-card border border-border text-center max-w-xl mx-auto shadow-sm"
        >
          <div className="flex justify-center mb-6">
             <MessageCircleQuestion size={48} className="text-primary opacity-20" />
          </div>
          <p className="text-2xl font-bold tracking-tight text-text mb-4 leading-none">Still have questions?</p>
          <p className="text-base font-medium text-text/80 mb-8 max-w-sm mx-auto">
            Our experts are standing by 24/7 to help you with any plumbing needs.
          </p>
          <a href="tel:+17247506935" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-sm hover:shadow-md transition-all">
             Call (724) 750-6935
          </a>
        </motion.div>
      </div>
    </section>
  );
}
