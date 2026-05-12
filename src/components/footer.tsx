"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, ShieldCheck, Zap, Heart, ChevronRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import React from "react";

const serviceGroups = [
  {
    title: "Drain Cleaning",
    links: [
      { name: "Kitchen Sink Drain Cleaning Services", href: "/kitchen-sink-drain-cleaning-unclogging-services" },
      { name: "Bathroom Drain Cleaning Services", href: "/bathroom-drain-cleaning-unclogging-services" },
    ]
  },
  {
    title: "Emergency Services",
    links: [
      { name: "Emergency Drain Cleaning Services", href: "/emergency-drain-cleaning-services" },
      { name: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa" },
    ]
  },
  {
    title: "Inspection & Maintenance",
    links: [
      { name: "Hydro Jetting Drain Cleaning", href: "/hydro-jetting-cleaning-services" },
      { name: "Drain Camera Inspection Services", href: "/drain-camera-inspection" },
    ]
  }
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
  { name: "Drain Cleaning in Louisville", href: "/drain-cleaning-louisville" },
  { name: "Drain Cleaning in Milwaukee", href: "/drain-cleaning-milwaukee" },
  { name: "Drain Cleaning in Tucson", href: "/drain-cleaning-tucson" },
  { name: "Drain Cleaning in Fresno", href: "/drain-cleaning-fresno" },
  { name: "Drain Cleaning in Sacramento", href: "/drain-cleaning-sacramento" },
  { name: "Drain Cleaning in Atlanta", href: "/drain-cleaning-atlanta" },
  { name: "Drain Cleaning in Mesa", href: "/drain-cleaning-mesa" },
  { name: "Drain Cleaning in Kansas City", href: "/drain-cleaning-kansas-city" },
  { name: "Drain Cleaning in Colorado Springs", href: "/drain-cleaning-colorado-springs" },
  { name: "Drain Cleaning in Omaha", href: "/drain-cleaning-omaha" },
  { name: "Drain Cleaning in Raleigh", href: "/drain-cleaning-raleigh" },
  { name: "Drain Cleaning in Miami", href: "/drain-cleaning-miami" },
  { name: "Drain Cleaning in Virginia Beach", href: "/drain-cleaning-virginia-beach" },
  { name: "Drain Cleaning in Long Beach", href: "/drain-cleaning-long-beach" },
  { name: "Drain Cleaning in Oakland", href: "/drain-cleaning-oakland" },
  { name: "Drain Cleaning in Arlington", href: "/drain-cleaning-arlington" },
  { name: "Drain Cleaning in Wichita", href: "/drain-cleaning-wichita" },
  { name: "Drain Cleaning in Bakersfield", href: "/drain-cleaning-bakersfield" },
  { name: "Drain Cleaning in New Orleans", href: "/drain-cleaning-new-orleans" },
  { name: "Drain Cleaning in Anaheim", href: "/drain-cleaning-anaheim" },
  { name: "Drain Cleaning in Tampa", href: "/drain-cleaning-tampa" },
  { name: "Drain Cleaning in Aurora", href: "/drain-cleaning-aurora" },
  { name: "Drain Cleaning in Santa Ana", href: "/drain-cleaning-santa-ana" },
  { name: "Drain Cleaning in Riverside", href: "/drain-cleaning-riverside" },
  { name: "Drain Cleaning in Corpus Christi", href: "/drain-cleaning-corpus-christi" },
];

const companyLinks = [
  { name: "About Drain Cleaning Near Me", href: "/about" },
  { name: "Contact Us for Drain Service", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
];

function LinkItem({ link }: { link: { name: string; href: string } }) {
  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className="text-[13px] font-medium text-slate-400 hover:text-primary transition-all flex items-center gap-2 group"
      >
        <ChevronRight
          size={12}
          className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 shrink-0"
        />
        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
      </Link>
    </li>
  );
}

export function Footer() {
  const [showAllLocations, setShowAllLocations] = React.useState(false);
  
  // Split locations into chunks of 8 for columns, but we'll manage them in a responsive grid
  const initialVisibleCount = 16;
  const visibleLocations = showAllLocations ? locationLinks : locationLinks.slice(0, initialVisibleCount);

  return (
    <footer className="bg-slate-900 relative pt-16 pb-10 overflow-hidden text-slate-300 border-t border-white/5 font-body">
      <div className="container relative z-10">
        
        {/* Top Section: Brand & Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">

  {/* LEFT SIDE */}
  <div className="space-y-5">
    <Link
      href="/"
      className="text-2xl font-black tracking-tight text-white inline-block uppercase italic"
    >
      DrainCleaning
      <span className="text-primary font-black">NearMe</span>
    </Link>

    <p className="text-[13px] font-medium leading-relaxed max-w-sm text-slate-400 italic">
      Connecting you with licensed local drain cleaning and sewer experts across the USA.
      Fast response, professional results, 24/7 availability.
    </p>

    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 italic">
        <ShieldCheck size={12} /> Licensed & Insured
      </div>

      <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 italic">
        <Zap size={12} /> 24/7 Verified
      </div>
    </div>
  </div>

  {/* RIGHT SIDE (CTA + ADDRESS) */}
  <div className="space-y-5 lg:pl-6">

    {/* CALL CARD */}
    <a
      href="tel:+17247506935"
      className="flex items-center gap-3 group bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all shadow-lg"
    >
      <div className="p-2.5 bg-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Phone size={20} fill="currentColor" />
      </div>

      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-primary italic">
          Emergency Dispatch
        </p>
        <p className="text-xl font-black text-white tracking-tight uppercase italic">
          (724) 750-6935
        </p>
      </div>
    </a>

    {/* ADDRESS */}
    <div className="flex items-start gap-3">
      <MapPin size={16} className="text-primary mt-1" />
      <p className="text-[13px] font-medium text-slate-400 leading-relaxed italic">
        209 Mountain Rd PL NE Ste R <br />
        Albuquerque, NM 87110, USA
      </p>
    </div>

  </div>

</div>

          {/* Grouped Services Grid */}
          <div className="lg:col-span-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {serviceGroups.map((group) => (
      <div key={group.title} className="space-y-5">
        <div className="relative">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white italic">
            {group.title}
          </h3>
          <div className="absolute -bottom-2.5 left-0 w-6 h-0.5 bg-primary rounded-full" />
        </div>

        <ul className="space-y-3">
          {group.links.map((link) => (
            <LinkItem key={link.name} link={link} />
          ))}
        </ul>
      </div>
    ))}

    {/* Company Column */}
    <div className="space-y-5">
      <div className="relative">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white italic">
          Company
        </h3>
        <div className="absolute -bottom-2.5 left-0 w-6 h-0.5 bg-primary rounded-full" />
      </div>

      <ul className="space-y-3">
        {companyLinks.map((link) => (
          <LinkItem key={link.name} link={link} />
        ))}
      </ul>
    </div>

  </div>
</div>
        </div>

        {/* Middle Section: Service Areas Grid */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
            <div className="space-y-1">
              <h3 className="text-sm font-black text-white tracking-widest uppercase italic">Service Areas</h3>
              <p className="text-[11px] text-slate-500 font-black uppercase tracking-tight italic">Licensed experts across major US cities.</p>
            </div>
            {!showAllLocations && (
              <button 
                onClick={() => setShowAllLocations(true)}
                className="text-[11px] font-black text-primary hover:text-white transition-colors flex items-center gap-1 group uppercase italic tracking-widest"
              >
                View All <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {visibleLocations.map((link) => (
              <LinkItem key={link.name} link={link} />
            ))}
          </div>

          {!showAllLocations && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllLocations(true)}
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black text-white hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-2 group uppercase italic tracking-widest"
              >
                <Plus size={14} className="text-primary group-hover:scale-110 transition-transform" />
                Show More ({locationLinks.length - initialVisibleCount})
              </button>
            </div>
          )}

          {showAllLocations && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllLocations(false)}
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black text-white hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-2 group uppercase italic tracking-widest"
              >
                <Minus size={14} className="text-primary group-hover:scale-110 transition-transform" />
                Show Less
              </button>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-0.5">
              <p className="text-[11px] font-black text-slate-500 uppercase italic tracking-tight">
                &copy; {new Date().getFullYear()} DrainCleaningNearMe.us &mdash; Lead Generation Service.
              </p>
              <p className="text-[9px] text-slate-600 font-black uppercase italic tracking-widest">
                Not a plumbing contractor. We connect you with local licensed professionals.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-[11px] font-black text-slate-500 flex items-center gap-1.5 uppercase italic">
                Built with <Heart size={10} className="text-primary fill-primary" /> for Homeowners
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

