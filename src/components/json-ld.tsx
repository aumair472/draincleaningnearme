import Script from "next/script";

export function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Drain Cleaning Near Me",
    "url": "https://www.draincleaningnearme.us/",
    "telephone": "+17247506935",
    "description": "Need drain cleaning near you? Get 24/7 emergency drain cleaning for kitchen sink clogs & bathroom drains through hydro jetting & camera inspection. Licensed pros on-site within 60 minutes.",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "312",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "James T." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Fast response, professional crew — my kitchen drain was cleared within an hour. Highly recommend!",
        "datePublished": "2025-11-10",
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maria S." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Called at midnight with a backed-up sewer line. Tech arrived in 90 minutes and fixed everything. Life saver!",
        "datePublished": "2025-12-02",
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+17247506935",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English",
      "contactOption": "TollFree",
      "hoursAvailable": "Mo-Su 00:00-23:59"
    },
    "hasOfferCatalog": {

      "@type": "OfferCatalog",
      "name": "Drain Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Sink Drain Cleaning",
            "url": "https://www.draincleaningnearme.us/kitchen-sink-drain-cleaning-unclogging-services",
            "description": "Kitchen sink clogs are often caused by grease, food scraps, coffee grounds and soap residue.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Drain Cleaning",
            "url": "https://www.draincleaningnearme.us/bathroom-drain-cleaning-unclogging-services",
            "description": "Professional bathroom drain unclogging for hair, soap scum and mineral buildup.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Drain Cleaning",
            "url": "https://www.draincleaningnearme.us/emergency-drain-cleaning-services",
            "description": "24/7 emergency clogged drain service near me dispatch with fast local response times.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hydro Jetting Services",
            "url": "https://www.draincleaningnearme.us/hydro-jetting-cleaning-services",
            "description": "High-pressure hydro jetting to clear stubborn blockages and clean sewer pipes.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewer Line Cleaning & Main Drain Clog Service",
            "url": "https://www.draincleaningnearme.us/sewer-line-cleaning-repair-usa",
            "description": "Complete sewer line cleaning, main drain clog removal, inspection, and preventive maintenance.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Camera Inspection",
            "url": "https://www.draincleaningnearme.us/drain-camera-inspection",
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
          "text": "Pricing depends on the severity of the clog and the service required. Most standard drain cleanings range from $100–$300. Call for a free fast estimate.",
        },
      },
      {
        "@type": "Question",
        "name": "How fast can service arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, technicians can arrive within 60 minutes. We have a nationwide network of pros ready to be dispatched any time, day or night.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency drain cleaning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency drain cleaning nationwide. Whether it is a weekend, holiday, or 2 AM, we are ready to help.",
        },
      },
      {
        "@type": "Question",
        "name": "What causes clogged drains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common causes are grease buildup, hair, soap residue, food scraps, and foreign objects. Recurring clogs may indicate a deeper sewer line issue.",
        },
      },
      {
        "@type": "Question",
        "name": "What is hydro jetting drain cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hydro jetting uses high-pressure water to blast away grease, roots, and debris from inside your pipes. It is safe, eco-friendly, and highly effective for stubborn blockages.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Drain Cleaning Near Me",
    "url": "https://www.draincleaningnearme.us/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.draincleaningnearme.us/contact?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.draincleaningnearme.us/",
      },
    ],
  };

  return (
    <>
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
