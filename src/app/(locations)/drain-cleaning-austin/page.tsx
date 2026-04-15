import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning in Austin | Fast Sewer unclogging Service",
  description: "Expert drain cleaning services Austin, TX. We fix hard water buildup, tree roots & sewer line cleaning. Reliable residential & commercial rooter services experts. Book today!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-austin",
  }
};

export default function AustinPage() {
  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Rooter Services with Upfront Pricing"
      subtitle="24/7 Emergency Drain Cleaning Austin"
      description={
        <>
          <p>
            Tired of slow drains, foul odors and water backups in your Austin home or business? Our licensed local plumbers specialize in fast, same-day drain cleaning and sewer line repair across Austin, Texas. From clogged kitchen sinks to sewer backups caused by tree roots and Texas clay soil, we clear your pipes and restore flow.
          </p>
          <p>
            DrainCleaningNearMe provides 24/7 emergency drain cleaning services across Austin because backups do not wait for daytime. Call Now for a Free Estimate with no hidden fees: <span className="font-bold text-text">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "Emergency Drain Cleaning (24/7 Available)",
        "Kitchen Drain Cleaning (Grease & Food)",
        "Bathroom Drain Cleaning (Hair & Soap)",
        "Sewer Line Cleaning (Root Removal)",
        "Hydro Jetting Services Austin",
        "Drain Snaking & Camera Inspections"
      ]}
      whyChooseUs={[
        "Upfront pricing; no hidden fees",
        "Fast response times; often within hours",
        "Same-day service; no more waiting days",
        "Licensed, bonded and insured plumbers serving Austin",
        "Advanced equipment: snaking, hydro jetting & cameras",
      ]}
    >
      <div className="space-y-24">
        {/* Austin Challenges Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Austin's Unique <span className="text-primary ">Drain Problems</span>
          </h2>
          <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            Austin's unique environment; hard water, clay-rich soil and live oak trees; makes drain problems more common than in many other cities. Over time, mineral buildup, tree roots and grease clogs narrow your pipes.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Droplets, title: "Hard Water Mineral Buildup", text: "Austin's limestone-rich water leaves calcium and magnesium deposits in pipes, narrowing them over time." },
              { icon: Trees, title: "Tree Root Intrusion", text: "Live oak trees are common in Austin. Their roots seek moisture and can invade sewer lines, causing cracks." },
              { icon: Building2, title: "Soil Movement & Clay", text: "Central Texas's clay-rich soil expands and contracts with temperature changes, stressing underground pipes." }
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
            <h2 className="text-2xl font-bold uppercase  mb-8 text-text">Signs You Need Drain Cleaning</h2>
            <div className="space-y-6 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
              <ul className="space-y-4">
                 <li><strong className="text-primary">Slow Draining:</strong> One drain is slow (1 visit), multiple drains (sewer line issue).</li>
                 <li><strong className="text-primary">Recurring Clogs:</strong> Clogs that return after plunging indicate deep blockages.</li>
                 <li><strong className="text-primary">Foul Odors:</strong> Sewage smells indoors or outdoors signal line issues.</li>
                 <li><strong className="text-primary">Gurgling Sounds:</strong> Air trapped in the system due to clogs.</li>
                 <li><strong className="text-primary">Water Backups:</strong> Water backing up into sinks/tubs is a severe clog.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-bold uppercase  mb-6 text-text mt-8">Our Process to fix your Drains</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-text">Inspection:</strong> Camera inspection and pressure testing.</li>
                  <li><strong className="text-text">Diagnosis:</strong> Determine clog type, location, and severity.</li>
                  <li><strong className="text-text">Cleaning:</strong> Snaking for minor, hydro jetting for stubborn clogs.</li>
                  <li><strong className="text-text">Final Testing:</strong> Flow tests to ensure proper drainage and integrity.</li>
                  <li><strong className="text-text">Prevention:</strong> Water softener and structural advice.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm  flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-bold uppercase  mb-4 text-text">Local Expertise in Austin</h2>
             <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                Our team serves all Austin neighborhoods with advanced equipment and emergency response.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Downtown", "South Austin", "Westlake", "Lakeline", "Round Rock", "Pflugerville"].map((area) => (
                  <span key={area} className="px-4 py-2 bg-bg border-border/50 border border-border rounded-full text-[10px] font-bold uppercase tracking-widest text-primary ">
                    {area}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h2 className="text-3xl font-bold uppercase  mb-12 text-center text-text">
            Austin Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How often should drains be cleaned?", a: "Residential drains: 1–2 times per year. Commercial drains: every 3–6 months." },
              { q: "What is hydro jetting?", a: "Hydro jetting uses high-pressure water to blast away mineral buildup, grease, and roots. Eco-friendly and effective." },
              { q: "Are chemical cleaners safe?", a: "No. Chemical cleaners can corrode pipes and damage the environment. Use snaking or hydro jetting instead." },
              { q: "How fast is emergency service?", a: "Same-day service available 24/7. Response times vary by location and severity." },
              { q: "Typical drain cleaning costs in Austin?", a: "Emergency: $150–$300, Sewer Line: $300–$800, Hydro Jetting: $250–$500. Free estimates included." }
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
          <h2 className="text-3xl font-bold uppercase tracking-tight text-text ">Call Now for Drain Cleaning in Austin</h2>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Tired of waiting days for drain cleaning services? Our licensed Austin plumbers provide same-day, 24/7 emergency drain cleaning with upfront pricing and no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            Licensed Austin Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free City-Wide Estimates
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "DrainCleaningNearMe – Drain Cleaning Services in Austin, TX",
              "description": "Professional drain cleaning and rooter services in Austin, TX. Emergency drain cleaning, hydro jetting, sewer line cleaning, and more. Same‑day service available 24/7.",
              "serviceType": "Drain Cleaning",
              "provider": {
                "@type": "LocalBusiness",
                "name": "DrainCleaningNearMe",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Austin, TX",
                  "addressLocality": "Austin",
                  "addressRegion": "TX",
                  "addressCountry": "US",
                  "postalCode": "78701"
                },
                "telephone": "+17247506935",
                "openingHours": "Mo-Su 00:00-23:59",
                "priceRange": "$$",
                "areaServed": "Austin, TX"
              },
              "offers": {
                "@type": "Offer",
                "name": "Emergency Drain Cleaning",
                "price": 150,
                "priceCurrency": "USD",
                "availability": "InStock"
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
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How often should drains be cleaned?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Residential drains: 1–2 times per year. Commercial drains: every 3–6 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is hydro jetting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hydro jetting uses high-pressure water to blast away mineral buildup, grease, and roots. Eco-friendly and effective."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are chemical cleaners safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Chemical cleaners can corrode pipes and damage the environment. Use snaking or hydro jetting instead."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast is emergency service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Same-day service available 24/7. Response times vary by location and severity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Typical drain cleaning costs in Austin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Emergency: $150–$300, Sewer Line: $300–$800, Hydro Jetting: $250–$500. Free estimates included."
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
