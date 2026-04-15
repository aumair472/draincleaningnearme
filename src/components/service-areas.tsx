"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const areas = [
  { name: "Drain Cleaning New York City", href: "/drain-cleaning-nyc" },
  { name: "Drain Cleaning Los Angeles", href: "/drain-cleaning-los-angeles" },
  { name: "Drain Cleaning Chicago", href: "/drain-cleaning-chicago" },
  { name: "Drain Cleaning Houston", href: "/drain-cleaning-houston" },
  { name: "Drain Cleaning Phoenix", href: "/drain-cleaning-phoenix" },
  { name: "Drain Cleaning Philadelphia", href: "/drain-cleaning-philadelphia" },
  { name: "Drain Cleaning San Antonio", href: "/drain-cleaning-san-antonio" },
  { name: "Drain Cleaning San Diego", href: "/drain-cleaning-san-diego" },
  { name: "Drain Cleaning Dallas", href: "/drain-cleaning-dallas" },
  { name: "Drain Cleaning Austin", href: "/drain-cleaning-austin" },
  { name: "Drain Cleaning San Jose", href: "/drain-cleaning-san-jose" },
  { name: "Drain Cleaning Albuquerque", href: "/drain-cleaning-albuquerque" },
];


export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-bg relative border-y border-border">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6"
          >
            <MapPin size={14} className="text-primary" /> Nationwide Service Coverage
          </motion.div>
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-text leading-tight mb-6">
            Drain Cleaning Service Available Nationwide
          </h2>
          <p className="text-text/80 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
            We connect you with licensed local professionals in major metro areas and surrounding 
            communities across the United States. Fast help in all 50 states.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-4xl mx-auto px-4">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={area.href}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold transition-all",
                  "bg-card border border-border text-text/90 hover:border-primary hover:text-primary hover:shadow-sm",
                  "group flex items-center gap-2"
                )}
              >
                {area.name}
                <CheckCircle2 size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl bg-card border border-border text-center max-w-3xl mx-auto shadow-sm"
        >
          <p className="text-xl text-text font-bold tracking-tight mb-6 leading-none">
            Need "Drainage Cleaning Services Near Me" Now?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="tel:+17247506935" className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-sm hover:shadow-md hover:bg-blue-700 transition-all w-full sm:w-auto justify-center">
                <Phone size={18} fill="currentColor" /> (724) 750-6935
             </Link>
          </div>
          <p className="mt-6 text-sm text-text/60 font-medium">
            Call anytime 24/7 for a free estimate & fast dispatch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
