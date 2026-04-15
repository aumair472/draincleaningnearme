import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Cleaning San Diego | Expert Clogged Drain Service 24/7",
  description: "Expert drain cleaning services in San Diego. Clogged drain? Get fast 24/7 emergency drain & sewer cleaning by hydro jetting residents trust. Licensed, insured & same-day. Call Now!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-diego",
  }
};

export default function SanDiegoPage() {
  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Repair Services in San Diego"
      subtitle="Fast 24/7 Emergency Drain & Sewer Cleaning by Hydro Jetting"
      description={
        <>
          <p>
            Tired of slow drains, foul odors or sewer backups ruining your day in San Diego? DrainCleaningNearMe delivers fast, professional drain cleaning services for San Diego residents for clogged drain repair during emergencies.
          </p>
          <p>
            Licensed, insured, 24/7 availability; trusted by La Jolla and Pacific Beach homeowners for hydro jetting local solutions that last longer. Call Now for Same-Day Service: <span className="font-bold text-text">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "Emergency Drain Cleaning 24/7",
        "Sewer Line Cleaning San Diego",
        "Hydro Jetting Services (4,000 PSI)",
        "Drain Snaking & Quick Unclogging",
        "Camera Inspection for Deep Roots",
        "Commercial Restaurant Grease Traps"
      ]}
      whyChooseUs={[
        "Licensed & Insured: CSLB-compliant for your peace of mind",
        "Same-Day Service: 90% of calls handled within hours",
        "Advanced Equipment: Commercial-grade hydro jetting",
        "Affordable Pricing: Single drain from $99-$299; transparent",
        "Local Expertise: Serving everywhere from Rancho Bernardo to Chula Vista",
      ]}
    >
      <div className="space-y-24">
        {/* San Diego Challenges Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Common San Diego <span className="text-primary ">Drain Problems</span>
          </h3>
          <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            San Diego's dry coastal climate and hard water create specific drain challenges that demand professional intervention. From aging Orangeburg pipes to invasive tree roots seeking moisture, regular maintenance saves thousands.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Droplets, title: "Hard Water Buildup", text: "High calcium/magnesium from local groundwater causes mineral deposits, reducing flow by up to 50% in La Jolla homes." },
              { icon: Trees, title: "Tree Root Intrusion", text: "Water-seeking roots invade clay pipes in Escondido yards, causing 30% of sewer issues here." },
              { icon: Building2, title: "Sewer Line Backups", text: "Aging pipes in Chula Vista crack, leading to backups from soil shifts in canyons during coastal rains." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-bg border-border/50 border border-border hover:border-primary/20 transition-all hover:shadow-md transition-all group">
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold uppercase  tracking-tight mb-2 text-sm text-text group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-[10px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full Range of Services & Signs */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
            <h3 className="text-2xl font-bold uppercase mb-8 text-text">Signs You Need Immediate Service</h3>
            <div className="space-y-6 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
              <p>Do not wait for disaster; spot these clogged drain San Diego warnings early to avoid major sewer line repair.</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Multiple Slow Drains:</strong> Kitchen and bathroom simultaneously slowing.</li>
                 <li><strong className="text-primary">Gurgling Sounds:</strong> From pipes, indicating air trapped by blockages.</li>
                 <li><strong className="text-primary">Water Backing Up:</strong> From one fixture to another, a classic sewer backup sign.</li>
                 <li><strong className="text-primary">Foul Odors:</strong> Persisting despite cleaning, from bacteria or grease clogs.</li>
                 <li><strong className="text-primary">Standing Water:</strong> In tubs or sinks longer than 30 minutes.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h3 className="text-2xl font-bold uppercase mb-6 text-text mt-8">How We Solve It</h3>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-text">Inspection:</strong> Quick visual and camera check for root intrusion.</li>
                  <li><strong className="text-text">Diagnosis:</strong> Pinpoint cause; grease, minerals or roots.</li>
                  <li><strong className="text-text">Method Selection:</strong> Snaking for minor, hydro jetting for tough clogs.</li>
                  <li><strong className="text-text">Execution:</strong> Safe, efficient cleaning with minimal disruption.</li>
                  <li><strong className="text-text">Final Testing:</strong> Run water to confirm clear flow and no backups.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm  flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h3 className="text-2xl font-bold uppercase mb-4 text-text">Serving Coastal & Inland San Diego</h3>
             <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                From luxury rentals in Pacific Beach to historic homes in Coronado, we have local coverage everywhere you need it.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Downtown San Diego", "La Jolla", "Pacific Beach", "Chula Vista", "El Cajon", "Oceanside", "Escondido", "Rancho Bernardo", "Coronado"].map((area) => (
                  <span key={area} className="px-4 py-2 bg-bg border-border/50 border border-border rounded-full text-[10px] font-bold uppercase tracking-widest text-primary ">
                    {area}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h3 className="text-3xl font-bold uppercase mb-12 text-center text-text">
            San Diego Drain <span className="text-primary">FAQ</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in San Diego?", a: "Single drains run around $99-$299; hydro jetting around $300-$600, depending on severity." },
              { q: "How long does professional drain cleaning take?", a: "Most jobs take a few hours; emergencies are handled same-day." },
              { q: "DIY vs. Professional unclog drain in San Diego?", a: "DIY works for minor hair clogs, but professionals handle roots and hard water best, avoiding pipe damage." },
              { q: "Is hydro jetting safe for San Diego pipes?", a: "Yes, safe for modern PVC; we inspect first for aging clay pipes before jetting." },
              { q: "Do you offer emergency plumber San Diego services?", a: "Yes. 24/7, with 60-minute response in areas like Pacific Beach and nearby surroundings." },
              { q: "Can you fix French drains in San Diego?", a: "Yes, plus storm drain cleaning in San Diego for coastal rains." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-text ">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20  ">
          <h3 className="text-3xl font-bold uppercase tracking-tight text-text">Stop Coastal Pipe Nightmares; Act Now!</h3>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not let clogged drains disrupt your San Diego life; get fast, affordable drain services today! Licensed professionals are ready 24/7. Prevent backups before it's too late.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free On-Site Estimates
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DrainCleaningNearMe Services San Diego",
              "url": "https://www.draincleaningnearme.us/drain-cleaning-san-diego",
              "telephone": "(724) 750-6935",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Diego",
                "addressRegion": "CA"
              },
              "serviceType": "Drain Cleaning",
              "areaServed": ["San Diego", "La Jolla", "Chula Vista", "Oceanside", "Escondido"],
              "priceRange": "$99-$600"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does drain cleaning cost in San Diego?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Single drains run by around $99-$299; hydro jetting around $300-$600, depending on severity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does professional drain cleaning take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most jobs takes few hours; emergencies handled same-day."
                  }
                },
                {
                  "@type": "Question",
                  "name": "DIY vs. Professional unclog drain in San Diego?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DIY works for minor hair clogs, but professionals handle roots and hard water best; avoiding pipe damage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is hydro jetting safe for San Diego pipes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, safe for modern PVC; inspects first for aging clay."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer emergency plumber San Diego services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "24/7, with 60-minute response in areas like Pacific Beach and other nearby San Diego surroundings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you fix French drain cleaning San Diego?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, plus storm drain cleaning in San Diego for coastal rains."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </ServicePageLayout>
  );
}
