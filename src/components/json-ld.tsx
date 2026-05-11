"use client";

import { usePathname } from "next/navigation";

interface LocationData {
  city: string;
  state: string;
  lat: string;
  lng: string;
  zip: string;
  address: string;
}

const defaultLocation: LocationData = {
  city: "Albuquerque",
  state: "NM",
  lat: "35.1107",
  lng: "-106.5700",
  zip: "87110",
  address: "209 Mountain Rd PL NE Ste R",
};

export function JsonLd() {
  const pathname = usePathname();
  
  // Basic heuristic to detect city from pathname for global layout JsonLd
  // In a real production app, we might pass this via a context or specific page props
  let location = defaultLocation;
  
  if (pathname.includes("nyc")) {
    location = { city: "New York City", state: "NY", lat: "40.7128", lng: "-74.0060", zip: "10001", address: "Local NYC Service Center" };
  } else if (pathname.includes("philadelphia")) {
    location = { city: "Philadelphia", state: "PA", lat: "39.9526", lng: "-75.1652", zip: "19107", address: "Local Philly Service Center" };
  }

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Drain Cleaning Near Me ${location.city}`,
    "url": `https://draincleaningnearme.us${pathname}`,
    "telephone": "+17247506935",
    "description": `Need drain cleaning in ${location.city}? Get 24/7 emergency drain cleaning for kitchen sink clogs & bathroom drains. Licensed pros on-site within 60 minutes.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": location.city,
      "addressRegion": location.state,
      "postalCode": location.zip,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.lat,
      "longitude": location.lng,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "areaServed": {
      "@type": "City",
      "name": location.city,
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "312",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does drain cleaning cost in ${location.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pricing in ${location.city} depends on the severity of the clog – call (724) 750-6935 for a fast free estimate.`,
        },
      },
      {
        "@type": "Question",
        "name": "How fast can service arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, local experts can arrive within 30–60 minutes. We provide nationwide dispatch across the USA 24/7.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

