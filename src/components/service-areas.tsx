"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas"
];

export function ServiceAreas() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section className="py-24 bg-bg border-b border-border text-left font-body">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary"
            >
              <MapPin size={14} /> Nationwide network
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
              Drain cleaning services in your area
            </h2>
            
            <p className="text-lg text-text/70 font-medium leading-relaxed max-w-xl">
               We connect you with local experts across major U.S. cities, ensuring fast dispatch and high-quality drain cleaning results wherever you are.
            </p>

            <a
              href={mainTelLink}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
            >
               <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
               Call local expert
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cities.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg h-full shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                     <MapPin size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-text tracking-tight group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                    {city}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest mt-2">
                    Licensed cleaners
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
