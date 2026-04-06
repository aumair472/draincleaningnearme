"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <Link href={href} className="group block h-full">
        <article className="flex flex-col h-full p-8 bg-card border rounded-3xl hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm grow mb-6 line-clamp-4 group-hover:text-foreground/80 transition-colors">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-80 group-hover:opacity-100 transition-all">
            Learn More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
