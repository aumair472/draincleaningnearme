"use client";

import { motion } from "framer-motion";
import { Star, Quote, UserCheck, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="testimonials" className="py-24 bg-[#0B1120] relative italic overflow-hidden border-t border-white/5">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-6"
          >
            <UserCheck size={14} className="fill-primary text-white" /> Real Customer Success Stories
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none mb-6">
            Real <span className="text-primary italic">Customer</span> Experiences
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Homeowners trust us because we focus on speed, safety and service quality across the USA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-[#111827]/70 backdrop-blur-md border border-white/5 hover:border-primary/30 hover:shadow-glow transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Quote size={64} className="text-primary" />
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-white leading-tight group-hover:text-primary transition-colors">
                &quot;{testimonial.title}&quot;
              </h3>

              <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8 italic line-clamp-4">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-black uppercase italic text-primary">
                  {testimonial.id}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white">{testimonial.author}</p>
                  <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Verified Client</p>
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
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <MessageSquare size={16} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Based on <span className="text-white">5,000+</span> recent calls across the country
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
