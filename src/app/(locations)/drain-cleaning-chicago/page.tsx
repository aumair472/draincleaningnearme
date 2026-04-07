import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning Chicago | Licensed & Insured Plumbers",
  description: "Expert drain cleaning services in Chicago. DrainCleaningNearMe offers professional sewer cleaning, clogged drain repair & hydro jetting. Affordable, trusted & 24/7. Book today",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-chicago",
  }
};

export default function ChicagoPage() {
  return (
    <ServicePageLayout
      title="Professional Chicago Drain Cleaning: Fast, Reliable & Local"
      subtitle="Fast & Reliable Drain Cleaning in Chicago"
      description={
        <>
          <p>
            Chicago homeowners face relentless drain issues from grease buildup in busy kitchens, hair clogs in bathrooms and tree roots invading aging sewer lines; especially in neighborhoods with heavy rainfall and old infrastructure. Slow drains turn into gurgling toilets and sewage backups overnight, creating bad smells and health hazards.
          </p>
          <p>
            DrainCleaningNearMe provides emergency drain cleaning services for Chicago residents; trusted to unclog pipes fast and prevent backups. Call Now for 24/7 Drain Relief: <span className="font-bold text-white">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "24/7 Emergency Drain Cleaning Chicago",
        "Hydro Jetting Services (Heavy Grease & Roots)",
        "Sewer Line Cleaning & Main Drain Clearing",
        "Kitchen & Bathroom Drain Unclogging",
        "Deep Trenchless Pipe Inspections",
        "Commercial & Residential Rooter Services"
      ]}
      whyChooseUs={[
        "Local Knowledge: We navigate Chicago's aging infrastructure safely",
        "Available 24/7: Emergency dispatch for sudden sewer backups",
        "Affordable Pricing: Free estimates and upfront costs",
        "High-Tech Tools: High-pressure hydro jets and cameras",
        "Fully Licensed: Insured technicians serving all Chicagoland",
      ]}
    >
      <div className="space-y-24">
        {/* Chicago Challenges Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            Why Chicago Homes Need <span className="text-primary italic">Expert Drain Maintenance</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            Winter freezes and spring storms in Chicago put immense pressure on aging plumbing systems. When combined with common household habits, these older pipe networks can easily become blocked, leading to costly consequences if not addressed promptly by licensed professionals.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Droplets, title: "Winter Pipe Stress", text: "Freezing temperatures strain pipes, causing fats and grease to solidify instantly and trap debris." },
              { icon: Trees, title: "Tree Roots & Aging Pipes", text: "Historic Chicago neighborhoods have clay sewer lines that mature tree roots easily penetrate and block." },
              { icon: Building2, title: "Heavy Storm Overflows", text: "Spring torrential rains overwhelm the city's combined sewer systems, causing basement flooding." }
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
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Warning Signs in Your Home</h2>
            <div className="space-y-6 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
              <p>Catching drainage issues early in Chicago can save you from immense property damage. Look out for:</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Gurgling Drains:</strong> Air pockets trapped behind developing clogs creating noise when draining.</li>
                 <li><strong className="text-primary">Foul Basement Odors:</strong> Sewer gases escaping from compromised main lines inside the house.</li>
                 <li><strong className="text-primary">Slow Drainage:</strong> Water pooling around shower floors or persisting in kitchen sinks.</li>
                 <li><strong className="text-primary">Backups:</strong> Toilet water bubbling when the sink runs, a sure sign of a main sewer line blockage.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-black uppercase italic mb-6 text-white mt-8">Our Proven Process</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-white">Rapid Response:</strong> We arrive fast with everything needed to diagnose the issue.</li>
                  <li><strong className="text-white">Camera Check:</strong> We never guess. We scope the line to identify roots or breaks.</li>
                  <li><strong className="text-white">Treatment:</strong> Snaking for simple blockages or 4000 PSI hydro jetting for the rest.</li>
                  <li><strong className="text-white">Verification:</strong> Ensuring unrestricted flow before we leave the site.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Serving Chicagoland</h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                From downtown highrises to suburban homes, our plumbers cover the entire Chicago metro area 24/7.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Downtown Chicago", "Lakeview", "Lincoln Park", "Wicker Park", "Logan Square", "West Loop", "South Side", "North Shore", "Evanston", "Oak Park"].map((area) => (
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
            Chicago Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in Chicago?", a: "Standard snaking usually costs $150-$350. Heavy-duty hydro jetting and sewer line cleaning can range from $300-$800+ depending on severity." },
              { q: "What should I do if my Chicago basement is flooding?", a: "Turn off your main water supply if possible and call our 24/7 emergency hotline immediately to dispatch a crew and prevent further damage." },
              { q: "How often should I clean my drains?", a: "For homes with older clay pipes prone to tree roots, annual hydro jetting is highly recommended. Otherwise, every 1-2 years." },
              { q: "Can you fix frozen pipes?", a: "Yes, we handle burst pipes and frozen lines common in Chicago winters, along with the drain backups they cause." },
              { q: "Are harsh chemicals safe to use?", a: "We strongly advise against liquid drain cleaners. In cold environments, they can solidify or severely corrode old metal pipes." },
              { q: "Do you offer commercial services?", a: "Absolutely. We routinely maintain grease traps and main sewer lines for restaurants and properties across Chicagoland." }
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
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Get Professional Flow Restoration Now</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not wait for a small clog to become a flooded basement. Speak directly with a Chicago plumbing expert and schedule your visit in minutes. Available for same-day emergency drain cleaning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Chicago Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free Estimates
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "DrainCleaningNearMe – Drain Cleaning Services Chicago",
              "description": "Emergency drain cleaning and sewer line cleaning in Chicago. Licensed, insured plumbers offering hydro jetting, camera inspection, and 24/7 service.",
              "url": "https://www.draincleaningnearme.us/drain-cleaning-chicago",
              "priceRange": "$$",
              "telephone": "+1-724-750-6935",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chicago, IL",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8781,
                "longitude": -87.6298
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ]
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
                    "name": "How much does drain cleaning cost in Chicago?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Standard snaking usually costs $150-$350. Heavy-duty hydro jetting and sewer line cleaning can range from $300-$800+ depending on severity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What should I do if my Chicago basement is flooding?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Turn off your main water supply if possible and call our 24/7 emergency hotline immediately to dispatch a crew and prevent further damage."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How often should I clean my drains?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For homes with older clay pipes prone to tree roots, annual hydro jetting is highly recommended. Otherwise, every 1-2 years."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you fix frozen pipes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we handle burst pipes and frozen lines common in Chicago winters, along with the drain backups they cause."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are harsh chemicals safe to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We strongly advise against liquid drain cleaners. In cold environments, they can solidify or severely corrode old metal pipes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer commercial services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We routinely maintain grease traps and main sewer lines for restaurants and properties across Chicagoland."
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
