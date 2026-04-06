"use client";

import { motion } from "framer-motion";
import { MoveRight, Utensils, Bath, Zap, Droplets, Search, Waves } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "kitchen-sink-drain-cleaning",
    title: "Kitchen Sink Drain Cleaning",
    description:
      "Kitchen sink clogs are often caused by grease, food scraps, coffee grounds and soap residue. These buildup over time and create slow drains or full blockages.",
    href: "/kitchen-sink-drain-cleaning-unclogging-services/",
    icon: Utensils,
    color: "text-primary",
  },
  {
    id: "bathroom-drain-cleaning",
    title: "Bathroom Drain Cleaning",
    description:
      "Bathroom drains commonly collect hair, soap scum, toothpaste and other residue. This can affect sinks, tubs and showers. We handle shower drain cleaning & slow-draining fixtures.",
    href: "/bathroom-drain-cleaning-unclogging-services/",
    icon: Bath,
    color: "text-primary",
  },
  {
    id: "emergency-drain-cleaning",
    title: "Emergency Drain Cleaning",
    description:
      "Some problems cannot wait until morning. Overflowing sinks, flooding tubs or sewer odors need immediate attention. Our emergency drain cleaning is designed for sudden backups.",
    href: "/emergency-drain-cleaning-services/",
    icon: Zap,
    color: "text-accent",
    isEmergency: true,
  },
  {
    id: "hydro-jetting",
    title: "Hydro Jetting Services",
    description:
      "For deep blockages and heavy buildup, hydro jetting uses high-pressure water to clean the pipe walls and remove stubborn debris, grease, and severe clogs.",
    href: "/hydro-jetting-cleaning-services/",
    icon: Waves,
    color: "text-primary",
  },
  {
    id: "sewer-line-cleaning",
    title: "Sewer Line Cleaning & Repair",
    description:
      "If multiple drains are backing up, the issue may be in the main line. We help resolve main line blockages, sewer backups, pipe damage, and root intrusion.",
    href: "/sewer-line-cleaning-repair-usa/",
    icon: Droplets,
    color: "text-primary",
  },
  {
    id: "camera-inspection",
    title: "Drain Camera Inspection",
    description:
      "A camera inspection helps find the exact cause of the problem without guesswork. Non-invasive diagnostic service that saves money by pinpointing the exact problem.",
    href: "/drain-camera-inspection/",
    icon: Search,
    color: "text-primary",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-[#0B1120] relative">
      <div className="container px-10 relative z-10">
        <div className="text-center mb-16 italic">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-white">
            Our <span className="text-primary italic">Drain Cleaning</span> Services
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto">
            We offer a complete range of drain cleaning services near you fast so you can get the
            right solution without delay. Available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-10 rounded-[2.5rem] bg-[#111827]/70 backdrop-blur-md border border-white/5 transition-all overflow-hidden",
                "hover:border-primary/50 hover:shadow-[0_0_50px_rgba(0,163,255,0.15)]",
                service.isEmergency && "hover:border-accent/50 hover:shadow-[0_0_50px_rgba(255,107,53,0.15)]"
              )}
            >
              {/* Dynamic Glow Background */}
              <div
                className={cn(
                  "absolute -bottom-10 -right-10 w-24 h-24 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity",
                  service.isEmergency ? "bg-accent" : "bg-primary"
                )}
              />

              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/10 transition-transform group-hover:scale-110 group-hover:bg-white/10",
                service.color
              )}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-white leading-tight">
                {service.title}
              </h3>

              <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8 line-clamp-4">
                {service.description}
              </p>

              <Link
                href={service.href}
                className={cn(
                  "inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors",
                  service.isEmergency ? "text-accent hover:text-white" : "text-primary hover:text-white"
                )}
              >
                Learn more
                <MoveRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
