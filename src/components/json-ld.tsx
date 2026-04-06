import Script from "next/script";

export function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Drain Cleaning Near Me",
    "url": "https://www.draincleaningnearme.us/",
    "telephone": "+17247506935",
    "description": "Need drain cleaning near you? Get 24/7 emergency drain cleaning for kitchen sink clogs & bathroom drains through hydro jetting & camera inspection.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "209 Mountain Rd PL NE Ste R",
      "addressLocality": "Albuquerque",
      "addressRegion": "NM",
      "postalCode": "87110",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.1107",
      "longitude": "-106.5700",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States",
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Drain Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Sink Drain Cleaning",
            "description": "Kitchen sink clogs are often caused by grease, food scraps, coffee grounds and soap residue.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Drain Cleaning",
            "description": "24/7 emergency clogged drain service near me dispatch with fast local response times.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hydro Jetting Services",
            "description": "High-pressure hydro jetting to clear stubborn blockages and clean sewer pipes.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewer Line Cleaning & Main Drain Clog Service",
            "description": "Complete sewer line cleaning, main drain clog removal, inspection, and preventive maintenance.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Camera Inspection",
            "url": "https://www.draincleaningnearme.us/drain-camera-inspection/",
            "description": "Professional drain inspection services & sewer inspection near you. Accurate video camera drain inspection for homes & commercial sites.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does drain cleaning cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing depends on the severity of the clog and the service required. Call for a fast estimate.",
        },
      },
      {
        "@type": "Question",
        "name": "How fast can service arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, technicians can arrive within 60 minutes.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency drain cleaning nationwide.",
        },
      },
      {
        "@type": "Question",
        "name": "What causes clogged drains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common causes are grease, hair, soap residue, and foreign objects.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
