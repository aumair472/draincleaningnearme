import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.draincleaningnearme.us";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes = [
    "/kitchen-sink-drain-cleaning-unclogging-services",
    "/bathroom-drain-cleaning-unclogging-services",
    "/emergency-drain-cleaning-services",
    "/hydro-jetting-cleaning-services",
    "/sewer-line-cleaning-repair-usa",
    "/drain-camera-inspection",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationRoutes = [
    "/drain-cleaning-nyc",
    "/drain-cleaning-los-angeles",
    "/drain-cleaning-albuquerque",
    "/drain-cleaning-san-jose",
    "/drain-cleaning-phoenix",
    "/drain-cleaning-san-diego",
    "/drain-cleaning-san-antonio",
    "/drain-cleaning-houston",
    "/drain-cleaning-philadelphia",
    "/drain-cleaning-austin",
    "/drain-cleaning-dallas",
    "/drain-cleaning-chicago",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}

