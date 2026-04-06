"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";


export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[64px] border-b transition-colors duration-300",
        "bg-[#0B1120]/90 backdrop-blur-[12px] border-white/10"
      )}
    >
      <div className="container h-full flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/img/logo.svg"
            alt="Drain Cleaning Near Me"
            width={240}
            height={60}
            className="h-[65px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Nav Links (Premium Polish) */}
        <nav className="hidden lg:flex items-center gap-8">

          <Link
            href="tel:+17247506935"
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full",
              "bg-primary text-white font-black uppercase italic tracking-widest text-xs",
              "shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:scale-105 active:scale-95 transition-all",
              "animate-pulse hover:animate-none"
            )}
          >
            <Phone size={14} className="fill-current" />
            <span className="hidden xl:inline">Call Now: (724) 750-6935</span>
            <span className="xl:hidden">Call Now</span>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="tel:+17247506935"
            className="p-2.5 rounded-full bg-primary text-white shadow-glow animate-pulse"
          >
            <Phone size={20} className="fill-current" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
