import Link from "next/link";
import { Zap, Phone, MapPin, Building2, ThermometerSun, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Drain Cleaning Services in Phoenix, AZ | Licensed & Insured Plumbers",
  description: "Reliable Phoenix drain cleaning services at affordable rates. From clogged drain repair to sewer cleaning, we provide 24/7 emergency same-day expert help. Book now!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-phoenix",
  }
};

export default function PhoenixPage() {
  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Clog Removal in Phoenix"
      subtitle="Fast, Reliable & Local Emergency Same-Day Service"
      description={
        <>
          <p>
            Phoenix homes often battle stubborn drain issues due to hard water minerals that build up inside pipes, trapping grease, hair and debris for frequent clogs. At DrainCleaningNearMe, our drain cleaning services Phoenix team tackles these with professional expertise, using advanced tools like hydro jetting to restore flow fast and prevent costly damage.
          </p>
          <p>
            Our licensed plumbers deliver 24/7 emergency drain cleaning Phoenix-wide services, ensuring same-day service with no hidden charges. Call early to avoid water damage and health hazards: <span className="font-bold text-white">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "Kitchen Drain Cleaning & Grease Removal",
        "Bathroom Drain Unclogging (Hair & Soap)",
        "Sewer Line Cleaning Phoenix",
        "Hydro Jetting Services in Phoenix AZ",
        "Emergency Drain Cleaning 24/7",
        "HD Drain Camera Inspections"
      ]}
      whyChooseUs={[
        "Licensed and insured technicians with Phoenix-specific experience",
        "Fast same-day service and 24/7 emergency availability",
        "Affordable pricing starting at $99 with free estimates",
        "Advanced equipment like 4,000 PSI hydro jetters",
        "100% satisfaction guarantee; re-service free if issues return",
      ]}
    >
      <div className="space-y-24">
        {/* Phoenix Challenges Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            Phoenix's Unique <span className="text-primary italic">Drain Problems</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            Phoenix's arid climate and hard water create unique drain challenges. Clogs often stem from hair, grease, food waste, and extreme mineral deposits that naturally narrow your pipes over time without you even realizing.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Droplets, title: "Hard Water Mineral Scale", text: "Phoenix's hard water accelerates mineral deposits, severely reducing water flow in sinks and showers." },
              { icon: Building2, title: "Tree Roots Intrusion", text: "Mesquite or ficus tree roots aggressively seek pipe moisture in mature Phoenix neighborhoods." },
              { icon: ThermometerSun, title: "Grease Solidification", text: "Cooled grease from food waste hardens quickly, worsening with Phoenix's mineral-rich water." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group">
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-black uppercase italic tracking-tight mb-2 text-sm text-white group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full Range of Services & Signs */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Signs Of Severe Clogs</h2>
            <div className="space-y-6 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
              <p>Do not ignore these red flags for clogged drains in Phoenix. Early action prevents flooding and pipe damage.</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Water Backups:</strong> Sinks, tubs or toilets backing up signals main line issues.</li>
                 <li><strong className="text-primary">Persistent Slow Drainage:</strong> Slow flow after plunging indicates deep deposit buildup.</li>
                 <li><strong className="text-primary">Foul Odors:</strong> Bad smells from drains point to organic decay or sewer problems.</li>
                 <li><strong className="text-primary">Multiple Fixture Clogs:</strong> Constant issues across several areas suggest sewer line root blockages.</li>
                 <li><strong className="text-primary">Gurgling Noises:</strong> Air locked in pipes by severe blockages.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-black uppercase italic mb-6 text-white mt-8">Our Treatment Process</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-white">Inspection:</strong> Arrive fast and use a camera if needed to locate blockages.</li>
                  <li><strong className="text-white">Diagnosis:</strong> Identify cause (roots, minerals, grease).</li>
                  <li><strong className="text-white">Clearing Blockage:</strong> Select hydro jetting or physical tools for extraction.</li>
                  <li><strong className="text-white">Flow Testing:</strong> Run water everywhere to confirm drainage and no gurgling.</li>
                  <li><strong className="text-white">Prevention Advice:</strong> Customized maintenance guidance to prevent slow drains.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Proudly Serving Phoenix Area</h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                We proudly serve all areas of Phoenix and nearby communities. From urban condos to desert suburbs, our Phoenix sewer hydro jetting service reaches you fast.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Downtown Phoenix", "Scottsdale", "Glendale", "Tempe", "Mesa", "Paradise Valley", "Central City", "Camelback East"].map((area) => (
                  <span key={area} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-primary italic">
                    {area}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
          <h2 className="text-3xl font-black uppercase italic mb-12 text-center text-white">
            Phoenix Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in Phoenix?", a: "Basic unclogs start at $99, sewer line cleaning $250–$450, with free quotes based on inspection." },
              { q: "What causes frequent drain clogs?", a: "Hard water minerals, grease, hair, and tree roots in Phoenix narrow pipes over time." },
              { q: "Is hydro jetting safe for pipes?", a: "Yes, for most modern systems; it is eco-friendly and effective on roots without chemicals, but we inspect older pipes first." },
              { q: "How fast can you arrive for emergency drain cleaning Phoenix?", a: "Within the hour for 24/7 emergencies, same-day for all services." },
              { q: "Do you offer emergency services?", a: "Absolutely, 24/7 for clogged drain repair, sewer cleaning, and more in Phoenix." },
              { q: "How do you handle root intrusion in sewer lines?", a: "Hydro jetting cuts roots effectively; we recommend barriers or inspections for prevention." },
              { q: "Do you service storm drain cleaning or french drains in Phoenix?", a: "Yes, we clear storm and french drains from roots and debris safely." }
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
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Call Now for Fast Drain Cleaning in Phoenix!</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Tired of drain hassles? Book your professional drain cleaning appointment today and enjoy clear pipes tomorrow. Same-day service guaranteed!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Priority Emergency Dispatch &middot; 100% Satisfaction Guarantee
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "@id": "https://www.draincleaningnearme.us/drain-cleaning-phoenix#organization",
              "name": "DrainCleaningNearMe",
              "description": "Professional drain cleaning services in Phoenix, AZ. Offering 24/7 emergency drain cleaning, hydro jetting, sewer line cleaning, and clogged drain repair.",
              "url": "https://www.draincleaningnearme.us/drain-cleaning-phoenix",
              "telephone": "+1-724-750-6935",
              "priceRange": "$99 - $450",
              "areaServed": {
                "@type": "City",
                "name": "Phoenix",
                "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
              },
              "serviceType": [
                "Drain Cleaning Services Phoenix",
                "Clogged Drain Repair Phoenix",
                "Emergency Drain Cleaning Phoenix",
                "Sewer Line Cleaning Phoenix",
                "Hydro Jetting Phoenix"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "addressCountry": "US",
                "postalCode": "85001"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.4484,
                "longitude": -112.0740
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Drain Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hydro Jetting Services Phoenix AZ",
                      "description": "High-pressure hydro jetting for sewer lines and drains."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Drain Cleaning Phoenix",
                      "description": "24/7 same-day response for clogged drains."
                    }
                  }
                ]
              },
              "license": "Licensed Plumber AZ",
              "award": "100% Satisfaction Guarantee"
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
                  "name": "How much does drain cleaning cost in Phoenix?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Basic unclogs start at $99, sewer line cleaning $250–$450, with free quotes based on inspection."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What causes frequent drain clogs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hard water minerals, grease, hair, and tree roots in Phoenix narrow pipes over time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is hydro jetting safe for pipes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, for most modern systems—it's eco-friendly and effective on roots without chemicals, but we inspect older pipes first."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can you arrive for emergency drain cleaning Phoenix?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Within the hour for 24/7 emergencies, same-day for all services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer emergency services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely—24/7 for clogged drain repair Phoenix, sewer cleaning, and more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you handle root intrusion in sewer lines?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hydro jetting cuts roots effectively; we recommend barriers or inspections for prevention."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you service storm drain cleaning Phoenix or french drains?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we clear storm and french drains from roots and debris safely."
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
