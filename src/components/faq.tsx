"use client";

import { Plus, Minus, HelpCircle, Phone } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

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
    <section className="py-16 md:py-20 bg-card border-y border-border relative overflow-hidden font-body">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary"
            >
              <HelpCircle size={14} /> Comprehensive support
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text leading-tight uppercase italic">
               Frequently asked questions
            </h2>
            
            <p className="text-base md:text-lg text-text/70 font-medium leading-relaxed max-w-xl italic">
               Find clear answers about professional drain cleaning services, pricing and response times.
            </p>

            <div className="p-6 md:p-8 rounded-[2rem] bg-bg border border-border flex flex-col items-center lg:items-start gap-5 shadow-sm animate-fade-in-up [animation-delay:200ms]">
                <p className="text-xs font-black text-text/60 tracking-widest uppercase italic">Still have a specific question?</p>
                <a
                  href={mainTelLink}
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-blue-700 transition-all group uppercase tracking-tight"
                >
                   <Phone size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                   Speak with an expert
                </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-bg border border-border rounded-3xl overflow-hidden transition-all hover:shadow-lg hover:border-primary/20 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left group"
                >
                  <span className="text-base md:text-lg font-black text-text tracking-tight pr-8 group-hover:text-primary transition-colors uppercase italic">{faq.question}</span>
                  <div className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
                     {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-7 pb-7 text-sm md:text-base text-text/60 font-medium leading-relaxed border-t border-border pt-5 mx-7 italic">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


