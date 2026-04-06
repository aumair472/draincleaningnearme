"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ChevronRight, Zap, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
  { name: "Kitchen Sink Services", href: "/kitchen-sink-drain-cleaning-unclogging-services/" },
  { name: "Bathroom Drain Services", href: "/bathroom-drain-cleaning-unclogging-services/" },
  { name: "Emergency Drain Services", href: "/emergency-drain-cleaning-services/" },
  { name: "Hydro Jetting Services", href: "/hydro-jetting-cleaning-services/" },
  { name: "Sewer Line Services", href: "/sewer-line-cleaning-repair-usa/" },
  { name: "Drain Camera Inspection", href: "/drain-camera-inspection/" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Terms of Service", href: "/terms/" },
  { name: "About Us", href: "/about/" },
  { name: "Contact Us", href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1120] relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container px-20 relative z-10 italic">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4 sm:px-0">
          {/* Brand Column */}
          <div className="space-y-8 lg:col-span-1.5">
            <Link href="/" className="text-1xl font-black uppercase italic tracking-tighter text-white inline-block">
              DrainCleaningNearMe<span className="text-primary italic">.us</span>
            </Link>
            <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-sm uppercase tracking-widest leading-loose">
              We connect you with licensed local drain cleaning and sewer cleaning professionals across the United States.
              We are a lead generation service — not a plumbing contractor.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
                <ShieldCheck size={14} className="fill-primary text-white" /> Licensed
              </div>
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
                <Zap size={14} className="fill-primary text-white" /> Verified
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8 italic">Quick Services</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group italic"
                  >
                    <ChevronRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8 italic">Company Info</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group italic"
                  >
                    <ChevronRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8 italic">Contact Center</h4>
            <div className="space-y-6">
              <Link
                href="tel:+17247506935"
                className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-2xl border border-white/5 transition-all w-fit"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Call Anytime 24/7</p>
                  <p className="text-sm font-black uppercase italic tracking-widest text-white leading-none">(724) 750-6935</p>
                </div>
              </Link>
              <div className="flex items-center gap-4 px-4">
                <MapPin size={18} className="text-primary shrink-0" />
                <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 leading-relaxed italic">
                  209 Mountain Rd PL NE Ste R<br />
                  Albuquerque, NM 87110, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 italic">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              &copy; 2025 DrainCleaningNearMe.us &mdash; All Rights Reserved.
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 flex items-center gap-2 italic">
              Developed with <Heart size={12} className="text-primary fill-primary" /> in the USA
            </p>
          </div>
        </div>
      </div>

      {/* Design Flourish: Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
    </footer>
  );
}
