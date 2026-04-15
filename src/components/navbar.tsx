"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const serviceLinks = [
  { name: "Kitchen Sink Drain Cleaning", href: "/kitchen-sink-drain-cleaning-unclogging-services" },
  { name: "Bathroom Drain Cleaning", href: "/bathroom-drain-cleaning-unclogging-services" },
  { name: "Emergency Drain Cleaning", href: "/emergency-drain-cleaning-services" },
  { name: "Hydro Jetting Services", href: "/hydro-jetting-cleaning-services" },
  { name: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa" },
  { name: "Drain Camera Inspection", href: "/drain-camera-inspection" },
];

const locationLinks = [
  { name: "Drain Cleaning in New York City", href: "/drain-cleaning-nyc" },
  { name: "Drain Cleaning in Los Angeles", href: "/drain-cleaning-los-angeles" },
  { name: "Drain Cleaning in Chicago", href: "/drain-cleaning-chicago" },
  { name: "Drain Cleaning in Houston", href: "/drain-cleaning-houston" },
  { name: "Drain Cleaning in Dallas", href: "/drain-cleaning-dallas" },
  { name: "Drain Cleaning in Phoenix", href: "/drain-cleaning-phoenix" },
  { name: "Drain Cleaning in San Antonio", href: "/drain-cleaning-san-antonio" },
  { name: "Drain Cleaning in San Diego", href: "/drain-cleaning-san-diego" },
  { name: "Drain Cleaning in Philadelphia", href: "/drain-cleaning-philadelphia" },
  { name: "Drain Cleaning in Austin", href: "/drain-cleaning-austin" },
  { name: "Drain Cleaning in San Jose", href: "/drain-cleaning-san-jose" },
  { name: "Drain Cleaning in Albuquerque", href: "/drain-cleaning-albuquerque" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

function DropdownMenu({
  label,
  links,
  columns = 1,
}: {
  label: string;
  links: { name: string; href: string }[];
  columns?: number;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
          "text-text/80 hover:text-text hover:bg-card"
        )}
      >
        {label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={cn(
              "absolute top-full mt-2 bg-bg border border-border rounded-xl shadow-xl z-50 p-2 min-w-[220px]",
              columns === 2 && "grid grid-cols-2 gap-x-2 min-w-[480px] left-1/2 -translate-x-1/2"
            )}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-text/80 hover:text-text hover:bg-card transition-colors group"
              >
                <ChevronRight
                  size={12}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                />
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [mobileSection, setMobileSection] = React.useState<string | null>(null);
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
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300",
        "bg-bg/90 backdrop-blur-md border-border shadow-sm"
      )}
    >
      {/* Desktop Nav */}
      <div className="container h-[72px] hidden lg:flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Drain Cleaning Near Me — Home">
          <Image
            src="/img/logo.svg"
            alt="Drain Cleaning Near Me"
            width={220}
            height={55}
            className="h-[48px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          <DropdownMenu label="Services" links={serviceLinks} />
          <DropdownMenu label="Locations" links={locationLinks} columns={2} />
          <DropdownMenu label="Company" links={companyLinks} />
        </nav>

        <Link
          href="tel:+17247506935"
          className={cn(
            "flex items-center gap-2 group px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider shrink-0",
            "bg-primary text-white transition-all shadow-lg hover:shadow-primary/25 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
          )}
          aria-label="Call Drain Cleaning Near Me at (724) 750-6935"
        >
          <Phone size={18} className="fill-current group-hover:rotate-12 transition-transform" />
          <span>Call Now: (724) 750-6935</span>
        </Link>

      </div>

      {/* Mobile Nav Bar */}
      <div className="container h-[64px] lg:hidden flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Drain Cleaning Near Me — Home">
          <Image
            src="/img/logo.svg"
            alt="Drain Cleaning Near Me"
            width={180}
            height={45}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="tel:+17247506935"
            className="p-2.5 rounded-lg bg-primary text-white shadow-sm hover:bg-blue-700 transition"
            aria-label="Call (724) 750-6935"
          >
            <Phone size={18} className="fill-current" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg border border-border bg-card text-text hover:bg-card/80 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-border bg-bg"
          >
            <nav className="container py-4 space-y-1" aria-label="Mobile navigation">
              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-sm text-text hover:bg-card transition-colors"
                  aria-expanded={mobileSection === "services"}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", mobileSection === "services" && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {mobileSection === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 space-y-1 mt-1"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-text/80 hover:text-text hover:bg-card transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Locations Accordion */}
              <div>
                <button
                  onClick={() => setMobileSection(mobileSection === "locations" ? null : "locations")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-sm text-text hover:bg-card transition-colors"
                  aria-expanded={mobileSection === "locations"}
                >
                  Locations
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", mobileSection === "locations" && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {mobileSection === "locations" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 space-y-1 mt-1"
                    >
                      {locationLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-text/80 hover:text-text hover:bg-card transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Links */}
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-3 rounded-lg font-semibold text-sm text-text hover:bg-card transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 pb-1">
                <Link
                  href="tel:+17247506935"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm shadow-sm hover:bg-blue-700 transition"
                >
                  <Phone size={16} className="fill-current" />
                  Call Now: (724) 750-6935
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
