import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { TrustBar } from "@/components/trust-bar";
import { CheckCircle2, Shield, Users, Target, Zap, Clock, ShieldCheck, DollarSign, MousePointer2, Heart, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Drain Cleaning Near Me",
  description:
    "Trust DrainCleaningNearMe for reliable, nationwide service in USA. Our local licensed drain cleaning experts provide 24/7 emergency services.",
};

const stats = [
  { label: "Nationwide Coverage", value: "50 States", icon: Users },
  { label: "Emergency Response", value: "< 60 Min", icon: Zap },
  { label: "Service Availability", value: "24/7", icon: Shield },
  { label: "Customer Satisfaction", value: "100%", icon: Target },
];

const usps = [
  {
    title: "24/7 Emergency Services",
    description: "Help anytime, anywhere in the USA—no call goes unanswered.",
    icon: Clock,
  },
  {
    title: "Same-Day Service Availability",
    description: "Most jobs handled within hours for true urgency.",
    icon: Zap,
  },
  {
    title: "Nationwide Coverage",
    description: "From New York to LA, find drain cleaning near me in your city.",
    icon: Shield,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees—upfront quotes every time.",
    icon: DollarSign,
  },
  {
    title: "No Mess, No Damage Guarantee",
    description: "Clean work, protected property.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Dispatch System",
    description: "AI-matched pros arrive equipped and on time.",
    icon: MousePointer2,
  },
];

const processes = [
  { step: "1", title: "Call or Book", description: "Contact us anytime for instant matching." },
  { step: "2", title: "Expert Match", description: "We connect you to a nearby, verified technician." },
  { step: "3", title: "Rapid Service", description: "Pro arrives, assesses, and fixes efficiently." },
  { step: "4", title: "Done & Satisfied", description: "Enjoy clear drains with follow-up support." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 bg-[#0B1120] relative italic overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 blur-[120px] opacity-30" />
        </div>

        <section className="container relative z-10 mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-8">
              About DrainCleaningNearMe.us
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1] uppercase italic text-white">
              Reliable Help When <span className="text-primary italic">Drains Fail</span>
            </h1>
            <div className="space-y-6 text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto italic">
              <p>
                When a clogged drain strikes, you need ”drain cleaning near me” fast. At Drain 
                Cleaning Near Me, we are the trusted nationwide platform connecting you with licensed, 
                local drain cleaning experts across the United States. We deliver <strong>24/7 emergency 
                drain cleaning services</strong>, ensuring reliable help arrives quickly.
              </p>
              <p>
                Our value proposition? Fast response, professional results and zero hassle. 
                From kitchen sinks to sewer lines, get your drains cleared today with pros who 
                show up ready to solve your plumbing nightmare.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="tel:+17247506935" 
                className="h-16 px-10 md:px-14 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all"
              >
                <Phone fill="currentColor" size={24} />
                (724) 750-6935
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-8 rounded-[2.5rem] bg-[#111827]/80 backdrop-blur-md border border-white/5 group hover:border-primary/50 transition-all text-center">
                <stat.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-black italic text-white">{stat.value}</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-24">
            <div className="space-y-8">
              <div className="p-10 rounded-[3rem] bg-[#111827]/80 border border-white/5 space-y-6">
                <h2 className="text-3xl font-black tracking-tight italic uppercase text-white flex items-center gap-3">
                   <Target className="text-primary" /> Our Mission
                </h2>
                <p className="text-slate-400 leading-relaxed font-bold uppercase tracking-widest text-[13px] leading-loose">
                  We exist to tackle urgent plumbing issues head-on. Our mission centers on
                  lightning-fast response times, top-tier customer satisfaction and dependable
                  service from vetted experts. Whether it is a midnight clog or a weekend backup, we
                  make emergency drain cleaning simple and stress-free.
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-[#111827]/80 border border-white/5 space-y-6">
                <h2 className="text-3xl font-black tracking-tight italic uppercase text-white flex items-center gap-3">
                   <Users className="text-primary" /> Who We Are
                </h2>
                <p className="text-slate-400 leading-relaxed font-bold uppercase tracking-widest text-[13px] leading-loose">
                  <strong>Drain Cleaning Near Me</strong> is more than a service; it is your go-to
                  platform for local drain cleaning experts nationwide. Backed by a vast network of
                  licensed, insured and experienced technicians, we bridge the gap between you and
                  the right pro.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-[3rem] p-10 md:p-14 border border-white/5 text-white space-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
              <h2 className="text-3xl font-black tracking-tight relative z-10 italic uppercase">What Makes Us Different</h2>
              <div className="grid gap-8 relative z-10">
                {usps.map((usp, i) => (
                  <div key={i} className="flex items-start gap-4 group italic">
                    <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <usp.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-black uppercase tracking-tight italic text-sm mb-1">{usp.title}</h3>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{usp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Overview Section - 100% Content Parity */}
          <section className="mb-24 p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 italic">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-10 text-center">
               Our <span className="text-primary italic">Services</span> Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Emergency Drain Cleaning", href: "/emergency-drain-cleaning-services/", desc: "Immediate relief for sudden clogs." },
                { title: "Kitchen Sink Drain Cleaning", href: "/kitchen-sink-drain-cleaning-unclogging-services/", desc: "Clear grease and food buildup fast." },
                { title: "Bathroom Drain Cleaning", href: "/bathroom-drain-cleaning-unclogging-services/", desc: "Expert removal of hair and soap scum." },
                { title: "Hydro Jetting Services", href: "/hydro-jetting-cleaning-services/", desc: "High-pressure cleaning for deep, lasting results." },
                { title: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa/", desc: "Fix blockages and prevent future issues." },
                { title: "Drain Camera Inspection", href: "/drain-camera-inspection/", desc: "Pinpoint problems without guesswork." },
              ].map((service, i) => (
                <Link key={i} href={service.href} className="group p-6 rounded-2xl bg-[#0B1120]/50 border border-white/5 hover:border-primary/30 transition-all">
                   <h3 className="text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors mb-2 italic">
                      {service.title}
                   </h3>
                   <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      {service.desc}
                   </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <div className="mb-24">
             <div className="text-center mb-12 italic">
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">Our <span className="text-primary italic">Process</span></h2>
                <p className="text-slate-400 font-medium">Getting unclogged is straightforward and fast:</p>
             </div>
             <div className="grid md:grid-cols-4 gap-6">
                {processes.map((p, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-[#111827]/80 backdrop-blur-md border border-white/5 text-center group hover:border-primary transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[#0077CC] text-white font-black text-xl flex items-center justify-center mx-auto mb-8 shadow-glow transition-transform group-hover:scale-110">
                            {p.step}
                        </div>
                        <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-white">{p.title}</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{p.description}</p>
                    </div>
                ))}
             </div>
          </div>

          {/* Trust Section */}
          <div className="max-w-4xl mx-auto text-center p-12 rounded-[3.5rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
               <Heart size={120} className="text-primary" />
            </div>
            <h2 className="text-3xl font-black tracking-tight italic uppercase mb-8 text-white relative z-10">Why Customers Trust Us</h2>
            <div className="space-y-6 text-base md:text-lg text-slate-400 font-medium leading-relaxed italic relative z-10">
                <p>Homeowners nationwide choose us for verified professionals who deliver.</p>
                <p className="text-primary font-black uppercase tracking-widest">Our quick response times often under an hour.</p>
                <p>Combined with glowing reviews and strict service standards, we build lasting trust and turn plumbing panic into peace of mind.</p>
            </div>
          </div>
        </section>

        <TrustBar />
        <CTASection 
          title="Ready for Clear Drains? Call Now!"
          subtitle="Do not let clogs ruin your day. Get your drains cleared today with emergency drain cleaning from top pros. Call now for immediate assistance or book online; 24/7 service starts here!"
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
