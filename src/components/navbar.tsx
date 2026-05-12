"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { name: "Kitchen Sink Drain Cleaning", href: "/kitchen-sink-drain-cleaning-unclogging-services" },
  { name: "Bathroom Drain Cleaning", href: "/bathroom-drain-cleaning-unclogging-services" },
  { name: "Emergency Drain Cleaning", href: "/emergency-drain-cleaning-services" },
  { name: "Hydro Jetting Services", href: "/hydro-jetting-cleaning-services" },
  { name: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa" },
  { name: "Drain Camera Inspection", href: "/drain-camera-inspection" },
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
          "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-colors italic",
          "text-text/80 hover:text-text hover:bg-card"
        )}
      >
        {label}
        <ChevronDown
          size={12}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute top-full mt-2 bg-bg border border-border rounded-xl shadow-xl z-50 p-2 min-w-[220px] transition-all duration-200 ease-out origin-top",
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
          columns === 2 && "grid grid-cols-2 gap-x-2 min-w-[480px] left-1/2 -translate-x-1/2"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-black uppercase tracking-tight text-text/80 hover:text-text hover:bg-card transition-colors group italic"
          >
            <ChevronRight
              size={12}
              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            />
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [mobileSection, setMobileSection] = React.useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 font-body",
        hidden ? "-translate-y-full" : "translate-y-0",
        "bg-bg/90 backdrop-blur-md border-border shadow-sm"
      )}
    >
      {/* Desktop Nav */}
      <div className="container h-[64px] hidden lg:flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Drain Cleaning Near Me — Home">
          <Image
            src="/img/logo.svg"
            alt="Drain Cleaning Near Me"
            width={180}
            height={45}
            className="h-[40px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          <DropdownMenu label="Services" links={serviceLinks} />
          <Link href="/blogs" className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest text-text/80 hover:text-text hover:bg-card transition-colors italic">Blog</Link>
          <Link href="/about" className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest text-text/80 hover:text-text hover:bg-card transition-colors italic">About Us</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest text-text/80 hover:text-text hover:bg-card transition-colors italic">Contact</Link>
        </nav>

        <Link
          href="tel:+17247506935"
          className={cn(
            "flex items-center gap-2 group px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shrink-0 italic",
            "bg-primary text-white transition-all shadow-lg hover:shadow-primary/25 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
          )}
          aria-label="Call Drain Cleaning Near Me at (724) 750-6935"
        >
          <Phone size={16} className="fill-current group-hover:rotate-12 transition-transform" />
          <span>Call Now: (724) 750-6935</span>
        </Link>
      </div>

      {/* Mobile Nav Bar */}
      <div className="container h-[56px] lg:hidden flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Drain Cleaning Near Me — Home">
          <Image
            src="/img/logo.svg"
            alt="Drain Cleaning Near Me"
            width={160}
            height={40}
            className="h-[32px] w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="tel:+17247506935"
            className="p-2 rounded-lg bg-primary text-white shadow-sm hover:bg-blue-700 transition"
            aria-label="Call (724) 750-6935"
          >
            <Phone size={16} className="fill-current" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-border bg-card text-text hover:bg-card/80 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-bg transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="container py-4 space-y-1" aria-label="Mobile navigation">
          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-black text-xs uppercase tracking-widest text-text hover:bg-card transition-colors italic"
              aria-expanded={mobileSection === "services"}
            >
              Services
              <ChevronDown
                size={14}
                className={cn("transition-transform", mobileSection === "services" && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden pl-4 space-y-1 mt-1 transition-all duration-200",
                mobileSection === "services" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tight text-text/80 hover:text-text hover:bg-card transition-colors italic"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Links */}
          <Link 
            href="/blogs" 
            onClick={() => setIsOpen(false)}
            className="flex items-center px-4 py-3 rounded-lg font-black text-xs uppercase tracking-widest text-text hover:bg-card transition-colors italic"
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="flex items-center px-4 py-3 rounded-lg font-black text-xs uppercase tracking-widest text-text hover:bg-card transition-colors italic"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="flex items-center px-4 py-3 rounded-lg font-black text-xs uppercase tracking-widest text-text hover:bg-card transition-colors italic"
          >
            Contact
          </Link>

          <div className="pt-2 pb-1">
            <Link
              href="tel:+17247506935"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-white font-black text-xs uppercase tracking-widest shadow-sm hover:bg-blue-700 transition italic"
            >
              <Phone size={14} className="fill-current" />
              Call Now: (724) 750-6935
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
