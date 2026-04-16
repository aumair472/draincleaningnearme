"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  ShieldAlert, 
  Clock, 
  Smartphone, 
  Mail, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Globe,
  Settings,
  HelpCircle,
  Info,
  Building,
  MapPin,
  ChevronRight
} from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function PrivacyClient() {
  const mainTelLink = "tel:+17247506935";
  const mainEmail = "privacy@draincleaningnearme.us";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      {/* 🔹 HERO SECTION */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
          <div className="absolute top-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-8"
          >
            <ShieldCheck size={14} /> Legal & Compliance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-text leading-[1.1] uppercase italic"
          >
            Privacy <span className="text-primary italic border-b-4 border-primary/20">Policy:</span> <br className="hidden md:block" />
            Your Data & Security Matters
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text/60 font-medium max-w-2xl mx-auto mb-4"
          >
            Effective Date: March 26, 2026
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-card border border-border mt-12 text-left"
          >
            <p className="text-lg text-text/80 font-medium leading-relaxed italic">
              This Privacy Policy explains how DrainCleaningNearMe collects, uses, shares and protects information when you visit our website, contact us or request drain cleaning services. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 INTRO SECTION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-text/70 font-medium leading-relaxed">
            <p>
              DrainCleaningNearMe provides drain cleaning services across the United States and connects customers with local professionals for emergency drain cleaning, sewer line cleaning, clog removal and related services.
            </p>
            <p className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-2xl">
              This policy is designed to be clear, transparent and compliant with <span className="text-text font-black">GDPR, CCPA/CPRA</span> and other applicable privacy laws.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 MAIN CONTENT COLUMN */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          {/* 1. WHO WE ARE */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
              <span className="text-primary text-5xl opacity-20">01</span> 1. Who We Are
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { label: "Business Name", value: "DrainCleaningNearMe", Icon: Building },
                 { label: "Website", value: "draincleaningnearme.us", Icon: Globe, href: "https://www.draincleaningnearme.us/" },
                 { label: "Email", value: mainEmail, Icon: Mail, href: `mailto:${mainEmail}` },
                 { label: "Phone", value: "(724) 750-6935", Icon: Smartphone, href: mainTelLink },
                 { label: "Address", value: "209 Mountain Rd PL NE Ste R, Albuquerque, NM", Icon: MapPin }
               ].map((item, idx) => {
                 const Icon = item.Icon;
                 return (
                   <div key={idx} className="p-6 rounded-3xl bg-card border border-border flex items-start gap-4 hover:border-primary/30 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                         <Icon size={20} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-text/40 mb-1">{item.label}</p>
                         {item.href ? (
                           <a href={item.href} className="text-sm font-bold text-text hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20">{item.value}</a>
                         ) : (
                           <p className="text-sm font-bold text-text">{item.value}</p>
                         )}
                      </div>
                   </div>
                 );
               })}
            </div>
          </div>

          {/* 2. INFORMATION WE COLLECT */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
              <span className="text-primary text-5xl opacity-20">02</span> 2. Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { 
                   title: "Information You Provide", 
                   items: ["Name & Email", "Phone Number", "Service ZIP", "Issue Details", "Appointment Info"] 
                 },
                 { 
                   title: "Technical Data", 
                   items: ["IP Address", "Browser/Device", "Pages Visited", "Time Spent"] 
                 },
                 { 
                   title: "Usage Data", 
                   items: ["Form Submissions", "Calls Logged", "Clicks & Taps", "Navigation Path"] 
                 },
                 { 
                   title: "Marketing Data", 
                   items: ["Ad Interactions", "Cookie Settings", "Pixel Tracking", "Campaign Prefs"] 
                 }
               ].map((group, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-card border border-border">
                    <h3 className="text-lg font-black text-text uppercase italic mb-6 border-b border-border pb-4">{group.title}</h3>
                    <ul className="space-y-3">
                       {group.items.map((item, j) => (
                         <li key={j} className="flex items-center gap-3 text-sm text-text/60 font-bold uppercase tracking-widest leading-none">
                            <ChevronRight size={14} className="text-primary" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
          </div>

          {/* 3. HOW WE COLLECT DATA */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
               <span className="text-primary text-5xl opacity-20">03</span> 3. How We Collect Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { t: "Directly from You", d: "Forms, calls, and email communications.", Icon: Smartphone },
                 { t: "Automatically", d: "Cookies, server logs, and analytics tracking.", Icon: Globe },
                 { t: "Third Parties", d: "Marketing tools, CRM, and service partners.", Icon: Settings }
               ].map((box, idx) => {
                 const Icon = box.Icon;
                 return (
                   <div key={idx} className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                         <Icon size={24} />
                      </div>
                      <h4 className="text-sm font-black text-text uppercase tracking-widest mb-2">{box.t}</h4>
                      <p className="text-sm text-text/60 font-medium leading-relaxed">{box.d}</p>
                   </div>
                 );
               })}
            </div>
          </div>

          {/* 4. HOW WE USE DATA */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
              <span className="text-primary text-5xl opacity-20">04</span> 4. How We Use Information
            </h2>
            <div className="space-y-6 text-text/70 font-medium">
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { t: "Service Delivery", d: "Matching users with local experts and scheduling essential drain services." },
                    { t: "Customer Support", d: "Responding to inquiries, following up on performance, and ensuring satisfaction." },
                    { t: "Website Improvement", d: "Analyzing user behavior to improve site speed, UI, and navigation experience." },
                    { t: "Marketing & Ads", d: "Personalizing ads and retargeting high-intent users on third-party platforms." },
                    { t: "Security & Fraud", d: "Preventing spam, protecting our servers, and ensuring user safety." }
                  ].map((use, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-all">
                       <CheckCircle2 size={24} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                       <div>
                          <h4 className="font-black text-text uppercase italic tracking-tighter mb-1 leading-none">{use.t}</h4>
                          <p className="text-sm leading-relaxed">{use.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* 5. LEGAL BASIS */}
          <div className="p-10 rounded-[3rem] bg-card border border-border shadow-sm">
            <h2 className="text-2xl font-black text-text uppercase italic mb-8">5. Legal Bases for Processing</h2>
            <div className="flex flex-wrap gap-4">
               {["Consent", "Contract Performance", "Legitimate Interest", "Legal Obligations"].map((tag, i) => (
                 <div key={i} className="px-6 py-3 rounded-2xl bg-primary text-white font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                    {tag}
                 </div>
               ))}
            </div>
          </div>

          {/* 6. COOKIES & TRACKING */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter">6. Cookies and Tracking Technologies</h2>
            <div className="grid sm:grid-cols-3 gap-6">
               {[
                 { t: "Essential", d: "Necessary for core site functionality." },
                 { t: "Analytics", d: "Tools like Google Analytics for performance." },
                 { t: "Marketing", d: "Meta Pixel & retargeting technologies." }
               ].map((c, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-secondary/5 border border-border text-center">
                    <h4 className="text-sm font-black text-text uppercase tracking-widest mb-3 underline decoration-primary/30 underline-offset-4">{c.t}</h4>
                    <p className="text-xs text-text/60 font-bold uppercase tracking-wider">{c.d}</p>
                 </div>
               ))}
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border italic text-sm text-center text-text/60">
               👉 Manage your preferences via browser settings or our dedicated cookie banner.
            </div>
          </div>

          {/* 7. INFORMATION SHARING */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter">7. How We Share Information</h2>
            <div className="bg-red-600/5 border border-red-600/20 p-8 rounded-3xl text-center mb-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={100} />
               </div>
               <h3 className="text-2xl font-black text-text uppercase tracking-widest mb-4">We do NOT sell personal data.</h3>
               <p className="text-lg text-text/60 font-medium italic">We only share data with local technicians and partners to fulfill your service requests.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
               {["Official Service Providers", "Local Professional Technicians", "Marketing & Growth Platforms", "Legal & Regulatory Authorities"].map((cat, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:bg-primary/5 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                       <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-bold text-text uppercase tracking-widest">{cat}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* 8. YOUR PRIVACY RIGHTS */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter">8. Your Privacy Rights</h2>
            <div className="space-y-4">
               {[
                 { state: "California (CCPA/CPRA)", rights: ["Access Your Data", "Delete Information", "Correct Errors", "Opt-out / Shine the Light"] },
                 { state: "Other U.S. States", rights: ["Access Requests", "Deletion Requests", "Data Portability"] },
                 { state: "GDPR (EU Users)", rights: ["Access & Erasure", "Restrict Processing", "Portability & Objection"] }
               ].map((region, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-card border border-border hover:shadow-xl transition-all h-full">
                    <h4 className="text-lg font-black text-text uppercase italic mb-6 border-l-4 border-primary pl-4">{region.state}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {region.rights.map((r, j) => (
                         <div key={j} className="text-[10px] font-black uppercase tracking-widest text-text/40 bg-bg p-3 rounded-xl text-center">
                            {r}
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-12 p-10 rounded-[3rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary),transparent)] opacity-20 pointer-events-none" />
               <h3 className="text-xl font-black uppercase italic mb-8">Contact Our Privacy Team</h3>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`mailto:${mainEmail}`} className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase italic tracking-widest text-sm shadow-xl hover:scale-105 transition-transform">
                     <Mail size={16} /> {mainEmail}
                  </a>
                  <a href={mainTelLink} className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-black uppercase italic tracking-widest text-sm hover:bg-white/20 transition-all">
                     <Smartphone size={16} /> (724) 750-6935
                  </a>
               </div>
            </div>
          </div>

          {/* REMAINING SECTIONS (9-22) - STACKED READABLE LIST */}
          <div className="space-y-12">
            {[
              { id: "09", t: "9. Do Not Sell My Personal Information", d: "Users can request a full opt-out via the contact methods listed above. We strictly follow the 'Do Not Sell' protocols under CCPA." },
              { id: "10", t: "10. Data Retention Policy", d: "Data is stored only as long as necessary for fulfilling your service requests, legal compliance, and internal security audit requirements." },
              { id: "11", t: "11. Data Security Measures", d: "We employ industry-standard SSL encryption, secure firewall-protected servers, strict access control, and constant system monitoring." },
              { id: "12", t: "12. Third-Party Links", d: "Our website may contain links to partner sites. We are not responsible for the privacy practices of external websites." },
              { id: "13", t: "13. Children’s Privacy", d: "We do not knowingly collect personal data from children under 13. If you believe a child has provided data, please contact us for immediate deletion." },
              { id: "14", t: "14. Your Choices", d: "You can opt out of marketing emails, manage cookies through browser settings, and control how we communicate with you via phone." },
              { id: "15", t: "15. Website Data Usage and Analytics", d: "Used primarily for performance tracking, conversion attribution, and continuous user experience improvements." },
              { id: "16", t: "16. State Law Compliance", d: "We comply with all applicable U.S. state privacy laws including Virginia’s VCDPA, Colorado’s CPA, and others as they emerge." },
              { id: "17", t: "17. Data Protection Laws and Policy Updates", d: "We may update this policy periodically to reflect changing laws or business practices. Please check this page for updates." },
              { id: "18", t: "18. California Privacy Notice", d: "Specific notice of data categories (Contact, Identifiers) and usage purposes (Service Matching) as mandated by California law." },
              { id: "19", t: "19. International Data Transfers", d: "Your data may be processed in the United States and other regions where our partners and servers operate." },
              { id: "20", t: "20. Accessibility and Readability", d: "We aim to keep this policy clear and accessible. If you require an alternative format, please contact our support team." },
              { id: "21", t: "21. Contact Information", d: "For any privacy-related matters, contact: DrainCleaningNearMe, Albuquerque, NM. Phone: (724) 750-6935." },
              { id: "22", t: "22. Updates to This Policy", d: "Last Updated March 26, 2026. Substantial updates will be highlighted on this page with a revised effective date." }
            ].map((section, i) => (
              <div key={i} className="space-y-3 group border-b border-border/50 pb-8 last:border-0">
                 <h4 className="text-sm font-black text-text uppercase tracking-widest group-hover:text-primary transition-colors flex items-center gap-4">
                    <span className="text-text/20 text-xs italic font-black group-hover:text-primary/30 transition-colors uppercase">{section.id}</span>
                    {section.t}
                 </h4>
                 <p className="text-sm text-text/60 font-medium leading-relaxed italic">{section.d}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
