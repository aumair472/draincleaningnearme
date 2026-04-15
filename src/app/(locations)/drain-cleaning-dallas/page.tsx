import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Trees, Droplets } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning in Dallas, TX | Licensed, Insured & Local",
  description: "Clogged drain in Dallas? Get fast, reliable drain cleaning & Rooter services from kitchen grease buildup to emergency sewer main line cleaning, we are 24/7 available. Call Now!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-dallas",
  }
};

export default function DallasPage() {
  return (
    <ServicePageLayout
      title="Expert Drain Cleaning Services in Dallas with Upfront Pricing"
      subtitle="Fast, Reliable Emergency Drain Cleaning & Rooter Services"
      description={
        <>
          <p>
            Tired of slow drains, foul odors or sudden backups disrupting your Dallas home or business? DrainCleaningNearMe delivers fast, reliable drain cleaning services in Dallas, TX; using advanced hydro jetting and rooter services to restore flow instantly; guaranteed.
          </p>
          <p>
            Licensed, Insured & 24/7 Emergency Response in Dallas Neighborhoods like Lakewood, Oak Lawn, Highland Park, and Dixon Circle. Call Now for Same-Day Service: <span className="font-bold text-text">(724) 750-6935</span> | Get Your Free Estimate.
          </p>
        </>
      }
      features={[
        "Emergency Drain Cleaning Dallas: 24/7",
        "Residential Drain Cleaning (Kitchen/Bath)",
        "Commercial Enzyme Foam Grease Removal",
        "Sewer Line Cleaning Dallas",
        "Hydro Jetting Services Dallas TX",
        "Waterproof HD Camera Inspections"
      ]}
      whyChooseUs={[
        "Local Expertise: Serving Oak Lawn to Highland Park",
        "Same-Day & 24/7 Service: 1-2 hour emergency response",
        "Advanced Equipment: Hydro jetting & camera inspections",
        "Affordable Pricing: Transparent upfront rates",
        "Satisfaction Guarantee: Re-clean free if issues return within 7 days",
      ]}
    >
      <div className="space-y-24">
        {/* Dallas Challenges Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Why Dallas Homes face <span className="text-primary ">Frequent Drain Issues</span>
          </h3>
          <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            Dallas's unique climate and soil create perfect conditions for plumbing nightmares. With hard water averaging 8.9 grains per gallon, mineral buildup clogs pipes quickly, reducing water pressure and damaging fixtures.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Droplets, title: "Hard Water Scaling", text: "Minerals combine with grease and hair to cause stubborn blockages in older Dallas homes." },
              { icon: Building2, title: "Shifting Clay Soil", text: "Swelling in heavy rains and shrinking in scorching summers cracks sewer lines." },
              { icon: Trees, title: "Aggressive Tree Roots", text: "Cedar elms and Mexican sycamores common in Lakewood aggressively seek cracked pipes." }
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
            <h3 className="text-2xl font-bold uppercase mb-8 text-text">Signs You Need Professional Help</h3>
            <div className="space-y-6 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
              <p>Ignore these signs at your peril; DIY chemicals roughen pipes, worsening clogs over time.</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Slow Draining:</strong> Water draining slowly from sinks or tubs.</li>
                 <li><strong className="text-primary">Multiple Clogs:</strong> Fixtures clogging simultaneously (main drain line issue).</li>
                 <li><strong className="text-primary">Foul Smells:</strong> Sewage smells from drains during hot Dallas summers.</li>
                 <li><strong className="text-primary">Standing Water:</strong> In showers or around toilets.</li>
                 <li><strong className="text-primary">Recurring Problems:</strong> Despite plunging or store-bought cleaners.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h3 className="text-2xl font-bold uppercase mb-6 text-text mt-8">Our Proven Process</h3>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-text">Inspection:</strong> Arrive fast, assess visible signs in your home.</li>
                  <li><strong className="text-text">Diagnosis:</strong> Camera inspection reveals hidden roots or scaling.</li>
                  <li><strong className="text-text">Cleaning:</strong> Hydro jetting or snaking clears 99% of blockages.</li>
                  <li><strong className="text-text">Testing:</strong> Run water to verify full unclogged flow.</li>
                  <li><strong className="text-text">Prevention:</strong> Custom advice, like strainers for grease-prone kitchens.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm  flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h3 className="text-2xl font-bold uppercase mb-4 text-text">Serving Dallas Neighborhoods</h3>
             <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                We are your Dallas drain experts with local know-how, serving everywhere from Oak Lawn to South Dallas.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Dallas", "Oak Lawn", "Highland Park", "Lakewood", "Dixon Circle", "University Park", "South Dallas"].map((area) => (
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
            Dallas Drain <span className="text-primary">FAQ</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How Much Does Drain Cleaning Cost in Dallas TX?", a: "Expect $137-$341 for standard jobs; hydro jetting $250-$600. Factors include location and severity." },
              { q: "How Often Should Drains Be Cleaned in Dallas?", a: "Kitchen monthly, bathrooms 3-4 months, main lines yearly—more in root-heavy areas like University Park." },
              { q: "Is Hydro Jetting Safe for Dallas Pipes?", a: "Yes—uses only water, safe for all pipes, eco-friendly, and extends life vs. chemicals." },
              { q: "What Causes Recurring Clogs in Dallas?", a: "Hard water minerals, grease, tree roots from cedar elms exploiting clay soil cracks." },
              { q: "Can DIY Fix Clogged Drains Dallas?", a: "Minor yes, but chemicals damage pipes; pros handle roots and mains safely." },
              { q: "Do You Offer Sewer Hydro Jetting Service Dallas?", a: "Absolutely—powerful for roots and FOG in commercial/residential lines." },
              { q: "What's Emergency Drain Service Response Time?", a: "1-2 hours, 24/7 for backups anywhere in Dallas TX." }
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
          <h3 className="text-3xl font-bold uppercase tracking-tight text-text">Stop Dallas Drain Disasters; Act Now!</h3>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not let clogs turn into sewer line repair Dallas nightmares amid shifting soils and hard water. Call today for hydro jetting, rooter services or any emergency drain repair.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
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
              "name": "DrainCleaningNearMe Services Dallas",
              "description": "Expert drain cleaning services in Dallas TX including hydro jetting, sewer line cleaning, and emergency drain repair. Serving all Dallas neighborhoods with 24/7 service.",
              "url": "https://www.draincleaningnearme.us/drain-cleaning-dallas",
              "telephone": "(724) 750-6935",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.7767,
                "longitude": -96.7970
              },
              "areaServed": [
                { "@type": "City", "name": "Dallas" },
                { "@type": "AdministrativeArea", "name": "Oak Lawn" },
                { "@type": "AdministrativeArea", "name": "Highland Park" },
                { "@type": "AdministrativeArea", "name": "Lakewood" }
              ],
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "serviceType": [
                "Hydro Jetting Dallas",
                "Drain Cleaning Services Dallas TX",
                "Emergency Drain Cleaning Dallas"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Drain Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Drain Cleaning",
                      "description": "Professional unclogging for homes in Dallas TX."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hydro Jetting Services Dallas",
                      "description": "High-pressure cleaning for stubborn clogs and roots."
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
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How Much Does Drain Cleaning Cost in Dallas TX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Expect $137-$341 for standard jobs; hydro jetting $250-$600. Factors include location and severity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Often Should Drains Be Cleaned in Dallas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kitchen monthly, bathrooms 3-4 months, main lines yearly—more in root-heavy areas like University Park."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Hydro Jetting Safe for Dallas Pipes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes—uses only water, safe for all pipes, eco-friendly, and extends life vs. chemicals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What Causes Recurring Clogs in Dallas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hard water minerals, grease, tree roots from cedar elms exploiting clay soil cracks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can DIY Fix Clogged Drains Dallas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minor yes, but chemicals damage pipes; pros handle roots and mains safely."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do You Offer Sewer Hydro Jetting Service Dallas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely—powerful for roots and FOG in commercial/residential lines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's Emergency Drain Service Dallas Response Time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1-2 hours, 24/7 for backups anywhere in Dallas TX."
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
