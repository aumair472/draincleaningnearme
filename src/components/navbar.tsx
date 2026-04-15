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
        "fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-colors duration-300",
        "bg-bg/90 backdrop-blur-md border-border shadow-sm"
      )}
    >
      <div className="container h-full flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo might be white, if so, we would need a dark version. For now assuming it works or has dark elements. If not visible, they would need a specific logo swap, but I'll leave the image tag as is but remove the hard scale so it fits. */}
          <Image
            src="/img/logo.svg"
            alt="Drain Cleaning Near Me"
            width={240}
            height={60}
            className="h-[50px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Nav Links (Premium Polish) */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="tel:+17247506935"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm",
              "bg-primary text-white transition-all shadow-sm hover:shadow-md hover:bg-blue-700"
            )}
          >
            <Phone size={18} className="fill-current" />
            <span className="hidden xl:inline">Call Now: (724) 750-6935</span>
            <span className="xl:hidden">Call Now</span>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="tel:+17247506935"
            className="p-2.5 rounded-lg bg-primary text-white shadow-sm hover:bg-blue-700 transition"
          >
            <Phone size={20} className="fill-current" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
