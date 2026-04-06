"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 italic font-medium">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary/20 mb-6">
            <ShieldCheck size={14} /> Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Effective date: March 26, 2026. This Privacy Policy explains how DrainCleaningNearMe 
            collects, uses, shares and protects information when you visit our website or interact 
            with our services.
          </p>
        </div>

        <div className="space-y-12">
            <section className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border shadow-xl">
               <h2 className="text-2xl font-black uppercase italic tracking-tight mb-6">1. Who We Are</h2>
               <p className="text-slate-500 mb-6 font-medium">
                 DrainCleaningNearMe is responsible for collecting and using your personal information. 
                 We act as the data controller for the information covered by this policy.
               </p>
               <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b pb-2"><strong>Business Name:</strong> DrainCleaningNearMe</li>
                  <li className="flex justify-between border-b pb-2"><strong>Email:</strong> privacy@draincleaningnearme.us</li>
                  <li className="flex justify-between border-b pb-2"><strong>Phone:</strong> (724) 750-6935</li>
                  <li className="flex justify-between border-b pb-2"><strong>Address:</strong> 209 Mountain Rd PL NE Ste R, Albuquerque, NM 87110, USA</li>
               </ul>
            </section>

            <section className="space-y-8">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                     <h3 className="text-xl font-black uppercase italic mb-4">2. Collection</h3>
                     <ul className="space-y-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                        <li>Name & Contact Info</li>
                        <li>Service Location & ZIP</li>
                        <li>Technical & Device Data</li>
                        <li>Usage & Website Activity</li>
                     </ul>
                  </div>
                  <div className="p-8 rounded-3xl bg-primary text-white shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                     <h3 className="text-xl font-black uppercase italic mb-4">3. Usage</h3>
                     <ul className="space-y-2 text-xs text-white/50 font-bold uppercase tracking-widest">
                        <li>Service Delivery & Matching</li>
                        <li>Customer Support & Quotes</li>
                        <li>Website Improvements</li>
                        <li>Fraud Prevention & Security</li>
                     </ul>
                  </div>
               </div>
            </section>

            <section className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border shadow-xl">
               <h2 className="text-2xl font-black uppercase italic tracking-tight mb-8">Detailed Disclosures</h2>
               <div className="space-y-8 text-slate-500 font-medium leading-relaxed">
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black uppercase italic text-sm mb-2">4. Sharing Information</h4>
                    <p>
                        We do not sell personal information for money. We share data only with service providers, 
                        marketing platforms, and trusted local service partners to fulfill your requests.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black uppercase italic text-sm mb-2">5. California Privacy Rights (CCPA)</h4>
                    <p>
                        California residents have the right to know, delete, correct, and opt-out of the 
                        sale or sharing of personal information. Contact us with the subject 
                        &quot;Do Not Sell My Personal Information&quot; to exercise these rights.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black uppercase italic text-sm mb-2">6. Cookies & Tracking</h4>
                    <p>
                        We use essential, analytics, and marketing cookies to help our website function 
                        and measure performance. You can manage these through your browser settings.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black uppercase italic text-sm mb-2">7. Data Retention & Security</h4>
                    <p>
                        We keep personal information only as long as necessary for business, legal, or 
                        regulatory purposes. We use SSL encryption and secure servers to protect your data.
                    </p>
                  </div>
               </div>
            </section>

            <section className="p-10 rounded-[3rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden italic">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary),transparent)] opacity-20 pointer-events-none" />
               <h2 className="text-2xl font-black uppercase italic mb-4">Contact Privacy Team</h2>
               <p className="text-sm opacity-70 mb-8 max-w-lg mx-auto">
                 For questions or privacy requests under GDPR, CCPA, or other state laws, 
                 recharge out to our dedicated privacy office.
               </p>
               <a href="mailto:privacy@draincleaningnearme.us" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase italic tracking-widest shadow-xl hover:scale-105 transition-transform">
                  <Lock size={16} /> privacy@draincleaningnearme.us
               </a>
            </section>
        </div>
      </div>
    </div>
  );
}
