"use client";

import { motion } from "framer-motion";
import { Star, Quote, UserCheck, MessageSquare } from "lucide-react";

const testimonials = [
  {
    title: "Kitchen sink clog fixed the same day",
    text: "I called in the morning and a technician arrived in under an hour. Our kitchen sink clog was fully cleared, and the work area was spotless.",
    author: "Amanda R.",
    id: "ar",
  },
  {
    title: "Solved our main drain clog quickly",
    text: "We had water backing up in two bathrooms. They handled the main drain clog quickly and explained everything before starting.",
    author: "Carlos M.",
    id: "cm",
  },
  {
    title: "Excellent drain and sewer cleaning",
    text: "Professional, on time, and fair pricing. We needed full drain and sewer cleaning and got exactly what we were promised.",
    author: "Natalie T.",
    id: "nt",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-bg relative overflow-hidden border-t border-border">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6"
          >
            <UserCheck size={14} className="text-primary" /> Real Customer Success Stories
          </motion.div>
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-text leading-tight mb-6">
            Real Customer Experiences
          </h2>
          <p className="text-text/80 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
            Homeowners trust us because we focus on speed, safety and service quality across the USA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                <Quote size={80} className="text-text" />
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-[#FF7F00] text-[#FF7F00]" />
                ))}
              </div>

              <h3 className="text-lg font-bold tracking-tight mb-4 text-text leading-tight group-hover:text-primary transition-colors">
                "{testimonial.title}"
              </h3>

              <p className="text-sm font-medium text-text/80 leading-relaxed mb-8 grow line-clamp-4">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold uppercase text-primary shrink-0">
                  {testimonial.id}
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wide text-text">{testimonial.author}</p>
                  <p className="text-xs font-semibold text-text/60 uppercase tracking-wider">Verified Client</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-sm">
            <MessageSquare size={18} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-text/80">
              Based on <span className="text-text">5,000+</span> recent calls across the country
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
