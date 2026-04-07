import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Settings } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Drain Cleaning Philadelphia | Expert Clog Removal & Repair",
  description: "Expert drain cleaning services in Philadelphia. Clogged drain or sewer backup? Get 24/7 emergency sewer cleaning service & same-day repairs near you. Fast & affordable. Call now!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-philadelphia",
  }
};

export default function PhiladelphiaPage() {
  return (
    <ServicePageLayout
      title="Fast, Professional Drain Cleaning Services in Philadelphia"
      subtitle="Expert Solutions for Clogged Drains, Main Lines and Sewers; Available 24/7"
      description={
        <>
          <p>
            In Philadelphia's tight row-homes from South Philly to Northeast neighborhoods, a simple slow drain can escalate to foul-smelling backups flooding your basement; especially with the city's aging cast iron and clay pipes vulnerable to corrosion and tree root intrusion.
          </p>
          <p>
            Grease from grease traps clogs kitchens, hair mats bathrooms, and winter freezes stress pipes leading to blockages. DrainCleaningNearMe connects you instantly to local professionals for drain cleaning services in Philadelphia, ensuring same-day relief before costly sewer line repair. Call now: <span className="font-bold text-white">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "Drain Snaking (Auger) Kitchen & Bath",
        "Hydro Jetting Philadelphia (4,000 PSI)",
        "Sewer Line Cleaning Philadelphia",
        "High-definition Camera Inspections",
        "Emergency Drain Services (24/7)",
        "Storm & French Drain Cleaning"
      ]}
      whyChooseUs={[
        "Same-Day Service: No waiting; fast dispatch",
        "Upfront Pricing: Transparent quotes, no surprises",
        "Experienced Technicians: Local pros trained on Philly pipes",
        "Modern Equipment: Hydro jetters and cameras",
        "Guaranteed Results: Satisfaction or we return free",
      ]}
    >
      <div className="space-y-24">
        {/* Philly Challenges Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            Philadelphia's Local <span className="text-primary italic">Drain Problems</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            Philly's urban density and historic plumbing breed specific woes. Slow drains often start subtly but signal building grease or soap residue in aging pipes, common in row-homes where multiple users strain the systems.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Building2, title: "Aging Fragile Pipes", text: "Pre-1950 homes rely on fragile clay and cast iron pipes, now riddled with corrosion and mineral buildup." },
              { icon: Trees, title: "Tree Root Intrusion", text: "Roots from mature trees along narrow streets invade older sewer lines causing frequent backups." },
              { icon: Settings, title: "Combined Sewer Overflows", text: "Heavy rainfall overwhelms Philly's combined sewer system, leading to water backups flooding basements." }
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
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Signs & Solutions Breakdown</h2>
            <div className="space-y-6 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
              <ul className="space-y-4">
                 <li><strong className="text-primary">Slow Drains:</strong> Grease buildup in kitchens, soap/hair in bathrooms (Gurgling, sluggish flow). Fix: Snaking + tips.</li>
                 <li><strong className="text-primary">Recurring Clogs:</strong> Corrosion in cast iron/clay pipes (Frequent backups). Fix: Hydro jetting Philadelphia.</li>
                 <li><strong className="text-primary">Foul Odors:</strong> Standing water, bacterial traps (Smelly drains). Fix: Camera inspection + cleaning.</li>
                 <li><strong className="text-primary">Water Backups:</strong> Combined sewers + rain (Basement flooding). Fix: Emergency sewer cleaning.</li>
                 <li><strong className="text-primary">Tree Root Damage:</strong> Roots in clay joints (Pipe cracks). Fix: Jetting + long term prevention.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-black uppercase italic mb-6 text-white mt-8">Our Proven Process</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-white">Inspection:</strong> Arrive, assess visible signs, deploy camera for hidden issues.</li>
                  <li><strong className="text-white">Diagnosis:</strong> Pinpoint cause using Philly-specific knowledge.</li>
                  <li><strong className="text-white">Selection:</strong> Customized snaking for minor, hydro jetting for severe cases.</li>
                  <li><strong className="text-white">Testing:</strong> Run water to verify flow, check for backups.</li>
                  <li><strong className="text-white">Prevention Tips:</strong> Advise on grease traps, root barriers for row-homes.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Serving Philadelphia & Beyond</h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                From Manayunk to Fishtown, we are there. Full coverage for your "drain unclogging near me" searches.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["South Philly", "West Philadelphia", "Northeast Philadelphia", "Center City", "Bucks County", "Montgomery County", "Delaware County"].map((area) => (
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
            Philadelphia Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in Philadelphia?", a: "Typical drain cleaning costs range from $160–$410 depending on clog severity and pipe access. Hydro jetting varies but gets it done right." },
              { q: "What causes recurring clogs in Philadelphia homes?", a: "Grease buildup in kitchen drains, hair/soap blockages in bathrooms, and tree root intrusion in Philadelphia's aging cast iron lines." },
              { q: "Is hydro jetting safe for Philadelphia pipes?", a: "Yes, hydro jetting is safe for most pipes including cast iron. It uses only high-pressure water to remove grease and roots." },
              { q: "How fast can you respond to emergency drain cleaning?", a: "Emergency drain cleaning response time averages 30-60 minutes across metro areas including South Philly and Center City." },
              { q: "Do you offer 24/7 emergency plumbing services?", a: "Yes, 24/7 emergency plumber Philadelphia services available for sewer backups, clogged drains, and hydro jetting needs anytime." },
              { q: "How to prevent slow drains in Philadelphia rowhomes?", a: "Use drain screens, avoid pouring grease, schedule annual professional cleaning, and consider root barriers for tree-heavy areas." }
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
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Call Now for Same-Day Drain Cleaning!</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Emergency? Standing water rising? Licensed team guarantees fast relief; do not let clogs ruin your day in Philadelphia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free City-Wide Estimates
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.draincleaningnearme.us/drain-cleaning-philadelphia#organization",
              "name": "DrainCleaningNearMe Services Philadelphia",
              "url": "https://www.draincleaningnearme.us/drain-cleaning-philadelphia",
              "description": "24/7 drain cleaning services Philadelphia. Expert clogged drain repair, sewer cleaning Philadelphia PA, hydro jetting, and emergency plumber services.",
              "telephone": "+1-724-750-6935",
              "priceRange": "$160-$900",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Philadelphia",
                "addressRegion": "PA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.9526,
                "longitude": -75.1652
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 39.9526,
                  "longitude": -75.1652
                },
                "radius": "50000"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": [
                { "@type": "Place", "name": "South Philadelphia" },
                { "@type": "Place", "name": "West Philadelphia" },
                { "@type": "Place", "name": "Northeast Philadelphia" },
                { "@type": "Place", "name": "Center City Philadelphia" },
                { "@type": "Place", "name": "Bucks County PA" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Drain Cleaning Services Philadelphia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hydro Jetting Philadelphia",
                      "description": "High-pressure water jetting for sewer and drain cleaning services Philadelphia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Drain Cleaning Philadelphia",
                      "description": "24/7 emergency plumber Philadelphia for clogged drain repair"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.draincleaningnearme.us/drain-cleaning-philadelphia#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does drain cleaning cost in Philadelphia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typical drain cleaning Philadelphia costs range from $160–$410 depending on clog severity and pipe access. Hydro jetting services Philadelphia PA average $388–$866. Sewer line issues may reach $900. Free estimates available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What causes recurring clogs in Philadelphia homes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Recurring clogs stem from grease buildup in kitchen drains, hair/soap blockages in bathrooms, and tree root intrusion in Philadelphia's aging cast iron and clay sewer lines. Corrosion from mineral deposits also contributes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is hydro jetting safe for Philadelphia pipes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, hydro jetting is safe for most Philadelphia pipes including cast iron. It uses only high-pressure water (no chemicals) at controlled PSI to remove grease, roots, and debris without damaging pipes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can you respond to emergency drain cleaning Philadelphia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Emergency drain cleaning Philadelphia response time averages 30-60 minutes across metro areas including South Philly, Northeast Philadelphia, and Center City."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer 24/7 emergency plumbing services in Philadelphia PA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, 24/7 emergency plumber Philadelphia services available for sewer backups, clogged drains, and hydro jetting needs anytime."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to prevent slow drains in Philadelphia rowhomes?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Use drain screens for hair, avoid pouring grease down kitchen drains, schedule annual professional drain cleaning Philadelphia maintenance, and consider root barriers for tree-heavy areas."
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
