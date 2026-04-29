import { Metadata } from "next";
import { FTWClient } from "./ftw-client";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning Fort Worth, TX | Top-Rated Local Experts",
  description: "Expert drain cleaning services in Fort Worth. Facing a clogged drain or sewer backup? Get fast, same-day relief from local pros. Reliable & affordable. Call now!",
  keywords: [
    "drain cleaning services Fort Worth",
    "clogged drain repair Fort Worth",
    "sewer line cleaning Fort Worth",
    "emergency drain cleaning Fort Worth",
    "hydro jetting Fort Worth",
    "rooter services Fort Worth"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-fort-worth",
  }
};

export default function FortWorthPage() {
  const schema1 = {
    "@context": "https://schema.org", "@graph": [
    {
    "@type": "LocalBusiness", "@id": "https://www.draincleaningnearme.us/#organization", "name": "DrainCleaningNearMe", "url": "https://www.draincleaningnearme.us/", "logo": "https://www.draincleaningnearme.us/logo.png", "image": [ "https://www.draincleaningnearme.us/images/hero-fort-worth.jpg", "https://www.draincleaningnearme.us/logo.png"
    ],"description": "Emergency drain cleaning services Fort Worth TX. 24/7 clogged drain repair, hydrojetting, sewerline cleaning by top-rated local plumbing experts.", "telephone": "+1(724) 750-6935", "email": "info@draincleaningnearme.us", "sameAs": [ "https://www.facebook.com/draincleaningnearme", "https://www.instagram.com/draincleaningnearme", "https://www.yelp.com/biz/draincleaningnearme-fort-worth"
    ],"priceRange": "$$", "areaServed": {
    "@type": "GeoCircle", "geoMidpoint": {
    "@type": "GeoCoordinates", "latitude": 32.7555, "longitude": -97.3308
    }, "geoRadius": "50000" }, "geo": {
    "@type": "GeoCoordinates", "latitude": 32.7555, "longitude": -97.3308
    }, "address": {
    "@type": "PostalAddress", "streetAddress": "123 Plumbing Lane", "addressLocality": "Fort Worth", "addressRegion": "TX", "postalCode": "76102", "addressCountry": "US" }, "openingHoursSpecification": [
    {
    "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],"opens": "00:00", "closes": "23:59" }
    ],"serviceType": [ "Emergency Drain Cleaning", "Clogged Drain Repair", "Hydro Jetting", "Sewer Line Cleaning", "Rooter Services"
    ],"hasOfferCatalog": {
    "@type": "OfferCatalog", "name": "Drain Cleaning Services Fort Worth", "itemListElement": [
    {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Emergency Drain Cleaning Fort Worth", "description": "24/7 same-day clogged drain repair Fort Worth TX" }
    }, {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Hydro Jetting Fort Worth", "description": "High-pressure pipe cleaning for grease, roots, scale" }
    }, {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Sewer Line Cleaning Fort Worth", "description": "Professional sewer line root removal and unclogging" }
    }
    ]
    },
    "aggregateRating": {
    "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "247", "bestRating": "5", "worstRating": "1" }, "founder": {
    "@type": "Person", "name": "DrainCleaningNearMe Team" }
    }, {
    "@type": "BreadcrumbList", "itemListElement": [
    {
    "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.draincleaningnearme.us/" }, {
    "@type": "ListItem", "position": 2, "name": "Drain Cleaning Fort Worth", "item": "https://www.draincleaningnearme.us/drain-cleaning-fort-worth" }
    ]
    }
    ]
  };

  const schema2 = {
    "@context": "https://schema.org", "@type": "FAQPage", "@mainEntity": [
    {
    "@type": "Question", "name": "How much does drain cleaning cost in Fort Worth?", "acceptedAnswer": {
    "@type": "Answer", "text": "Average drain cleaning costs in Fort Worth range from $100-275 for standard residential drains. Sewermain line cleaning averages $175-600 depending on severity and pipe length. Emergency services may add$50-100service fee. We provide upfront pricing with free estimates." }
    }, {
    "@type": "Question", "name": "How long does professional drain cleaning take in Fort Worth?", "acceptedAnswer": {
    "@type": "Answer", "text": "Most drain cleaning services complete in 1-2 hours. Simple clogs take 30-45 minutes. Hydrojettingsevere blockages or sewer line inspections may take 2-3 hours total including camera diagnosis and testing."}
    }, {
    "@type": "Question", "name": "Is hydro jetting safe for my pipes?",
    "acceptedAnswer": {
    "@type": "Answer", "text": "Yes, professional hydro jetting is safe for all modern pipe materials including PVC, copper, cast iron, andolder galvanized pipes. Our technicians adjust pressure based on pipe condition to prevent damage while deliveringsuperior cleaning results." }
    }, {
    "@type": "Question", "name": "What causes recurring drain clogs in Fort Worth homes?", "acceptedAnswer": {
    "@type": "Answer", "text": "Common causes include tree root intrusion in clay soil, grease buildup from cooking, hardwater mineralscale, and aging cast iron/clay pipes. Fort Worth's expansive soils exacerbate pipe shifts that invite roots andcausemisalignments." }
    }, {
    "@type": "Question", "name": "Do you offer 24/7 emergency drain services in Fort Worth?", "acceptedAnswer": {
    "@type": "Answer", "text": "Absolutely! DrainCleaningNearMe provides 24/7 emergency drain cleaning Fort Worth withsame-dayresponse. No extra overtime fees. We're equipped for immediate sewer backups, standing water, and urgent unclogging situations." }
    }, {
    "@type": "Question", "name": "What's the difference between drain snaking and hydro jetting?", "acceptedAnswer": {
    "@type": "Answer", "text": "Drain snaking uses a cable to break up and push clogs downstream. Hydro jetting blasts walls with3,000-4,000 PSI water to remove all buildup including grease, roots, and scale for complete pipe cleaningandlongerlasting results." }
    }, {
    "@type": "Question", "name": "How can I prevent drain clogs in my Fort Worth home?", "acceptedAnswer": {
    "@type": "Answer", "text": "Avoid pouring grease down drains, use strainers for hair/food debris, run hot water weekly, scheduleannual inspections, and never use chemical cleaners which damage pipes. Professional maintenance prevents85%ofemergency calls." }
    }
    ]
  };

  return (
    <>
      <Script
        id="fort-worth-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <Script
        id="fort-worth-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <FTWClient />
    </>
  );
}
