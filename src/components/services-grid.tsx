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
    <section id="services" className="py-20 bg-card relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-tight mb-4 text-text">
            Our Drain Cleaning Services
          </h2>
          <p className="text-text/80 font-medium max-w-2xl mx-auto text-lg">
            We offer a complete range of drain cleaning services near you fast so you can get the
            right solution without delay. Available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={cn(
                "group relative p-6 rounded-xl bg-card border border-border transition-all duration-300 flex flex-col h-full",
                "shadow-sm hover:shadow-lg hover:scale-[1.02]",
                service.isEmergency && "border-accent/30 hover:border-accent"
              )}
            >
              <div className={cn(
                "w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors",
                service.isEmergency ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
              )}>
                <service.icon size={28} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3 text-text group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-text/80 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                {service.description}
              </p>

              <Link
                href={service.href}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-bold transition-all mt-auto",
                  service.isEmergency ? "text-accent" : "text-primary group-hover:translate-x-1"
                )}
              >
                Learn more
                <MoveRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
