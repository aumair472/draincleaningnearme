"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link href={href} className="group block h-full">
        <article className={cn(
          "flex flex-col h-full p-6 bg-card border border-border rounded-xl",
          "shadow-sm hover:shadow-md transition-all duration-300"
        )}>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon size={24} strokeWidth={2} />
          </div>
          
          <h3 className="text-xl font-bold tracking-tight mb-3 text-text group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-text/80 leading-relaxed text-sm grow mb-6 line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center gap-2 text-sm font-bold text-primary transition-transform group-hover:translate-x-1 mt-auto">
            Learn More
            <ArrowRight size={16} />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
