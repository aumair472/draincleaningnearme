import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Phone, Clock, ShieldCheck, Zap, AlertTriangle, BadgeCheck, CheckCircle2, Headphones, MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Drain Cleaning Near Me | 24/7 Emergency Drain Cleaning USA",
  description: "Talk DrainCleaningNearMe and get 24/7 drain cleaning throughout USA. We connect you to local professional for emergency drain cleaning. Contact us for same-day service. Call now!",
};

export default function ContactPage() {
  const mainPhone = "(724) 750-6935";
  const tollFree = "1-800-DRAIN-PRO";
  const mainTelLink = "tel:+17247506935";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-bg">
          {/* subtle glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
             <div className="absolute top-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-text leading-tight">
                Get Immediate Drain Cleaning Help Near You – <span className="text-primary italic">Call Now!</span>
              </h1>
              <p className="text-lg md:text-xl text-text/80 font-medium mb-12 leading-relaxed max-w-3xl">
                Facing a clogged drain emergency? Hire drain cleaning near me professional anytime with DrainCleaningNearMe. 
                We are available 24/7 nationwide, connecting you to licensed local experts for fast relief. 
                Do not wait; contact us today for emergency drain cleaning, contact that arrives quick.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-xl font-bold text-xl shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all group"
                >
                  <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call Now – 24/7
                </a>
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-card border-2 border-primary/20 text-text rounded-xl font-bold text-xl hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Phone size={24} />
                  Book Emergency Service
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK CONTACT OPTIONS */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text">
                Quick Contact Options
              </h2>
              <p className="mt-4 text-text/60 font-medium text-lg">
                Reach us instantly and get matched with a nearby technician/plumber.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              {/* PRIMARY CALL CARD */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary/20 rounded-[2rem] blur group-hover:bg-primary/30 transition duration-500" />
                <div className="relative bg-card border border-border p-10 md:p-14 rounded-[2rem] shadow-2xl text-center">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Headphones size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-text mb-4 uppercase tracking-tighter">Call Now for Fast Help</h3>
                  
                  <div className="space-y-6 mb-10">
                    <div className="space-y-1">
                      <span className="text-sm font-bold text-text/40 uppercase tracking-widest">Toll-Free (24/7 Support)</span>
                      <a href={mainTelLink} className="block text-3xl md:text-4xl font-black text-primary hover:scale-105 transition-transform">
                        {tollFree}
                      </a>
                    </div>
                    <div className="w-12 h-px bg-border mx-auto" />
                    <div className="space-y-1">
                      <span className="text-sm font-bold text-text/40 uppercase tracking-widest">Local Dispatch</span>
                      <a href={mainTelLink} className="block text-2xl font-bold text-text hover:text-primary transition-colors">
                        {mainPhone}
                      </a>
                    </div>
                  </div>

                  <p className="text-text/70 font-medium">
                    Response in minutes; call clogged drain service experts ready to dispatch.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-primary font-bold animate-pulse">
                  ⚡ We will respond within 30 minutes; get 24/7 drain cleaning throughout USA, Reach Us now!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CONTACT US (CARD GRID) */}
        <section className="py-20 bg-card/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text">
                Why Contact Us Today
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Lightning-Fast Dispatch", desc: "Local professional dispatched in under 30 minutes", icon: Zap },
                { title: "Licensed & Insured Pros", desc: "Only vetted local drain cleaning experts for peace of mind", icon: ShieldCheck },
                { title: "Reliable, No-Hassle Service", desc: "Transparent pricing, clean work guaranteed", icon: CheckCircle2 },
                { title: "Emergency Availability", desc: "Get help by talking to DrainCleaningNearMe; anytime, anywhere", icon: Headphones },
              ].map((card, i) => (
                <div key={i} className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <card.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3 leading-tight tracking-tight">{card.title}</h3>
                  <p className="text-text/60 font-medium text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SERVICE AVAILABILITY */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text mb-12">
                Our Service Availability
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Same-Day Service", desc: "Most emergencies fixed today", icon: Clock },
                  { title: "Nationwide Coverage", desc: "From New York to LA, find us in your city", icon: MapPin },
                  { title: "Local Expert Matching", desc: "Reach local drain cleaning experts instantly", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-text">{item.title}</h3>
                    <p className="text-text/60 font-medium text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-16 text-lg text-text/80 font-medium leading-relaxed bg-primary/5 p-8 rounded-2xl border border-primary/10">
                We cover the entire U.S. with customized matching. Whether you are in a major metro or a quiet suburb, 
                we ensure you reach local drain cleaning experts in your area instantly.
              </p>
            </div>
          </div>
        </section>

        {/* 5. EMERGENCY SECTION (URGENT) */}
        <section className="py-20 bg-red-600">
           <div className="max-w-5xl mx-auto px-4 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <AlertTriangle size={14} /> Urgent Assistance Required
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                Emergency Drain Help – <span className="underline decoration-white/40">Act Fast!</span>
              </h2>
              <p className="text-xl font-medium mb-12 opacity-90 leading-relaxed">
                Overflowing toilets? Sewer backups? Gurgling sinks? These would not fix themselves. 
                Our emergency drain cleaning team handles it all with call clogged drain service urgency.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {["Slow drains turning critical", "Foul odors or flooding", "Sewer line blockages"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center bg-white/10 p-4 rounded-xl font-bold">
                    <BadgeCheck size={20} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-2xl font-black tracking-widest uppercase">Call now; prevent bigger damage!</p>
                <a
                  href={mainTelLink}
                  className="inline-flex items-center gap-4 px-12 py-6 bg-white text-red-600 rounded-2xl font-black text-2xl shadow-2xl hover:bg-white/90 transition-all active:scale-[0.98]"
                >
                  <Phone size={32} fill="currentColor" />
                  {mainPhone}
                </a>
              </div>
           </div>
        </section>

        {/* 6. FINAL CTA SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-card border border-border p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
             {/* bg elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text mb-8 leading-[1.1]">
                 Call Now for Immediate Help – <br />
                 <span className="text-primary italic">Get Your Drain Fixed Today!</span>
               </h2>
               <p className="text-xl md:text-2xl text-text/80 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                 Ready to clear that clog? Call <span className="text-primary font-bold">{tollFree}</span>. <br />
                 Hire DrainCleaningNearMe professional and reclaim your drains today!
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a
                    href={mainTelLink}
                    className="flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-black text-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all group"
                  >
                    <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                    Call Now – 24/7
                  </a>
                  <a
                    href={mainTelLink}
                    className="flex items-center justify-center gap-4 px-12 py-6 bg-transparent border-2 border-text/10 text-text rounded-2xl font-black text-2xl hover:bg-text/5 transition-all"
                  >
                    Book Emergency Service
                  </a>
               </div>

               <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs font-bold text-text/30 uppercase tracking-[0.2em]">
                 <span>Licensed & Insured</span>
                 <span className="w-1.5 h-1.5 rounded-full bg-border" />
                 <span>Nationwide Support</span>
                 <span className="w-1.5 h-1.5 rounded-full bg-border" />
                 <span>No Hidden Fees</span>
               </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
