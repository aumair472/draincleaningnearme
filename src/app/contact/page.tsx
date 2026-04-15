import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceAreas } from "@/components/service-areas";
import { TrustBar } from "@/components/trust-bar";
import { Phone, Clock, ShieldCheck, Zap, AlertTriangle, MapPin, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Drain Cleaning Services | Call 24/7 Now",
  description: "Call now for fast and reliable drain cleaning services near you. 24/7 emergency support available. Get professional help in as little as 30 minutes.",
};

const trustFeatures = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "Verified local professionals only" },
  { icon: Clock, title: "24/7 Availability", text: "Ready day or night, holidays too" },
  { icon: Zap, title: "Fast Arrival", text: "Average response in 30-60 minutes" },
  { icon: CheckCircle2, title: "Satisfaction Guaranteed", text: "We don't leave until it's flowing" },
];

export default function ContactPage() {
  const phoneNumber = "(724) 750-6935";
  const telLink = "tel:+17247506935";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-0 bg-bg">
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-widest text-red-600 mb-8 animate-pulse">
              <AlertTriangle size={14} /> Immediate Emergency Dispatch Available
            </div>
            
            <h1 className="text-[40px] md:text-[64px] font-extrabold tracking-tight mb-6 leading-tight text-text">
              Call Now for <span className="text-primary">Immediate</span> Drain Cleaning Service
            </h1>
            
            <p className="text-xl text-text/70 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Don't let a backup ruin your property. Our experts are standing by 24/7 to clear any clog and restore your home's flow.
            </p>

            {/* Massive Call Button */}
            <div className="relative group max-w-xl mx-auto mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <a
                href={telLink}
                className="relative flex flex-col items-center justify-center gap-4 p-8 md:p-12 bg-primary hover:bg-blue-700 text-white rounded-2xl shadow-2xl transition-all active:scale-[0.98]"
              >
                <div className="p-4 rounded-full bg-white/20">
                  <Phone size={48} fill="currentColor" />
                </div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">
                    Call {phoneNumber}
                  </span>
                  <span className="text-blue-100 font-bold tracking-widest uppercase text-sm md:text-base">
                    Click to Call — 24/7 Live Support
                  </span>
                </div>
              </a>
              
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-bold text-text/60">
                 <div className="flex items-center gap-2 italic">
                   <Clock size={16} className="text-primary" /> ETA: Under 30 Minutes
                 </div>
                 <div className="flex items-center gap-2 italic">
                   <ShieldCheck size={16} className="text-primary" /> Free Phone Estimate
                 </div>
              </div>
            </div>

            {/* Trust Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
              {trustFeatures.map((feature, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm text-center">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-bold text-text mb-1">{feature.title}</h3>
                  <p className="text-xs font-medium text-text/60 leading-relaxed capitalize">{feature.text}</p>
                </div>
              ))}
            </div>
            
            {/* Address Info */}
            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card/50 max-w-md mx-auto">
                <MapPin className="text-primary" size={24} />
                <div className="text-center">
                   <h3 className="font-bold text-text tracking-tight uppercase text-xs mb-2">Service Network Headquarters</h3>
                   <p className="text-sm font-medium text-text/80 leading-relaxed">
                      209 Mountain Rd PL NE Ste R<br />
                      Albuquerque, NM 87110, USA
                   </p>
                </div>
            </div>
          </div>
        </section>

        <TrustBar />
        
        {/* Reuse ServiceAreas Component */}
        <ServiceAreas />

      </main>
      <Footer />
    </>
  );
}
