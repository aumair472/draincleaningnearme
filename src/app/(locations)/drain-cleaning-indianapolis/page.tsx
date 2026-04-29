import { Metadata } from "next";
import { IndyClient } from "./indy-client";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Professional & Emergency Drain Cleaning Rooter services Indianapolis",
  description: "Expert drain cleaning services in Indianapolis. From clogged drain repair to emergency sewer line cleaning, our local professionals offer 24/7 same-day help. Book today!",
  keywords: [
    "drain cleaning services Indianapolis",
    "clogged drain repair Indianapolis",
    "sewer line cleaning Indianapolis",
    "emergency drain cleaning Indianapolis",
    "hydro jetting Indianapolis",
    "rooter services Indianapolis"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-indianapolis",
  }
};

export default function IndianapolisPage() {
  const schema = {
    "@context": "https://schema.org", "@graph": [
    {
    "@type": "LocalBusiness", "@id": "https://www.draincleaningnearme.us/#organization", "name": "DrainCleaningNearMe", "url": "https://www.draincleaningnearme.us/", "logo": "https://www.draincleaningnearme.us/logo.png", "image": "https://www.draincleaningnearme.us/images/drain-cleaning-team.jpg", "description": "Professional & Emergency Drain Cleaning Rooter Services in Indianapolis, IN. 24/7emergencydrain cleaning, hydro jetting, sewer line cleaning, and rooter services.", "telephone": "+1-317-555-3724", "email": "info@draincleaningnearme.us", "priceRange": "$$", "areaServed": {
    "@type": "City", "name": "Indianapolis" }, "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indianapolis", "addressRegion": "IN", "addressCountry": "US", "postalCode": "46201" }, "geo": {
    "@type": "GeoCoordinates", "latitude": 39.7684, "longitude": -86.1581
    }, "openingHours": "Mo-Su 00:00-23:59", "sameAs": [ "https://www.facebook.com/DrainCleaningNearMeIndy", "https://www.instagram.com/draincleaningnearmeindy"
    ],"founder": {
    "@type": "Person", "name": "DrainCleaningNearMe Team" }, "hasOfferCatalog": {
    "@type": "OfferCatalog", "name": "Drain Cleaning Services Indianapolis", "itemListElement": [
    {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Emergency Drain Cleaning Indianapolis", "description": "24/7 emergency drain unclogging services for residential and commercial properties.", "serviceType": "Emergency Plumbing", "areaServed": "Indianapolis, IN" }
    }, {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Hydro Jetting Services Indianapolis", "description": "High-pressure hydro jetting for sewer line cleaning and root removal.", "serviceType": "Hydro Jetting", "areaServed": "Indianapolis, IN" }
    }, {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Sewer Line Cleaning Indianapolis", "description": "Professional sewer line cleaning, camera inspection, and rooter services.", "serviceType": "Sewer Cleaning", "areaServed": "Indianapolis, IN" }
    }, {
    "@type": "Offer", "itemOffered": {
    "@type": "Service", "name": "Commercial Drain Cleaning Indianapolis", "description": "Commercial drain cleaning for restaurants, offices, and retail spaces.", "serviceType": "Commercial Plumbing",
    "areaServed": "Indianapolis, IN" }
    }
    ]
    }, "aggregateRating": {
    "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1", "ratingCount": "1278" }, "makesOffer": {
    "@type": "Offer", "name": "Professional Drain Cleaning Services", "description": "Licensed drain cleaning experts serving Indianapolis with transparent pricing and 24/7availability." }
    }, {
    "@type": "Service", "@id": "https://www.draincleaningnearme.us/#drain-cleaning-service", "name": "Professional Drain Cleaning Services Indianapolis", "description": "Expert drain cleaning, hydro jetting, sewer line cleaning, and 24/7 emergency services for Indianapolis homes and businesses.", "serviceType": "Drain Cleaning", "provider": {
    "@id": "https://www.draincleaningnearme.us/#organization" }, "areaServed": {
    "@type": "City", "name": "Indianapolis, Indiana" }, "offers": {
    "@type": "Offer", "priceCurrency": "USD", "price": "190", "priceSpecification": {
    "@type": "PriceSpecification", "eligibleRegion": "Indianapolis, IN", "minPrice": "100", "maxPrice": "1500", "priceCurrency": "USD" }
    }, "category": "Plumbing", "hasOfferCatalog": {
    "@type": "OfferCatalog", "itemListElement": [
    {
    "@type": "Offer", "position": 1, "item": {
    "@type": "Service", "name": "Residential Drain Cleaning" }
    }, {
    "@type": "Offer", "position": 2,
    "item": {
    "@type": "Service", "name": "Commercial Drain Cleaning" }
    }
    ]
    }
    }, {
    "@type": "FAQPage", "@id": "https://www.draincleaningnearme.us/#faq", "mainEntity": [
    {
    "@type": "Question", "name": "How much does drain cleaning cost in Indianapolis?", "acceptedAnswer": {
    "@type": "Answer", "text": "Drain cleaning costs in Indianapolis typically range from $100 to $800, with an average of $190-$275for basic unclogging services. Hydro jetting and sewer line cleaning range from $300-$800 depending onseverityandpipe size. Emergency services may include a 20-50% surcharge." }
    }, {
    "@type": "Question", "name": "How fast can DrainCleaningNearMe respond in Indianapolis?", "acceptedAnswer": {
    "@type": "Answer", "text": "We respond to emergency drain calls in under 60 minutes across Indianapolis. Same-dayserviceisavailable for scheduled appointments, with 24/7 availability year-round." }
    }, {
    "@type": "Question", "name": "Is hydro jetting safe for pipes in Indianapolis homes?", "acceptedAnswer": {
    "@type": "Answer", "text": "Yes, hydro jetting uses high-pressure water (3,000-4,000 PSI) to safely clean pipes without chemicalsor abrasive tools. It's gentler on aging Indianapolis sewer lines than mechanical snaking and removes roots, grease, and scale more effectively." }
    }, {
    "@type": "Question", "name": "Do you offer same-day drain unclogging service in Indianapolis?", "acceptedAnswer": {
    "@type": "Answer", "text": "Absolutely. We provide same-day drain unclogging for Indianapolis residents and businesses. Our24/7 emergency team ensures rapid response for urgent drain issues." }
    }, {
    "@type": "Question", "name": "What causes recurring drain clogs in Indianapolis homes?", "acceptedAnswer": {
    "@type": "Answer", "text": "Common causes include grease buildup, tree root intrusion through pipe joints, hair/soapbuildup, andaging clay pipes common in pre-1980 Indianapolis homes. Seasonal freeze-thaw cycles exacerbate cracks that allowroot growth." }
    },
    {
    "@type": "Question", "name": "Do you provide commercial sewer cleaning in Indianapolis?", "acceptedAnswer": {
    "@type": "Answer", "text": "Yes, we specialize in commercial drain and sewer cleaning for restaurants, offices, retail spaces, andapartment complexes throughout Indianapolis. We handle high-volume grease traps and floor drains." }
    }, {
    "@type": "Question", "name": "Can you handle sewer line repair services in Indianapolis?", "acceptedAnswer": {
    "@type": "Answer", "text": "Yes, our team provides complete sewer line repair including root removal, pipe relining, andcamerainspections. We identify issues early to prevent costly full replacements." }
    }
    ]
    }
    ]
  };

  return (
    <>
      <Script
        id="indianapolis-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IndyClient />
    </>
  );
}
