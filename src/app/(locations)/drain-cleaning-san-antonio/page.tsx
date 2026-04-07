import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency San Antonio Drain Cleaning | Top-Rated Local Plumbers",
  description: "Professional drain cleaning services San Antonio TX. From sewer & kitchen clogs; hydro jetting to sewer line repair, we fix slow pipes fast. Affordable & Expert. Book Today!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-antonio",
  }
};

export default function SanAntonioPage() {
  return (
    <ServicePageLayout
      title="Reliable Drain Cleaning & Hydro Jetting Services in San Antonio, Texas"
      subtitle="Stop Slow Drains Today: Same-Day Service Available!"
      description={
        <>
          <p>
            Clogged drains disrupt daily life in San Antonio homes and businesses, but DrainCleaningNearMe Services delivers fast, reliable solutions customized to local challenges like hard water buildup and tree root intrusions. Our expert team uses advanced hydro jetting and inspection tools to clear blockages permanently.
          </p>
          <p>
            Tired of gurgling toilets, foul odors or standing water in your kitchen sink? San Antonio's hard water minerals, grease clogs and shifting clay soils make drain problems common. Let us fix them fast. Call Now: <span className="font-bold text-white">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "Emergency Drain Cleaning San Antonio",
        "Residential Drain Cleaning (Kitchen/Bath)",
        "Commercial Drain & Grease Removal",
        "Sewer Line Cleaning & Root Removal",
        "Hydro Jetting Services in San Antonio TX",
        "Video Camera Drain Inspections"
      ]}
      whyChooseUs={[
        "Licensed & Insured Local Experts",
        "Same-Day Service: Fast response within hours",
        "Advanced Equipment: Hydro jetting and camera inspection",
        "Affordable Rates: Transparent no-surprise pricing",
        "Long-Term Fixes: Removes roots and buildup for good",
      ]}
    >
      <div className="space-y-24">
        {/* San Antonio Challenges Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            San Antonio's Local <span className="text-primary italic">Drain Problems</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            San Antonio homeowners face unique plumbing woes due to the Edwards Aquifer's hard water, which causes mineral scaling in pipes, leading to slow drains and reduced flow. Grease from Tex-Mex cooking, hair, and soap scum exacerbate clogs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Droplets, title: "Edwards Aquifer Hard Water", text: "Mineral scaling in pipes leads to slow drains and reduced flow for Stone Oak and Helotes homes." },
              { icon: Building2, title: "Grease & Tex-Mex Cooking", text: "Grease and food waste from kitchens solidify in pipes, worsened by hard water across the downtown area." },
              { icon: Trees, title: "Clay Soils & Root Intrusion", text: "Tree roots seek moisture in sewer lines of mature neighborhoods like Alamo Heights and Boerne properties." }
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
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Signs You Need Immediate Service</h2>
            <div className="space-y-6 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
              <p>Watch for these red flags indicating clogged drains in San Antonio to prevent sewer backups and pipe damage.</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Slow Drains:</strong> In sinks or showers, often from hard water minerals.</li>
                 <li><strong className="text-primary">Foul Odors:</strong> Signaling grease or sewer buildup.</li>
                 <li><strong className="text-primary">Gurgling Sounds:</strong> In pipes, a sign of air trapped by blockages.</li>
                 <li><strong className="text-primary">Water Backups:</strong> In multiple fixtures, common with tree root intrusion.</li>
                 <li><strong className="text-primary">Standing Water:</strong> In tubs or toilets, risking overflows.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-black uppercase italic mb-6 text-white mt-8">Our Proven Process</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-white">Inspection:</strong> Arrive quickly and assess the issue visually.</li>
                  <li><strong className="text-white">Diagnosis:</strong> Use camera for accurate identification of clogs or roots.</li>
                  <li><strong className="text-white">Cleaning:</strong> Apply snaking, hydro jetting or root cutting based on finding.</li>
                  <li><strong className="text-white">Testing:</strong> Run water to verify full flow and check for issues.</li>
                  <li><strong className="text-white">Prevention Tips:</strong> Free advice like hot water flushes to avoid recurrence.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Serving San Antonio & Beyond</h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                Fast arrival guaranteed for drain unclogging in San Antonio and surrounding Texas communities. We know hard water and rooter issues intimately.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["San Antonio", "Alamo Heights", "Stone Oak", "Helotes", "Boerne", "New Braunfels"].map((area) => (
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
            San Antonio Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How often should drains be cleaned in San Antonio?", a: "Quarterly for high-use homes, annually for prevention – combats hard water buildup common in San Antonio's mineral-rich water supply." },
              { q: "What is hydro jetting?", a: "High-pressure water (up to 4,000 PSI) cleans pipe walls, roots, and grease without chemicals. Superior to snaking for thorough, eco-friendly cleaning." },
              { q: "Are chemical cleaners safe for San Antonio drains?", a: "No – they damage pipes worsened by minerals. Opt for professional pipe cleaning service instead." },
              { q: "How much does drain cleaning cost in San Antonio?", a: "$179-$239 average; main line $400 max. Hydro jetting varies but prevents repeats and costly sewer repairs." },
              { q: "When should I call a professional for clogged drain San Antonio?", a: "For backups, odors, or multiple fixtures – DIY fails on roots or soil shifts common in our clay soils." },
              { q: "Can tree roots be removed without digging?", a: "Yes, via hydro jetting or cutting tools after camera inspection – perfect for San Antonio's mature neighborhoods." }
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
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Get Fast & Reliable Drain Cleaning Today!</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not let San Antonio sewer cleaning issues flood your day; our sewer cleaning experts resolve clogged drain issues for a long period of time. With same-day emergency assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Priority Emergency Dispatch &middot; Limited same-day slots available
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
                  "@id": "https://www.draincleaningnearme.us/drain-cleaning-san-antonio#organization",
                  "name": "DrainCleaningNearMe Services San Antonio",
                  "url": "https://www.draincleaningnearme.us/drain-cleaning-san-antonio",
                  "description": "Professional drain cleaning services San Antonio TX. Emergency drain cleaning, hydro jetting, sewer line repair, and unclogging for homes and businesses.",
                  "telephone": "+1-210-123-4567",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "San Antonio",
                    "addressRegion": "TX",
                    "addressCountry": "US",
                    "postalCode": "78201"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 29.4241,
                    "longitude": -98.4936
                  },
                  "areaServed": [
                    { "@type": "City", "name": "San Antonio" },
                    { "@type": "City", "name": "Alamo Heights" },
                    { "@type": "City", "name": "Stone Oak" },
                    { "@type": "City", "name": "Helotes" },
                    { "@type": "City", "name": "Boerne" },
                    { "@type": "City", "name": "New Braunfels" }
                  ],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "00:00",
                      "closes": "23:59"
                    }
                  ],
                  "serviceType": [
                    "Drain Cleaning",
                    "Emergency Drain Cleaning",
                    "Hydro Jetting",
                    "Sewer Line Cleaning",
                    "Video Camera Inspection",
                    "Clogged Drain Repair"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Drain Cleaning Services San Antonio",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Residential Drain Cleaning San Antonio",
                          "description": "Kitchen and bathroom drain unclogging for San Antonio homes."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Hydro Jetting San Antonio",
                          "description": "High-pressure pipe cleaning for grease, roots, and mineral buildup."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.draincleaningnearme.us/drain-cleaning-san-antonio#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How often should drains be cleaned in San Antonio?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Quarterly for high-use homes, annually for prevention – combats hard water buildup common in San Antonio's mineral-rich water supply."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is hydro jetting?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "High-pressure water (up to 4,000 PSI) cleans pipe walls, roots, and grease without chemicals. Superior to snaking for thorough, eco-friendly cleaning."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are chemical cleaners safe for San Antonio drains?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No – they damage pipes worsened by minerals. Opt for professional pipe cleaning service instead."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does drain cleaning cost in San Antonio?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "$179-$239 average; main line $400 max. Hydro jetting varies but prevents repeats and costly sewer repairs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When should I call a professional for clogged drain San Antonio?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For backups, odors, or multiple fixtures – DIY fails on roots or soil shifts common in our clay soils."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does San Antonio hard water cause more clogs?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes – minerals scale pipes rapidly, making professional cleaning essential."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can tree roots be removed without digging?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, via hydro jetting or cutting tools after camera inspection – perfect for San Antonio's mature neighborhoods."
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
