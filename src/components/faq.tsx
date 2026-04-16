"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Phone } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "How much does drain cleaning cost?",
    answer: "Pricing depends on the severity of the clog and the location. We provide honest, upfront pricing through our network of local experts. Call (724) 750-6935 for a fast free estimate over the phone."
  },
  {
    question: "How fast can service arrive?",
    answer: "In many cases, local experts can arrive within 30–60 minutes. We have a nationwide network of pros ready to be dispatched any time, day or night across the USA."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency service nationwide. Whether it's a holiday, weekend, or in the middle of the night, we connect you with the help you need instantly."
  },
  {
    question: "What causes clogged drains?",
    answer: "The most common causes are grease buildup, hair, soap residue, and foreign objects. If you have recurring clogs, a professional camera inspection might be needed to find root causes."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const mainTelLink = "tel:+17247506935";

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden font-body">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary"
            >
              <HelpCircle size={14} /> Comprehensive support
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
               Frequently asked questions
            </h2>
            
            <p className="text-lg text-text/70 font-medium leading-relaxed max-w-xl">
               Find clear answers about professional drain cleaning services, pricing and response times.
            </p>

            <div className="p-8 rounded-[2rem] bg-bg border border-border flex flex-col items-center lg:items-start gap-6 shadow-sm">
                <p className="text-sm font-semibold text-text/60 tracking-tight">Still have a specific question?</p>
                <a
                  href={mainTelLink}
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-blue-700 transition-all group"
                >
                   <Phone size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                   Speak with an expert
                </a>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg border border-border rounded-3xl overflow-hidden transition-all hover:shadow-lg hover:border-primary/20 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-lg md:text-xl font-bold text-text tracking-tight pr-8">{faq.question}</span>
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
                     {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-base text-text/60 font-medium leading-relaxed border-t border-border pt-6 mx-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
