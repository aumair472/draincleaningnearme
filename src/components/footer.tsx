"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck, Zap, Heart, ChevronRight } from "lucide-react";
import Link from "next/link";

const serviceLinks = [
  { name: "Kitchen Sink Drain Cleaning Services", href: "/kitchen-sink-drain-cleaning-unclogging-services" },
  { name: "Bathroom Drain Cleaning Services", href: "/bathroom-drain-cleaning-unclogging-services" },
  { name: "Emergency Drain Cleaning Services", href: "/emergency-drain-cleaning-services" },
  { name: "Hydro Jetting Drain Cleaning", href: "/hydro-jetting-cleaning-services" },
  { name: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa" },
  { name: "Drain Camera Inspection Services", href: "/drain-camera-inspection" },
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
  { name: "Drain Cleaning in Jacksonville", href: "/drain-cleaning-jacksonville" },
  { name: "Drain Cleaning in San Francisco", href: "/drain-cleaning-san-francisco" },
  { name: "Drain Cleaning in Indianapolis", href: "/drain-cleaning-indianapolis" },
  { name: "Drain Cleaning in Fort Worth", href: "/drain-cleaning-fort-worth" },
  { name: "Drain Cleaning in Columbus", href: "/drain-cleaning-columbus" },
  { name: "Drain Cleaning in Charlotte", href: "/drain-cleaning-charlotte" },
  { name: "Drain Cleaning in Detroit", href: "/drain-cleaning-detroit" },
  { name: "Drain Cleaning in El Paso", href: "/drain-cleaning-el-paso" },
  { name: "Drain Cleaning in Seattle", href: "/drain-cleaning-seattle" },
  { name: "Drain Cleaning in Denver", href: "/drain-cleaning-denver" },
  { name: "Drain Cleaning in Memphis", href: "/drain-cleaning-memphis" },
  { name: "Drain Cleaning in Nashville", href: "/drain-cleaning-nashville" },
  { name: "Drain Cleaning in Baltimore", href: "/drain-cleaning-baltimore" },
  { name: "Drain Cleaning in Boston", href: "/drain-cleaning-boston" },
  { name: "Drain Cleaning in Oklahoma City", href: "/drain-cleaning-oklahoma-city" },
  { name: "Drain Cleaning in Las Vegas", href: "/drain-cleaning-las-vegas" },
  { name: "Drain Cleaning in Portland", href: "/drain-cleaning-portland" },
  { name: "Drain Cleaning in Washington DC", href: "/drain-cleaning-washington-dc" },
];

const companyLinks = [
  { name: "About Drain Cleaning Near Me", href: "/about" },
  { name: "Contact Us for Drain Service", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
];

function FooterLinkList({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            <ChevronRight
              size={13}
              className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 shrink-0"
            />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 relative pt-20 pb-12 overflow-hidden text-slate-300">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 mb-16">

          {/* Brand Column — spans 2 cols on xl */}
          <div className="space-y-6 xl:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-white inline-block" aria-label="Drain Cleaning Near Me — Home">
              DrainCleaning<span className="text-primary font-normal">NearMe</span>
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-sm text-slate-400">
              We connect you with licensed local drain cleaning and sewer cleaning professionals across the
              United States. We are a lead generation service — not a plumbing contractor.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} className="text-primary" /> Licensed
              </div>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Zap size={16} className="text-primary" /> Verified
              </div>
            </div>

            {/* Contact Block */}
            <div className="space-y-4 pt-2">
              <a
                href="tel:+17247506935"
                aria-label="Call Drain Cleaning Near Me at (724) 750-6935"
                className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl border border-white/10 transition-all w-fit"
              >
                <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={22} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Call Anytime 24/7</p>
                  <p className="text-xl font-black text-white tracking-tight">(724) 750-6935</p>
                </div>
              </a>

              <div className="flex items-start gap-3 px-1">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-400 leading-relaxed">
                  209 Mountain Rd PL NE Ste R<br />
                  Albuquerque, NM 87110, USA
                </p>
              </div>
            </div>

          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Our Services</h3>
            <FooterLinkList links={serviceLinks} />
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Service Areas</h3>
            <FooterLinkList links={locationLinks} />
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h3>
            <FooterLinkList links={companyLinks} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-500">
              &copy; {new Date().getFullYear()} DrainCleaningNearMe.us &mdash; All Rights Reserved.
            </p>
            <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
              Developed with <Heart size={13} className="text-primary fill-primary" /> in the USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
