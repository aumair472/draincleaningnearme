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
  { step: "1", title: "Call Now", description: "Contact us anytime at (724) 750-6935 for instant matching." },
  { step: "2", title: "Expert Match", description: "We connect you to a nearby, verified technician." },
  { step: "3", title: "Rapid Service", description: "Pro arrives, assesses, and fixes efficiently." },
  { step: "4", title: "Done & Satisfied", description: "Enjoy clear drains with follow-up support." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 bg-bg relative overflow-hidden">
        {/* Intro Section */}
        <section className="container relative z-10 mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6">
              About DrainCleaningNearMe.us
            </span>
            <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-8 leading-tight text-text">
              Reliable Help When Drains Fail
            </h1>
            <div className="space-y-6 text-lg text-text/80 font-medium leading-relaxed max-w-3xl mx-auto">
              <p>
                When a clogged drain strikes, you need ”drain cleaning near me” fast. At Drain 
                Cleaning Near Me, we are the trusted nationwide platform connecting you with licensed, 
                local drain cleaning experts across the United States. We deliver <strong className="text-text">24/7 emergency 
                drain cleaning services</strong>, ensuring reliable help arrives quickly.
              </p>
              <p>
                Our value proposition? Fast response, professional results and zero hassle. 
                From kitchen sinks to sewer lines, get your drains cleared today with pros who 
                show up ready to solve your plumbing nightmare.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="tel:+17247506935" 
                className="h-14 px-8 bg-accent text-white rounded-lg flex items-center justify-center gap-3 font-bold shadow-sm hover:shadow-md hover:bg-accent/90 transition-all text-lg"
              >
                <Phone fill="currentColor" size={20} />
                (724) 750-6935
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border shadow-sm transition-all hover:shadow-md text-center group">
                <stat.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-bold text-text">{stat.value}</span>
                <span className="text-xs font-bold text-text/60 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Mission & Identity */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <div className="p-10 rounded-xl bg-card border border-border shadow-sm transition-all hover:shadow-md">
              <h2 className="text-2xl font-bold tracking-tight text-text flex items-center gap-3 mb-6">
                <Target className="text-primary" size={28} /> Our Mission
              </h2>
              <p className="text-text/80 leading-relaxed font-medium">
                We exist to tackle urgent plumbing issues head-on. Our mission centers on
                lightning-fast response times, top-tier customer satisfaction and dependable
                service from vetted experts. Whether it is a midnight clog or a weekend backup, we
                make emergency drain cleaning simple and stress-free.
              </p>
            </div>

            <div className="p-10 rounded-xl bg-card border border-border shadow-sm transition-all hover:shadow-md">
              <h2 className="text-2xl font-bold tracking-tight text-text flex items-center gap-3 mb-6">
                <Users className="text-primary" size={28} /> Who We Are
              </h2>
              <p className="text-text/80 leading-relaxed font-medium">
                <strong className="text-text">Drain Cleaning Near Me</strong> is more than a service; it is your go-to
                platform for local drain cleaning experts nationwide. Backed by a vast network of
                licensed, insured and experienced technicians, we bridge the gap between you and
                the right pro.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Process (Alternate Background) */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            
            {/* USPS Container */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-text">What Makes Us Different</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {usps.map((usp, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-bg rounded-xl border border-border/50 group transition-all hover:shadow-md hover:border-primary/20 items-center text-center">
                    <div className="p-4 rounded-lg bg-card text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <usp.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-text group-hover:text-primary transition-colors text-lg">{usp.title}</h3>
                    <p className="text-sm text-text/80 font-medium leading-relaxed">{usp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight text-text mb-4">Our Process</h2>
                  <p className="text-text/80 font-medium text-lg">Getting unclogged is straightforward and fast:</p>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {processes.map((p, i) => (
                      <div key={i} className="p-8 rounded-xl bg-card border border-border text-center group hover:shadow-md transition-all flex flex-col items-center">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                              {p.step}
                          </div>
                          <h3 className="text-xl font-bold tracking-tight mb-3 text-text">{p.title}</h3>
                          <p className="text-sm text-text/80 font-medium leading-relaxed">{p.description}</p>
                      </div>
                  ))}
               </div>
            </div>

            {/* Services Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-text mb-10 text-center">
                 Our Services Overview
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { title: "Emergency Drain Cleaning", href: "/emergency-drain-cleaning-services/", desc: "Immediate relief for sudden clogs." },
                  { title: "Kitchen Sink Drain Cleaning", href: "/kitchen-sink-drain-cleaning-unclogging-services/", desc: "Clear grease and food buildup fast." },
                  { title: "Bathroom Drain Cleaning", href: "/bathroom-drain-cleaning-unclogging-services/", desc: "Expert removal of hair and soap scum." },
                  { title: "Hydro Jetting Services", href: "/hydro-jetting-cleaning-services/", desc: "High-pressure cleaning for deep, lasting results." },
                  { title: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa/", desc: "Fix blockages and prevent future issues." },
                  { title: "Drain Camera Inspection", href: "/drain-camera-inspection/", desc: "Pinpoint problems without guesswork." },
                ].map((service, i) => (
                  <Link key={i} href={service.href} className="group p-6 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all">
                     <h3 className="text-[15px] font-bold tracking-tight text-text group-hover:text-primary transition-colors mb-2">
                        {service.title}
                     </h3>
                     <p className="text-sm font-medium text-text/80">
                        {service.desc}
                     </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust Section */}
            <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-primary/10 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                 <Heart size={120} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-text relative z-10">Why Customers Trust Us</h2>
              <div className="space-y-4 text-lg text-text/80 font-medium leading-relaxed relative z-10">
                  <p>Homeowners nationwide choose us for verified professionals who deliver.</p>
                  <p className="text-primary font-bold">Our quick response times often under an hour.</p>
                  <p>Combined with glowing reviews and strict service standards, we build lasting trust and turn plumbing panic into peace of mind.</p>
              </div>
            </div>
            
          </div>
        </section>

        <TrustBar />
        <CTASection 
          title="Ready for Clear Drains? Call Now!"
          subtitle="Do not let clogs ruin your day. Get your drains cleared today with emergency drain cleaning from top pros. Call now for immediate assistance; 24/7 service starts here!"
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
