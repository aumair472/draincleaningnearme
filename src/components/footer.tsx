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
    <footer className="bg-slate-900 relative pt-20 pb-12 overflow-hidden text-slate-300">
      <div className="container px-4 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1.5">
            <Link href="/" className="text-xl font-bold tracking-tight text-white inline-block">
              DrainCleaning<span className="text-primary font-normal">NearMe</span>
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-sm text-slate-400">
              We connect you with licensed local drain cleaning and sewer cleaning professionals across the United States.
              We are a lead generation service — not a plumbing contractor.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} className="text-primary" /> Licensed
              </div>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Zap size={16} className="text-primary" /> Verified
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Quick Services</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company Info</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Contact Center</h4>
            <div className="space-y-6">
              <Link
                href="tel:+17247506935"
                className="flex items-center gap-4 group hover:bg-card/5 p-4 rounded-xl border border-white/10 transition-all w-fit"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Call Anytime 24/7</p>
                  <p className="text-lg font-bold text-white tracking-tight">(724) 750-6935</p>
                </div>
              </Link>
              <div className="flex items-start gap-4 px-2">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <p className="text-sm font-medium text-slate-400 leading-relaxed">
                  209 Mountain Rd PL NE Ste R<br />
                  Albuquerque, NM 87110, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-text/60">
              &copy; {new Date().getFullYear()} DrainCleaningNearMe.us &mdash; All Rights Reserved.
            </p>
            <p className="text-sm font-medium text-text/60 flex items-center gap-2">
              Developed with <Heart size={14} className="text-primary fill-primary" /> in the USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
