import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Droplets, Trees } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Cleaning Services Houston TX | Licensed & Insured Plumbers",
  description: "Emergency drain cleaning services in Houston; available 24/7! Fast & affordable clogged drain repair & sewer cleaning. Reliable, expert plumbers ready now. Call for help!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-houston",
  }
};

export default function HoustonPage() {
  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Rooter Services in Houston"
      subtitle="Available 24/7 For Fast, Emergency Houston Drain Relief"
      description={
        <>
          <p>
            If your kitchen drain is backing up, your bathroom smells foul or your floor is flooded, you need professional drain cleaning in Houston, not a temporary fix. Our licensed, insured Houston plumbers respond fast, diagnose the real problem and clear the blockage.
          </p>
          <p>
            We are available 24/7 for fast, affordable clogged drain repair, sewer line cleaning and hydro jetting in Houston, Texas. Call Now: <span className="font-bold text-text">(724) 750-6935</span>
          </p>
        </>
      }
      features={[
        "24/7 Emergency Drain Cleaning Houston",
        "Kitchen Drain Cleaning & Grease Removal",
        "Bathroom Drain Cleaning Houston",
        "Sewer Line Cleaning & Repair Houston",
        "Hydro Jetting Houston TX for Scale & Roots",
        "Drain Camera/CCTV Inspections"
      ]}
      whyChooseUs={[
        "Local Houston Experts: Living and working in Harris County",
        "Same-Day Service: Rapid response appointments",
        "Affordable Pricing: Transparent up-front estimates",
        "Advanced Equipment: High-pressure hydro jetting & cameras",
        "100% Satisfaction Guarantee: Re-clean at no extra cost",
      ]}
    >
      <div className="space-y-24">
        {/* Houston Challenges Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Why Houston Needs <span className="text-primary ">Regular Drain Cleaning</span>
          </h2>
          <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8 relative z-10">
            Houston's unique climate and soil make clogs and sewer issues more common than in many other cities. Because of these factors, slow drains, foul odors and backups are more common and often more serious here.
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Building2, title: "Expansive Clay Soil", text: "Thick blackland clay in Houston swells and shrinks with moisture, stressing buried pipes and leading to cracks." },
              { icon: Droplets, title: "Heavy Rainfall & Floods", text: "Frequent storms and intense downpours overwhelm storm drains and French drains if already partially clogged." },
              { icon: Trees, title: "Tree Root Intrusion", text: "Houston's lush trees aggressively seek water, sending roots into tiny cracks in sewer and drain lines." }
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
            <h2 className="text-2xl font-bold uppercase  mb-8 text-text">Signs You Need Immediate Service</h2>
            <div className="space-y-6 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
              <p>If you notice any of these in your Houston home or business, call for professional drain cleaning to prevent slab leaks and costly repairs.</p>
              <ul className="space-y-4">
                 <li><strong className="text-primary">Slow-Moving Water:</strong> In sinks, showers or tubs, likely from grease, food waste, or soap scum.</li>
                 <li><strong className="text-primary">Standing Water:</strong> On the floor or in the tub.</li>
                 <li><strong className="text-primary">Foul Odors:</strong> Bad smells rising from drains or floors.</li>
                 <li><strong className="text-primary">Gurgling Sounds:</strong> In toilets or pipes.</li>
                 <li><strong className="text-primary">Water Backups:</strong> Into showers, tubs or toilets, indicating a severe blockage.</li>
              </ul>
            </div>
            <div className="mt-8">
               <h2 className="text-2xl font-bold uppercase  mb-6 text-text mt-8">Our 5-Step Drain Cleaning Process</h2>
               <ol className="list-decimal pl-4 space-y-3 text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
                  <li><strong className="text-text">Inspection (Camera):</strong> See exactly where the clog or damage is.</li>
                  <li><strong className="text-text">Problem Identification:</strong> Analyze video and explain the root cause.</li>
                  <li><strong className="text-text">Method Selection:</strong> Choose auger, snake, hydro jetting, or repair.</li>
                  <li><strong className="text-text">Drain Cleaning:</strong> Clear the blockage completely.</li>
                  <li><strong className="text-text">Final Testing:</strong> Run water tests and cameras again to confirm full flow.</li>
               </ol>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm  flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-bold uppercase  mb-4 text-text">Serving Houston & Harris County</h2>
             <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                Our local plumbers serve homes, apartments, restaurants, and offices across the Greater Houston area.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Houston", "Spring", "The Woodlands", "Katy", "Sugar Land", "Pearland", "Missouri City", "Cypress", "Clear Lake"].map((area) => (
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
            Houston Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in Houston?", a: "Most jobs range from $150–$350. Sewer line cleaning and hydro jetting services run $300–$800+ for more complex jobs." },
              { q: "How fast can you get here for emergency drain cleaning Houston?", a: "We offer same-day service for most calls and 24/7 emergency response for severe backups, flooding or total clogs." },
              { q: "Can I fix a clogged drain in Houston myself?", a: "Simple clogs from hair can be cleared with a plunger. However, recurring clogs need professional drain cleaning and camera inspection." },
              { q: "What is hydro jetting and why is it better than snaking?", a: "Hydro jetting uses high-pressure water to scrub the inside of pipes, removing grease, mineral scale and roots. More thorough than a snake." },
              { q: "How often should I get drain cleaning in Houston?", a: "For most homes, once a year. Homes with older pipes or tree-root-prone lines benefit from semi-annual service." },
              { q: "Do you service commercial kitchens in Houston?", a: "Yes, we remove thick grease and food buildup in restaurants and food trucks using high-pressure hydro jetting." }
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
          <h2 className="text-3xl font-bold uppercase tracking-tight text-text ">Get Help Now in Houston</h2>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not wait for a small clog to become a flooded bathroom or sewer backup. Speak directly with a Houston plumber and schedule your visit in minutes. Available for same-day emergency drain cleaning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            Licensed Houston Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free Estimates
          </p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "DrainCleaningNearMe – Drain Cleaning Services Houston TX",
              "description": "Emergency drain cleaning and sewer line cleaning in Houston, TX. Licensed, insured plumbers offering hydro jetting, camera inspection, and 24/7 service.",
              "url": "https://www.draincleaningnearme.us/drain-cleaning-houston",
              "priceRange": "$$",
              "telephone": "+1-724-750-6935",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Houston, TX",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77002",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7604,
                "longitude": -95.3698
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
                  "name": "How much does drain cleaning cost in Houston?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most jobs range from $150–$350. Sewer line cleaning and hydro jetting services run $300–$800+ for more complex jobs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can you get here for emergency drain cleaning Houston?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer same-day service for most calls and 24/7 emergency response for severe backups, flooding or total clogs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I fix a clogged drain in Houston myself?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple clogs from hair can be cleared with a plunger. However, recurring clogs need professional drain cleaning and camera inspection."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is hydro jetting and why is it better than snaking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hydro jetting uses high-pressure water to scrub the inside of pipes, removing grease, mineral scale and roots. More thorough than a snake."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I get drain cleaning in Houston?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For most homes, once a year. Homes with older pipes or tree-root-prone lines benefit from semi-annual service."
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
