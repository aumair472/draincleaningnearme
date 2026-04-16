import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { 
  Zap, 
  Target, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Shield, 
  MapPin, 
  BadgeCheck, 
  Phone,
  ArrowRight,
  MousePointer2,
  Utensils,
  Bath,
  Waves,
  Droplets,
  Search,
  Star,
  MessageSquare
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drain Cleaning Near Me | 24/7 Emergency Drain Cleaning USA | About Us",
  description:
    "Trust DrainCleaningNearMe for reliable, nationwide service in USA. Our local licensed drain cleaning experts provide 24/7 emergency services. Get help fast, reliable & ready!",
};

export default function AboutPage() {
  const phoneLink = "tel:+17247506935";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* 1. HERO */}
        <AboutHero />

        {/* 2. ABOUT SECTION */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text mb-8">
                About Us (DrainCleaningNearMe)
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-text/80 font-medium leading-relaxed">
                <p>
                  When a clogged drain strikes, you need <span className="text-text font-bold">“drain cleaning near me”</span> fast. 
                  At Drain Cleaning Near Me, we are the trusted nationwide platform connecting you with licensed, local drain cleaning experts across the United States.
                </p>
                <p>
                  We deliver 24/7 emergency drain cleaning services, ensuring reliable help arrives quickly, no matter where you are.
                </p>
                <p>
                  Our strong value proposition? Fast response, professional results and zero hassle.
                </p>
                <p>
                  From kitchen sinks to sewer lines, get your drains cleared today with pros who show up ready to solve your plumbing nightmare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MISSION (CARD UI) */}
        <section className="py-20 bg-card/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text">
                Our Mission
              </h2>
              <p className="mt-4 text-text/60 font-medium text-lg">
                We exist to tackle urgent plumbing issues head-on.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lightning-fast response times",
                  icon: Zap,
                  desc: "We prioritize speed because we know emergency clogs can't wait."
                },
                {
                  title: "Top-tier customer satisfaction",
                  icon: Target,
                  desc: "Our goal is simple: ensure every customer is 100% satisfied with the work."
                },
                {
                  title: "Dependable service from vetted experts",
                  icon: CheckCircle2,
                  desc: "All technicians are licensed, insured and highly experienced."
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                  <p className="text-text/70 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-lg text-text/80 font-medium">
                Whether it is a midnight clog or a weekend backup, we make emergency drain cleaning simple and stress-free.
               </p>
            </div>
          </div>
        </section>

        {/* 4. WHO WE ARE */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text mb-10 text-center">
                Who We Are
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-text/80 font-medium leading-relaxed">
                  <p>
                    <span className="text-text font-bold">Drain Cleaning Near Me</span> is more than a service; it is your go-to platform for local drain cleaning experts nationwide.
                  </p>
                  <p>
                    Backed by a vast network of licensed, insured and experienced technicians, we bridge the gap between you and the right pro.
                  </p>
                  <p>
                    With years of industry know-how, we serve cities coast-to-coast, delivering professional clogged drain service you can count on.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl font-extrabold text-primary mb-2">USA</div>
                  <div className="text-lg font-bold text-text uppercase tracking-widest">Coast-to-Coast Coverage</div>
                  <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                     <div className="p-4 rounded-xl bg-card border border-border">
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-xs font-bold text-text/60 uppercase">States Served</div>
                     </div>
                     <div className="p-4 rounded-xl bg-card border border-border">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-xs font-bold text-text/60 uppercase">Availability</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT MAKES US DIFFERENT */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text">
                What Makes Us Different
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "24/7 Emergency Services", desc: "Help anytime, anywhere in the USA—no call goes unanswered.", icon: Clock },
                { title: "Same-Day Service Availability", desc: "Most jobs handled within hours for true urgency.", icon: Zap },
                { title: "Nationwide Coverage", desc: "From New York to LA, find drain cleaning near me in your city.", icon: MapPin },
                { title: "Transparent Pricing", desc: "No hidden fees—upfront quotes every time.", icon: DollarSign },
                { title: "No Mess, No Damage Guarantee", desc: "Clean work, protected property.", icon: ShieldCheck },
                { title: "Fast Dispatch System", desc: "AI-matched pros arrive equipped and on time.", icon: MousePointer2 },
              ].map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 transition-all hover:shadow-lg hover:scale-[1.02] group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
                  <p className="text-text/70 font-medium text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SERVICES OVERVIEW */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text mb-4">
                Our Services Overview
              </h2>
              <p className="text-text/70 font-medium text-lg">
                We specialize in comprehensive drain solutions, powered by 24/7 drain cleaning USA pros ready for action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Emergency Drain Cleaning", icon: Zap, desc: "Immediate 24/7 response for urgent clogs.", href: "/emergency-drain-cleaning-services/" },
                { title: "Kitchen Sink Drain Cleaning", icon: Utensils, desc: "Clearing food, grease, and soap buildup.", href: "/kitchen-sink-drain-cleaning-unclogging-services/" },
                { title: "Bathroom Drain Cleaning", icon: Bath, desc: "Expert removal of hair, soap scum and residue.", href: "/bathroom-drain-cleaning-unclogging-services/" },
                { title: "Hydro Jetting Services", icon: Waves, desc: "High-pressure water cleaning for deep clogs.", href: "/hydro-jetting-cleaning-services/" },
                { title: "Sewer Line Cleaning & Repair", icon: Droplets, desc: "Restoring flow to your main waste lines.", href: "/sewer-line-cleaning-repair-usa/" },
                { title: "Drain Camera Inspection", icon: Search, desc: "Visual verification of pipe health and clogs.", href: "/drain-camera-inspection/" }
              ].map((service, i) => (
                <Link key={i} href={service.href} className="p-8 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all flex items-start gap-4 hover:shadow-lg hover:scale-[1.01]">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text mb-2 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-text/60 font-medium">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PROCESS */}
        <section className="py-20 border-t border-border bg-card/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text">
                Our Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-0.5 bg-border -z-10" />
              
              {[
                { step: "1", title: "Call or Book", desc: "Contact us anytime for instant matching" },
                { step: "2", title: "Expert Match", desc: "We connect you to a nearby, verified technician" },
                { step: "3", title: "Rapid Service", desc: "Pro arrives, assesses, and fixes efficiently" },
                { step: "4", title: "Done & Satisfied", desc: "Enjoy clear drains with follow-up support" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary/20 relative">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3 leading-tight">{step.title}</h3>
                  <p className="text-text/70 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. TRUST SECTION */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 -z-10" />
                  <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-text mb-8">
                    Why Customers Trust Us
                  </h2>
                  <div className="space-y-6 text-lg text-text/80 font-medium leading-relaxed">
                    <p>
                      Homeowners nationwide choose us for verified professionals who deliver.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1.5 shrink-0 text-primary"><BadgeCheck size={20} /></div>
                        <p>Our quick response times often under an hour</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1.5 shrink-0 text-primary"><BadgeCheck size={20} /></div>
                        <p>Combined with glowing reviews and strict service standards</p>
                      </div>
                    </div>
                    <p>
                      This builds lasting trust. Join thousands who have turned plumbing panic into peace of mind with our reliable local drain cleaning experts.
                    </p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Pro Rating", val: "4.8/5", icon: Star },
                    { label: "Vetted Techs", val: "100%", icon: Shield },
                    { label: "Cities Covered", val: "1,000+", icon: MapPin },
                    { label: "Happy Clients", val: "10k+", icon: Target },
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center">
                        <stat.icon className="text-primary mb-3" size={28} />
                        <div className="text-2xl font-bold text-text">{stat.val}</div>
                        <div className="text-xs font-bold text-text/50 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-card border border-border p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-[32px] md:text-[56px] font-bold tracking-tight text-text mb-6 leading-tight">
                Ready for Clear Drains? <br className="hidden md:block" />
                <span className="text-primary italic">Call Now!</span>
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 mb-12">
                <p className="text-lg md:text-xl text-text/80 font-medium">
                  Do not let clogs ruin your day. Get your drains cleared today with emergency drain cleaning from top pros.
                </p>
                <p className="text-lg text-primary font-bold">
                  Call now for immediate assistance or book online; 24/7 drain cleaning in the USA starts here!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={phoneLink}
                  className="flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all group"
                >
                  <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call Now
                </a>
                <a
                  href={phoneLink}
                  className="flex items-center justify-center gap-3 px-12 py-6 bg-transparent border-2 border-text/10 text-text rounded-2xl font-bold text-2xl hover:bg-text/5 transition-all"
                >
                  Book Service Online
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-text/40 font-bold uppercase tracking-widest text-xs">
                <span>Free Quotes</span>
                <span className="w-1 h-1 rounded-full bg-text/20" />
                <span>24/7 Response</span>
                <span className="w-1 h-1 rounded-full bg-text/20" />
                <span>Licensed Pros</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
