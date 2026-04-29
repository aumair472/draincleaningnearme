"use client";

import { motion } from "framer-motion";
import { 
  Scale as ScaleIcon, 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Smartphone, 
  Users, 
  Waves, 
  Zap, 
  Wrench, 
  Clock, 
  AlertTriangle,
  Gavel,
  RefreshCcw,
  Globe,
  ArrowRight,
  ShieldCheck,
  Building,
  MapPin,
  MessageSquare,
  CreditCard,
  Lock
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function TermsClient() {
  const mainTelLink = "tel:+17247506935";

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      {/* 🔹 HERO SECTION */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
          <div className="absolute top-0 w-full h-[500px] bg-orange-500/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold uppercase tracking-widest text-orange-600 mb-8"
          >
            <ScaleIcon size={14} /> User Agreement
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-text leading-[1.1] uppercase italic"
          >
            Terms of Service & <br className="hidden md:block" />
            <span className="text-orange-600 italic border-b-4 border-orange-600/20">Customer Agreement</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text/60 font-medium max-w-2xl mx-auto mb-4"
          >
            Effective Date: March 30, 2026
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-card border border-border mt-12 text-left"
          >
            <p className="text-lg text-text/80 font-medium leading-relaxed italic mb-6">
              Welcome to DrainCleaningNearMe. These Terms of Service govern your access to and use of our website, services, forms and communications. 
            </p>
            <div className="p-5 bg-orange-600/5 border border-orange-600/20 rounded-2xl flex items-center gap-4 text-orange-600 font-black text-sm uppercase tracking-tighter">
               <AlertTriangle size={20} className="shrink-0" />
               By using this website, you agree to these Website Terms and Conditions. If you do not agree, please stop using the site.
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 INTRO SECTION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-text/70 font-medium leading-relaxed">
            <p>
              DrainCleaningNearMe operates as a lead generation platform connecting users with local drain cleaning professionals across the United States.
            </p>
            <p className="p-6 border-l-4 border-orange-600 bg-orange-600/5 rounded-r-2xl font-black text-text italic">
              These Terms define your rights, responsibilities and limitations when using our platform.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 MAIN CONTENT COLUMN */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          {/* 1. ACCEPTANCE OF TERMS */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
              <span className="text-orange-600 text-5xl opacity-20">01</span> 1. Acceptance of Terms
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
               {[
                 { t: "Lead Generation", d: "We connect you with local experts and do not provide direct drain services.", Icon: Zap },
                 { t: "Legal Authority", d: "Users must be at least 18 years old and capable of binding agreements.", Icon: Gavel },
                 { t: "Service Limitations", d: "We do not guarantee same-day service or specific technician availability.", Icon: RefreshCcw }
               ].map((item, idx) => {
                 const Icon = item.Icon;
                 return (
                   <div key={idx} className="p-8 rounded-3xl bg-orange-600/5 border border-orange-600/20 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-600 flex items-center justify-center mx-auto mb-6">
                         <Icon size={24} />
                      </div>
                      <h4 className="text-sm font-black text-text uppercase tracking-widest mb-2 leading-none">{item.t}</h4>
                      <p className="text-xs text-text/60 font-bold uppercase tracking-widest leading-relaxed">{item.d}</p>
                   </div>
                 );
               })}
            </div>
          </div>

          {/* 2. DESCRIPTION OF SERVICES */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
              <span className="text-orange-600 text-5xl opacity-20">02</span> 2. Description of Services
            </h2>
            <div className="p-10 rounded-[2.5rem] bg-card border border-border">
               <p className="text-lg text-text/80 mb-8 font-medium">
                  DrainCleaningNearMe is a <span className="text-orange-600 font-black italic">lead generation platform</span>, not a direct service provider. We help connect users with professionals for:
               </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {["Drain Cleaning", "Emergency Services", "Sewer Cleaning", "Hydro Jetting", "Main Drain Repair", "Full Restoration"].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-bg border border-border text-xs font-black uppercase tracking-widest text-text/60">
                       <Zap size={14} className="text-orange-600" /> {s}
                    </div>
                  ))}
               </div>
               <div className="flex items-center justify-center gap-3 p-4 bg-orange-600/5 rounded-2xl text-orange-600 font-black text-[10px] uppercase tracking-widest">
                  <RefreshCcw size={14} /> No guarantee of service availability
               </div>
            </div>
          </div>

          {/* 3. NO DIRECT SERVICE PROVIDER DISCLAIMER */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
               <span className="text-orange-600 text-5xl opacity-20">03</span> 3. No Direct Service Provider Disclaimer
            </h2>
            <div className="p-10 rounded-[3rem] bg-orange-600 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={100} />
               </div>
               <div className="relative z-10">
                  <ul className="space-y-6 mb-10">
                     {[
                       "We do NOT perform plumbing or drain cleaning services directly.",
                       "We do NOT control, employ or supervise the independent contractors.",
                       "The service agreement is strictly between you and the service provider."
                     ].map((point, i) => (
                       <li key={i} className="flex items-start gap-4 text-xl font-black uppercase tracking-tighter italic leading-none">
                          <CheckCircle2 size={24} className="shrink-0" /> {point}
                       </li>
                     ))}
                  </ul>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/20">
                     {["Pricing", "Work Quality", "Scheduling", "Licensing"].map((item, i) => (
                       <div key={i} className="flex flex-col items-center gap-2 text-center">
                          <XCircle size={20} className="text-white opacity-50" />
                          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Not Responsible For {item}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* 4. USER ELIGIBILITY */}
          <div className="p-10 rounded-[3rem] bg-card border border-border text-center">
            <h2 className="text-2xl font-black text-text uppercase italic mb-8 flex items-center justify-center gap-4">
               <Users size={32} className="text-orange-600" /> 4. User Eligibility
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
               {["Must be 18+", "Must use site legally", "Homeowners", "Property Managers", "Commercial Businesses"].map((tag, i) => (
                 <div key={i} className="px-6 py-3 rounded-2xl bg-orange-600/10 text-orange-600 font-black uppercase text-xs tracking-widest border border-orange-600/20">
                    {tag}
                 </div>
               ))}
            </div>
          </div>

          {/* 5. USER RESPONSIBILITIES */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
              <span className="text-orange-600 text-5xl opacity-20">05</span> 5. User Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-10 rounded-[2.5rem] bg-card border border-border border-t-4 border-t-primary">
                  <h3 className="text-lg font-black text-primary uppercase italic tracking-widest mb-8 flex items-center gap-3">
                     <CheckCircle2 size={20} /> You Agree To:
                  </h3>
                  <ul className="space-y-4">
                     {["Provide accurate contact information", "Submit real-time service requests", "Cooperate with expert communication"].map((item, i) => (
                       <li key={i} className="text-sm font-bold text-text uppercase tracking-widest border-b border-border/50 pb-4 last:border-0">{item}</li>
                     ))}
                  </ul>
               </div>
               <div className="p-10 rounded-[2.5rem] bg-card border border-border border-t-4 border-t-red-600">
                  <h3 className="text-lg font-black text-red-600 uppercase italic tracking-widest mb-8 flex items-center gap-3">
                     <XCircle size={20} /> You Must NOT:
                  </h3>
                  <ul className="space-y-4">
                     {["Submit false or fraudulent info", "Hack or abuse website security", "Use bots or automated scraping tools"].map((item, i) => (
                       <li key={i} className="text-sm font-bold text-text/40 uppercase tracking-widest border-b border-border/50 pb-4 last:border-0">{item}</li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* 6. COMMUNICATION CONSENT */}
          <div className="p-10 rounded-[3rem] bg-secondary/5 border border-border flex flex-col items-center text-center">
             <MessageSquare size={40} className="text-orange-600 mb-6" />
             <h2 className="text-2xl font-black text-text uppercase italic mb-6">6. Communication Consent</h2>
             <p className="text-lg text-text/60 font-medium mb-10 max-w-xl">
               By submitting info, you agree to receive phone calls, SMS text messages and emails for service coordination and marketing.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {["Phone Calls", "SMS Text", "Support Email", "Follow-ups"].map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border text-[xs] font-black uppercase tracking-[0.2em]">{c}</div>
                ))}
             </div>
          </div>

          {/* 7. THIRD-PARTY SERVICES */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-text italic tracking-tighter flex items-center gap-4">
               <span className="text-orange-600 text-5xl opacity-20">07</span> 7. Third-Party Services
            </h2>
            <div className="p-10 rounded-[2.5rem] bg-card border border-border italic text-text/60 font-medium leading-relaxed">
               <p className="mb-8">
                  We share data with independent local contractors and lead routing partners. All contractors are separate entities.
               </p>
               <h4 className="text-orange-600 font-black uppercase text-sm mb-4 tracking-widest">We are NOT responsible for:</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Pricing Disputes", "Service Delays", "Property Damage", "Contractor Misconduct"].map((n, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-bg border border-border">
                       <ShieldAlert size={16} className="text-orange-600" />
                       <span className="text-xs font-black uppercase tracking-widest">{n}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* 8. PRICING & PAYMENTS */}
          <div className="p-10 rounded-[3rem] bg-card border border-border flex flex-col md:flex-row gap-12 items-center">
             <div className="w-20 h-20 rounded-full bg-orange-600/10 text-orange-600 flex items-center justify-center shrink-0">
                <CreditCard size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-black text-text uppercase italic mb-4">8. Pricing and Payments</h3>
                <p className="text-text/60 font-medium italic mb-6">
                   Pricing is set exclusively by service providers. We are not the merchant of record and do not handle billing or payment disputes for on-site services.
                </p>
                <div className="text-orange-600 font-black uppercase text-xs tracking-widest bg-orange-600/5 px-6 py-2 rounded-full inline-block">
                   👉 Payments go directly to contractor
                </div>
             </div>
          </div>

          {/* 9-11. POLICIES & WARRANTIES */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 rounded-[2.5rem] bg-card border border-border">
                <h3 className="text-xl font-black text-text uppercase italic mb-6">9. Intellectual Property</h3>
                <p className="text-sm text-text/60 font-medium leading-relaxed mb-6">Website content, design, and proprietary code are owned by DrainCleaningNearMe. Unauthorized copying is strictly prohibited.</p>
                <div className="flex gap-2">
                   <div className="w-8 h-8 rounded-lg bg-primary/20" />
                </div>
             </div>
             <div className="p-10 rounded-[2.5rem] bg-card border border-border">
                <h3 className="text-xl font-black text-text uppercase italic mb-6">10. Privacy Policy Reference</h3>
                <p className="text-sm text-text/60 font-medium leading-relaxed mb-8">Your data usage is governed by our separate Privacy Policy document available on our site.</p>
                <Link href="/privacy-policy" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 border border-border rounded-xl text-xs font-black uppercase tracking-widest hover:bg-secondary/20 transition-all">
                   <Lock size={14} /> View Privacy Policy
                </Link>
             </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-card border border-border text-center">
             <h3 className="text-2xl font-black text-text uppercase italic mb-6">11. Disclaimer of Warranties</h3>
             <p className="max-w-2xl mx-auto text-lg text-text/60 font-medium italic mb-10">Website is provided on an “AS IS” and “AS AVAILABLE” basis without guarantees of accuracy or error-free operation.</p>
             <div className="flex justify-center gap-10">
                {["Accuracy", "Availability", "Error-Free"].map((g, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                     <XCircle size={16} className="text-orange-600 opacity-50" />
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-30">No guarantee on {g}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* 12. LIMITATION OF LIABILITY */}
          <div className="p-10 rounded-[3rem] bg-red-600 text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                <AlertTriangle size={200} />
             </div>
             <h2 className="text-3xl font-black uppercase italic mb-8 border-b border-white/20 pb-4">12. Limitation of Liability</h2>
             <p className="text-xl font-medium leading-relaxed mb-10 italic max-w-2xl">
               DrainCleaningNearMe is NOT liable for property damage, service performance issues, data loss, or business interruptions arising from use of the platform.
             </p>
             <div className="px-8 py-4 bg-white text-red-600 rounded-2xl font-black uppercase text-sm tracking-widest inline-block">
                Liability limited to amount paid (if any)
             </div>
          </div>

          {/* 13-18. INDEMNITY & GOVERNANCE */}
          <div className="space-y-12">
            {[
              { id: "13", t: "13. Indemnification", d: "You agree to protect, indemnify, and hold DrainCleaningNearMe harmless from all third-party claims, legal disputes, and damages." },
              { id: "14", t: "14. Service Availability and Modifications", d: "We do NOT guarantee technician coverage in all geographic locations or the availability of same-day emergency support." },
              { id: "15", t: "15. Termination of Use", d: "We reserve the right to suspend site access for terms violations, suspected fraud, or abuse of our communications systems." },
              { id: "16", t: "16. Governing Law", d: "These specific Website Terms are governed by the laws of the State of New Mexico and applicable United States law." },
              { id: "17", t: "17. Dispute Resolution and Arbitration", d: "Disputes must first be addressed informally. Legal claims will be handled via individual arbitration; no class action lawsuits allowed." },
              { id: "18", t: "18. Changes to These Terms", d: "We may update these terms at any time. Significant changes will be posted with a new effective date at the top of this page." }
            ].map((section, i) => (
              <div key={i} className="space-y-3 group border-b border-border/50 pb-8 last:border-0">
                 <h4 className="text-sm font-black text-text uppercase tracking-widest group-hover:text-orange-600 transition-colors flex items-center gap-4">
                    <span className="text-text/20 text-xs italic font-black group-hover:text-orange-600/30 transition-colors uppercase">{section.id}</span>
                    {section.t}
                 </h4>
                 <p className="text-sm text-text/60 font-medium leading-relaxed italic">{section.d}</p>
              </div>
            ))}
          </div>

          {/* 19-20. CONTACT & FINAL AGREEMENT */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 rounded-[3rem] bg-card border border-border space-y-6">
                <h3 className="text-2xl font-black text-text uppercase italic tracking-tighter">19. Contact Information</h3>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 text-sm font-bold text-text uppercase tracking-widest">
                      <Globe size={18} className="text-orange-600" /> draincleaningnearme.us
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold text-text uppercase tracking-widest">
                      <Smartphone size={18} className="text-orange-600" /> (724) 750-6935
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold text-text uppercase tracking-widest">
                      <MapPin size={18} className="text-orange-600" /> Albuquerque, NM
                   </div>
                </div>
             </div>
             <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center text-center italic">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary),transparent)] opacity-20 pointer-events-none" />
                <h3 className="text-2xl font-black uppercase italic mb-6">20. Final Agreement</h3>
                <p className="text-xs opacity-60 font-bold uppercase tracking-widest max-w-xs mx-auto mb-8">By using this website, you confirm agreement to the lead generation and third-party service structure.</p>
                <div className="flex justify-center">
                   <ShieldCheck size={40} className="text-primary" />
                </div>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
