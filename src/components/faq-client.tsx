"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQClientProps {
  faqs: FAQItem[];
  cityName?: string;
}

export function FAQClient({ faqs, cityName }: FAQClientProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-8 text-left group"
          >
            <span className="text-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">{faq.q}</span>
            <div className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
               {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </div>
          </button>
          {openIndex === index && (
            <div className="px-8 pb-8 text-base text-text/60 font-medium leading-relaxed border-t border-border pt-6 mx-8 italic">
               {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
