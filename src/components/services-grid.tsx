"use client";

import { motion } from "framer-motion";
import { MoveRight, Utensils, Bath, Zap, Droplets, Search, Waves, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "kitchen-sink",
    title: "Kitchen sink drain cleaning",
    description: "Remove grease, food buildup and stubborn clogs fast through professional expert cleaning.",
    href: "/kitchen-sink-drain-cleaning-unclogging-services/",
    icon: Utensils,
    color: "text-primary",
  },
  {
    id: "bathroom-drain",
    title: "Bathroom drain cleaning & unclogging",
    description: "Clear hair, soap scum and slow drains efficiently to restore full pipe functionality.",
    href: "/bathroom-drain-cleaning-unclogging-services/",
    icon: Bath,
    color: "text-primary",
  },
  {
    id: "emergency-drain",
    title: "24/7 Emergency drain cleaning",
    description: "Immediate help for urgent backups and flooding – available nationwide any time of day.",
    href: "/emergency-drain-cleaning-services/",
    icon: Zap,
    color: "text-red-600",
    isEmergency: true,
  },
  {
    id: "hydro-jetting",
    title: "Hydro jetting services",
    description: "High-pressure cleaning for deep clogs and severe pipe buildup across your entire system.",
    href: "/hydro-jetting-cleaning-services/",
    icon: Waves,
    color: "text-primary",
  },
  {
    id: "sewer-line",
    title: "Sewer line cleaning & repair",
    description: "Fix major sewer problems and main line backups with advanced diagnostic and repair tools.",
    href: "/sewer-line-cleaning-repair-usa/",
    icon: Droplets,
    color: "text-primary",
  },
  {
    id: "camera-inspection",
    title: "Drain camera inspection",
    description: "Accurate, non-invasive diagnosis of your entire drain system using HD video technology.",
    href: "/drain-camera-inspection/",
    icon: Search,
    color: "text-primary",
  },
];

export function ServicesGrid() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section id="services" className="py-24 bg-card relative font-body">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Our Drain Cleaning Services
          </h2>
          <p className="text-text/60 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Professional solutions for every type of drainage challenge. We connect you with the right specialist for any job, large or small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={cn(
                "group relative p-10 rounded-[2rem] bg-card border border-border transition-all duration-300 flex flex-col items-center text-center h-full",
                "shadow-sm hover:shadow-2xl hover:-translate-y-1",
                service.isEmergency && "border-red-600/20 bg-red-600/[0.02]"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all shadow-inner",
                service.isEmergency ? "bg-red-600/5 text-red-600 group-hover:bg-red-600 group-hover:text-white" : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
              )}>
                <service.icon size={32} strokeWidth={2} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-text leading-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-text/70 text-base leading-relaxed mb-8 grow">
                {service.description}
              </p>

              <Link
                href={service.href}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-semibold transition-all mt-auto py-3 px-6 rounded-xl border border-border group-hover:border-primary/50",
                  service.isEmergency ? "text-red-600 border-red-600/20" : "text-primary group-hover:bg-primary/5"
                )}
              >
                Learn more
                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* 🔹 BOTTOM CTA FOR SERVICES */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="p-10 rounded-[2rem] bg-slate-900 border border-border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
           <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight">Get fast drain cleaning near you</h3>
              <p className="text-white/40 font-semibold tracking-wide text-xs">Over 300+ verified experts across the United States</p>
           </div>
           <a
              href={mainTelLink}
              className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-primary/20 shrink-0 group"
           >
              <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Call now
           </a>
        </motion.div>
      </div>
    </section>
  );
}
