import Link from "next/link";
import { Zap, Phone, Search, Eye, ScanSearch } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Drain & Sewer Camera Inspection | Drain Cleaning Near Me",
  description: "Expert drain camera inspection near you. Get fast 24/7 video pipe inspection for recurring clogs & sewer diagnostics. Call now for professional help nationwide.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-camera-inspection/",
  }
};

export default function CameraInspectionPage() {
  return (
    <ServicePageLayout
      title="Drain Camera Inspection"
      subtitle="Visual Diagnostics — Stop Guessing, Start Seeing"
      description={
        <>
          <p>
            Stop guessing what is wrong with your plumbing. A professional <span className="text-white font-bold italic">drain camera inspection</span> 
            is the fastest, most accurate way to find the exact cause and location of your 
            drainage issues. Whether you are dealing with recurring clogs, slow drains 
            or are buying a new home; our video pipe inspection services give you the clear answers.
          </p>
          <p>
            At DrainCleaningNearMe, we connect you with local licensed experts who specialize in 
            sewer camera inspection and plumbing camera services. Our network provides 24/7 
            support across the USA.
          </p>
        </>
      }
      features={[
        "Real-time video pipe diagnostics",
        "Waterproof high-definition cameras",
        "Non-invasive root & leak detection",
        "Home buyer sewer line inspections",
        "Digital recording & documentation",
        "Deep-line sonar locating technology",
      ]}
      whyChooseUs={[
        "Pinpoint accuracy saves time and money",
        "Non-invasive—no digging required for diagnosis",
        "Clear visual proof of root intrusion or cracks",
        "Better repair planning with documented evidence",
        "Vetted local licensed inspectors nationwide",
      ]}
    >
      <div className="space-y-24">
        {/* Detection Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            What Can We <span className="text-primary italic">Detect?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-loose">
                A professional drain and sewer camera inspection can reveal issues that are 
                invisible from the surface, allowing for targeted repairs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Pipe Cracks", d: "Cracked or collapsed pipes." },
                  { t: "Tree Roots", d: "Tree root intrusion mats." },
                  { t: "Buildup", d: "Grease, soap scum & sludge." },
                  { t: "Joint Issues", d: "Misaligned joints and bellies." },
                  { t: "Obstructions", d: "Foreign objects & debris." },
                  { t: "Leaks", d: "Small leaks in main lines." }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0B1120]/50 border border-white/5 group hover:border-primary/50 transition-colors">
                     <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-1 group-hover:text-white transition-colors">{item.t}</h4>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex flex-col justify-center text-center">
               <h3 className="text-lg font-black uppercase italic text-white mb-4">Precision is Key</h3>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose">
                  Technicians can pinpoint the exact cause in real time, avoiding 
                  unnecessary digging and property damage.
               </p>
            </div>
          </div>
        </section>

        {/* Home Buyer Special */}
        <section className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl italic flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
             <ScanSearch className="h-32 w-32 text-primary mx-auto opacity-50" />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-2xl font-black uppercase italic text-white">Inspections for Home Buyers</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-loose">
              Before you buy or sell a home, get a sewer camera inspection. It is the only way 
              to ensure there are no hidden main line issues that could cost thousands 
              in future repairs. Don&apos;t get stuck with a broken pipe!
            </p>
            <Link href="tel:+17247506935" className="inline-flex h-12 px-8 bg-primary/10 border border-primary/30 text-primary rounded-xl items-center justify-center font-black uppercase italic text-xs tracking-widest hover:bg-primary/20 transition-colors">
               Schedule Home Inspection
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
          <h2 className="text-3xl font-black uppercase italic mb-12 text-center text-white">
            Camera Inspection <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does a drain camera inspection cost?", a: "Costs vary by region. We offer upfront pricing through our local network to ensure transparent, competitive rates for your inspection." },
              { q: "Can a camera clear the clog itself?", a: "No. The camera is for diagnosis. Once the issue is found, we use snaking or hydrojetting to clear the actual blockage." },
              { q: "Do I get a copy of the video inspection?", a: "Yes. Most technicians provide digital recordings or links to the footage for your records and insurance purposes." },
              { q: "How far into the pipe can the camera go?", a: "Most inspection cameras can travel up to 100–200 feet, which is more than enough for most residential main sewer lines." },
              { q: "Is the inspection safe for my pipes?", a: "Yes. The camera is waterproof and non-invasive. It slides through the line without cause for any plumbing damage." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-black uppercase tracking-widest text-white italic">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 italic shadow-primary-glow/20">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">See Exactly What Is Happening</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Stop guessing and start seeing. Whether you need a home buyer sewer inspection 
            or are solving a recurring clog, we provide the clear visual proof you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Nationwide Support &middot; HD Digital Video Recordings
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
