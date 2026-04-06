import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { TrustBar } from "@/components/trust-bar";
import { Phone, MapPin, Clock, ShieldCheck, Zap, AlertTriangle, Headset, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Drain Cleaning Near Me",
  description:
    "Talk to DrainCleaningNearMe and get 24/7 drain cleaning throughout USA. We connect you to local professionals for emergency drain cleaning.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 bg-[#0B1120] relative italic overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-[500px] bg-primary/5 blur-[120px] opacity-30" />
        </div>

        <section className="container relative z-10 mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-8">
              Contact DrainCleaningNearMe.us
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1] uppercase italic text-white">
              We&apos;re Here to <span className="text-primary italic">Help 24/7</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto italic">
              Have a plumbing emergency or a stubborn drain clog? Our team is standing by to 
              connect you with licensed local experts across the United States. Reaching out is fast and easy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <div className="space-y-8">
              <div className="bg-[#111827]/80 backdrop-blur-md rounded-[3rem] p-10 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-50" />
                <h2 className="text-2xl font-black italic uppercase mb-10 text-white flex items-center gap-4">
                    <Headset className="text-primary" /> Contact Options
                </h2>
                <div className="space-y-6 relative z-10">
                  <Link 
                    href="tel:1800DRAINPRO" 
                    className="flex items-start gap-4 p-8 rounded-[2rem] bg-[#0B1120]/80 border border-white/5 group hover:border-primary transition-all"
                  >
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase italic text-xs tracking-widest text-slate-500 mb-1">Toll-Free Support</h3>
                      <p className="text-2xl font-black text-white group-hover:text-primary transition-colors italic">1-800-DRAIN-PRO</p>
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">24/7 Live Nationwide Support</span>
                    </div>
                  </Link>

                  <Link 
                    href="tel:+17247506935" 
                    className="flex items-start gap-4 p-8 rounded-[2rem] bg-[#0B1120]/80 border border-white/5 group hover:border-primary transition-all"
                  >
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase italic text-xs tracking-widest text-slate-500 mb-1">Local Direct</h3>
                      <p className="text-2xl font-black text-white group-hover:text-primary transition-colors italic">724 750 6935</p>
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Direct line for immediate help</span>
                    </div>
                  </Link>
                </div>
                <div className="mt-10 pt-10 border-t border-white/5 text-center">
                    <p className="text-xs font-black uppercase italic text-primary tracking-widest">
                        We respond within 30 minutes nationwide!
                    </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-[3rem] p-10 md:p-12 text-white space-y-10 shadow-2xl relative overflow-hidden italic">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
                <h2 className="text-2xl font-black uppercase tracking-tight relative z-10 italic">Why Contact Us Today</h2>
                <ul className="space-y-8 relative z-10 italic">
                  {[
                    { title: "Lightning-Fast Dispatch", text: "Local professional dispatched in under 30-60 minutes.", icon: Zap },
                    { title: "Licensed & Insured Pros", text: "Only vetted local experts for your peace of mind.", icon: ShieldCheck },
                    { title: "Reliability Guaranteed", text: "Transparent pricing, clean work, no-hassle results.", icon: ShieldCheck },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <item.icon className="h-6 w-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-sm mb-1">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-10 rounded-[3rem] bg-[#111827]/80 backdrop-blur-md border border-white/5 text-center relative overflow-hidden italic">
                  <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Service Availability</h2>
                  <div className="grid gap-4">
                      {[
                          "Same-Day Service: Most emergencies fixed today.",
                          "Nationwide Coverage: From coast-to-coast.",
                          "Instant Matching: Reach experts in your area instantly."
                      ].map((item, i) => (
                          <div key={i} className="p-5 rounded-2xl bg-[#0B1120]/80 border border-white/5 text-[11px] font-black uppercase italic tracking-widest text-slate-400 group hover:border-primary transition-all">
                              {item}
                          </div>
                      ))}
                  </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-accent/5 border border-accent/20 relative overflow-hidden italic group hover:border-accent/40 transition-all">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 rounded-2xl bg-accent text-white shadow-accent-glow">
                          <AlertTriangle size={28} />
                      </div>
                      <h2 className="text-2xl font-black uppercase italic text-accent">Emergency Help</h2>
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-loose mb-8">
                      Overflowing toilets? Sewer backups? These would not fix themselves. 
                      Our team handles it all with call clogged drain service urgency:
                  </p>
                  <ul className="grid gap-4 mb-10">
                      {[
                          "Slow drains turning critical",
                          "Foul odors or flooding",
                          "Sewer line blockages"
                      ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[11px] font-black uppercase italic text-accent tracking-widest">
                              <Zap size={14} fill="currentColor" /> {item}
                          </li>
                      ))}
                  </ul>
                  <Link href="tel:+17247506935" className="flex items-center justify-center h-14 w-full bg-accent text-white rounded-2xl font-black uppercase italic tracking-widest shadow-accent-glow">
                     Call Experts Now
                  </Link>
              </div>

              <div className="p-10 rounded-[3rem] bg-[#111827]/80 border border-white/5 text-center shadow-2xl italic group hover:border-primary transition-all">
                  <MapPin className="mx-auto h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                  <h3 className="font-black uppercase italic mb-4 tracking-tight text-white">Mailing Address</h3>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-loose">
                      209 Mountain Rd PL NE Ste R<br />
                      Albuquerque, NM 87110, USA
                  </p>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <CTASection 
          title="Call Now for Immediate Help &ndash; Get Your Drain Fixed Today!"
          subtitle="Ready to clear that clog? Call 1-800-DRAIN-PRO or 724 750 6935. Hire DrainCleaningNearMe professional and reclaim your drains today!"
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
