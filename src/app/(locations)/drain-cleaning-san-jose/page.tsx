import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Drain Cleaning San Jose | Emergency Rooter Services",
  description: "Sewer line clogged drain in San Jose? Get fast, same-day drain cleaning services. From rooter service to emergency repairs & hydro jetting, we restore flow today. Call now!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-jose",
  }
};

export default function SanJosePage() {
  return (
    <ServicePageLayout
      title="Top-Rated Drain Cleaning & Rooter Services in San Jose, CA"
      subtitle="Fast, Same-Day Response to Stop Costly Drain Damage"
      description={
        <>
          <p>
            Tired of slow drains, gurgling toilets or sewer backups flooding your San Jose home? Our expert team at DrainCleaningNearMe delivers fast, reliable drain cleaning services which San Jose homeowners and businesses trust; stopping clogs before they cause costly damage.
          </p>
          <p>
            We offer 24/7 emergency availability, licensed and insured technicians, same-day response, and a 100% satisfaction guarantee. Call Now for a <span className="font-bold text-white">Free Estimate: (724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "Drain Snaking / Augering in San Jose",
        "Hydro Jetting (High-Pressure Cleaning)",
        "Sewer Line Cleaning & Root Removal",
        "Kitchen & Bathroom Drain Cleaning",
        "24/7 Emergency Drain Services",
        "Video Camera Drain Inspections"
      ]}
      whyChooseUs={[
        "Same-Day Service: 90% of jobs completed within hours",
        "Advanced Equipment: Video cameras + hydro jetting",
        "Licensed & Insured: California-certified experts",
        "Affordable Pricing: Transparent rates; no hidden fees",
        "Local Expertise: From Almaden Valley roots to Cupertino storm drains",
      ]}
    >
      <div className="space-y-24">
        {/* San Jose Challenges Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            Why San Jose Needs <span className="text-primary italic">Expert Drain Cleaning</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            San Jose's booming tech hub status means packed neighborhoods like Willow Glen, Almaden Valley and Evergreen face unique plumbing woes. Homeowners in older homes near downtown deal with aging clay pipes crumbling under tree root intrusion, exacerbated by our dry California summers. Businesses in Santa Clara Valley battle grease clogs from high-volume kitchens.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Trees, title: "Tree Root Intrusion", text: "Roots aggressively seek water during dry CA summers, invading crumbling clay pipes in older neighborhoods." },
              { icon: Droplets, title: "Storm Drain Floods", text: "Winter rains trigger backups in storm and French drains. Hard water from local sources causes mineral buildup over time." },
              { icon: Building2, title: "Commercial Grease", text: "Restaurants and tech campuses in Santa Clara Valley see frequent grease and debris clogs from high-volume usage." }
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
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Signs You Need Immediate Drain Cleaning</h2>
            <div className="space-y-6 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
              <p>Do not ignore these red flags in your San Jose home or business areas. Ignoring slow drains leads to 70% more repair costs.</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Water Backing Up:</strong> Standing water in sinks or tubs signals a main line clog.</li>
                 <li><strong className="text-primary">Slow Drainage:</strong> Affecting multiple fixtures across the house.</li>
                 <li><strong className="text-primary">Frequent Clogs:</strong> Constant issues despite DIY plunging or chemicals.</li>
                 <li><strong className="text-primary">Overflowing Toilets:</strong> Raw sewage backup risking health damage.</li>
                 <li><strong className="text-primary">Bad Odors & Gurgling:</strong> Air trapped by blocked pipes emitting sewer gases.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-black uppercase italic mb-6 text-white mt-8">Our Proven Process</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-white">Inspection:</strong> Free camera scope for detecting sewer line issues.</li>
                  <li><strong className="text-white">Diagnosis:</strong> Pinpoint cause (tree roots in sewer or grease clogging).</li>
                  <li><strong className="text-white">Selection:</strong> Snake, Hydro jet or combo based on blockage severity.</li>
                  <li><strong className="text-white">Clearing:</strong> Powerful, safe blockage removal using modern tools.</li>
                  <li><strong className="text-white">Final Testing:</strong> Run water to confirm flow and provide future prevention tips.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-black uppercase italic mb-4 text-white">San Jose & Beyond</h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                Proudly offering fast, effective drain services in San Jose and across the greater Santa Clara Valley to keep lines flowing smoothly.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["San Jose", "Santa Clara", "Sunnyvale", "Cupertino", "Milpitas", "Campbell", "Willow Glen", "Almaden Valley", "Evergreen"].map((area) => (
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
            San Jose Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in San Jose?", a: "$150–$400 depending on method (snaking cheapest, hydro jetting $300+). Free estimates! Factors: Location and severity." },
              { q: "How long does professional drain cleaning take?", a: "30–90 minutes for most jobs. Emergency drain service San Jose same-day." },
              { q: "DIY vs. professional drain cleaning—which is better?", a: "DIY works for minor hair clogs, but pros handle root intrusion and grease. DIY fails 60% on main lines." },
              { q: "What causes recurring clogs in San Jose drains?", a: "Tree roots, hard water minerals, grease. Annual hydro jetting prevents recurring backups." },
              { q: "Is hydro jetting safe for San Jose pipes?", a: "Yes—for modern PVC. We inspect first to avoid issues in older clay pipes." },
              { q: "What if I have a sewer backup?", a: "Call our emergency plumber San Jose immediately to prevent bacteria spread and flooding." }
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
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Call Now for Fast Drain Cleaning in San Jose</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not let a clogged drain in San Jose ruin your day. With our 24/7 team, advanced hydro jetting and local know-how, we restore flow in San Jose today. Join 5,000+ satisfied customers!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free On-Site Estimates
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.draincleaningnearme.us/#organization",
                  "name": "DrainCleaningNearMe Services San Jose",
                  "description": "Professional drain cleaning services San Jose offering emergency rooter services, hydro jetting, sewer line cleaning, and 24/7 unclogging for homes & businesses.",
                  "url": "https://www.draincleaningnearme.us/drain-cleaning-san-jose",
                  "telephone": "+1-724-750-6935",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "San Jose",
                    "addressRegion": "CA",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 37.3382,
                    "longitude": -121.8863
                  },
                  "areaServed": [
                    "San Jose", "Santa Clara", "Sunnyvale", "Cupertino", "Milpitas", "Campbell", "Willow Glen", "Almaden Valley", "Evergreen"
                  ],
                  "serviceType": [
                    "Drain Cleaning Services San Jose",
                    "Hydro Jetting San Jose",
                    "Rooter Services San Jose",
                    "Sewer Line Cleaning San Jose",
                    "Emergency Drain Cleaning San Jose"
                  ],
                  "openingHours": "Mo-Su 00:00-23:59",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Drain Cleaning Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Hydro Jetting San Jose",
                          "description": "High-pressure sewer cleaning for clogs and roots."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Emergency Drain Services San Jose",
                          "description": "24/7 unclog drain San Jose response."
                        }
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "5000",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.draincleaningnearme.us/drain-cleaning-san-jose#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How much does drain cleaning cost in San Jose?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "$150–$400 depending on method (snaking cheapest, hydro jetting $300+). Free estimates! Factors: Location and severity."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does professional drain cleaning take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "30–90 minutes for most jobs. Emergency drain service San Jose same-day."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "DIY vs. professional drain cleaning—which is better?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DIY works for minor hair clogs, but pros handle root intrusion and grease. DIY fails 60% on main lines."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What causes recurring clogs in San Jose drains?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tree roots, hard water minerals, grease. Annual hydro jetting prevents."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is hydro jetting safe for San Jose pipes?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—for modern PVC. We inspect first to avoid issues in older clay pipes."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you handle commercial drain cleaning San Jose?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely—restaurants, offices in Milpitas and beyond."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What if I have a sewer backup?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Call our emergency plumber San Jose immediately to prevent flooding."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </div>
    </ServicePageLayout>
  );
}
