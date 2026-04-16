"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "James T.",
    text: "Kitchen sink clog fixed the same day!",
    desc: "Fast response and excellent service. Technician arrived in 45 minutes and cleared a stubborn grease clog in no time.",
    stars: 5,
    location: "Verified homeowner"
  },
  {
    name: "Maria S.",
    text: "Solved our main drain clog quickly",
    desc: "Professional and efficient. We had a total backup at midnight and they had someone here within an hour. Saved us from a disaster.",
    stars: 5,
    location: "Property manager"
  },
  {
    name: "David L.",
    text: "Excellent drain and sewer cleaning",
    desc: "Reliable and fast service. The team was very careful not to make a mess and gave us great maintenance tips after finishing.",
    stars: 5,
    location: "Verified customer"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-y border-border font-body">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
        <Quote size={300} className="text-primary" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Real customer experiences
          </h2>
          <p className="text-text/70 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Homeowners across the USA trust our network for fast, professional and mess-free drain cleaning results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-card border border-border flex flex-col items-center text-center transition-all hover:shadow-2xl hover:border-primary/20 group h-full shadow-sm"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(review.stars)].map((_, starI) => (
                  <Star key={starI} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-text mb-4 leading-tight tracking-tight group-hover:text-primary transition-colors">
                 "{review.text}"
              </h3>
              
              <p className="text-text/60 text-base font-medium leading-relaxed mb-10 grow">
                {review.desc}
              </p>
              
              <div className="flex flex-col items-center gap-1 pt-8 border-t border-border w-full">
                <div className="flex items-center gap-2">
                   <p className="text-base font-bold text-text">{review.name}</p>
                   <CheckCircle2 size={16} className="text-primary" />
                </div>
                <p className="text-xs font-semibold text-text/40 tracking-wide">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
