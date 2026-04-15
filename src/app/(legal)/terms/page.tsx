"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";
import { Scale, ShieldAlert, CheckCircle2, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 italic font-medium">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest border border-orange-500/20 mb-6">
            <Scale size={14} /> User Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Terms of <span className="text-orange-600 italic">Service</span>
          </h1>
          <p className="text-text/60 max-w-2xl mx-auto leading-relaxed">
            Effective Date: March 30, 2026. Welcome to DrainCleaningNearMe. These terms govern 
            your access to and use of our website and services.
          </p>
        </div>

        <div className="space-y-12">
            <section className="p-10 rounded-[3rem] bg-card dark:bg-slate-900 border shadow-xl">
               <h2 className="text-2xl font-black uppercase italic tracking-tight mb-8 flex items-center gap-3">
                 <ShieldAlert className="text-orange-600" /> Lead Generation Disclaimer
               </h2>
               <p className="text-text/60 mb-6 font-medium leading-relaxed">
                 DrainCleaningNearMe is NOT the direct provider of plumbing or drain cleaning services. 
                 We act as a lead generation platform that connects users with independent contractors. 
                 We do not employ, supervise, or control the professionals who perform the work.
               </p>
               <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 italic text-sm text-orange-700 dark:text-orange-400">
                  Important: All service agreements, estimates, and warranties are between 
                  you and the independent service provider.
               </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
               <section className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                  <h3 className="text-xl font-black uppercase italic mb-6">User Responsibilities</h3>
                  <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                     <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-[-2px]" /> Accurate Contact Details</li>
                     <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-[-2px]" /> Legitimate Service Requests</li>
                     <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-[-2px]" /> Lawful System Usage</li>
                  </ul>
               </section>
               <section className="p-8 rounded-3xl bg-card dark:bg-slate-900 border shadow-xl">
                  <h3 className="text-xl font-black uppercase italic text-slate-800 dark:text-white mb-6">Service Overview</h3>
                  <ul className="space-y-4 text-[11px] text-text/60 font-black uppercase tracking-widest">
                     <li className="border-b pb-2">Drain Cleaning Referrals</li>
                     <li className="border-b pb-2">Sewer Inspection Connections</li>
                     <li className="border-b pb-2">Emergency Dispatch Support</li>
                  </ul>
               </section>
            </div>

            <section className="p-10 rounded-[3rem] bg-card dark:bg-slate-900 border shadow-xl">
               <h2 className="text-2xl font-black uppercase italic tracking-tight mb-8">Legal Provisos</h2>
               <div className="space-y-8 text-text/60 font-medium leading-relaxed">
                  <div>
                    <h4 className="text-text dark:text-white font-black uppercase italic text-sm mb-2">9. Intellectual Property</h4>
                    <p>
                        All website content, design, and logos are owned by DrainCleaningNearMe. 
                        Unauthorized copying or commercial use is strictly prohibited.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-text dark:text-white font-black uppercase italic text-sm mb-2">12. Limitation of Liability</h4>
                    <p>
                        To the fullest extent permitted by law, DrainCleaningNearMe shall not be liable 
                        for direct, incidental, or consequential damages arising from your use of 
                        the website or third-party services.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-text dark:text-white font-black uppercase italic text-sm mb-2">16. Governing Law</h4>
                    <p>
                        These Terms are governed by the laws of the State of New Mexico. Any disputes 
                        will be handled in accordance with the arbitration guidelines in Section 17.
                    </p>
                  </div>
               </div>
            </section>

            <section className="p-10 rounded-[3rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden italic">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,var(--primary),transparent)] opacity-20 pointer-events-none" />
               <FileText className="text-primary mx-auto mb-6" size={48} />
               <h2 className="text-2xl font-black uppercase italic mb-4">Acceptance Requirements</h2>
               <p className="text-sm opacity-70 mb-8 max-w-lg mx-auto leading-relaxed">
                 By using this website, you confirm that you have read, understood and agreed to 
                 these Website Terms and Conditions in their entirety.
               </p>
               <div className="inline-block px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase italic tracking-widest">
                  (724) 750-6935
               </div>
            </section>
        </div>
      </div>
    </div>
  );
}
