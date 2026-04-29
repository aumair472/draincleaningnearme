import { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

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
    "/drain-cleaning-jacksonville",
    "/drain-cleaning-san-francisco",
    "/drain-cleaning-indianapolis",
    "/drain-cleaning-fort-worth",
    "/drain-cleaning-columbus",
    "/drain-cleaning-charlotte",
    "/drain-cleaning-detroit",
    "/drain-cleaning-el-paso",
    "/drain-cleaning-seattle",
    "/drain-cleaning-denver",
    "/drain-cleaning-memphis",
    "/drain-cleaning-nashville",
    "/drain-cleaning-baltimore",
    "/drain-cleaning-boston",
    "/drain-cleaning-oklahoma-city",
    "/drain-cleaning-las-vegas",
    "/drain-cleaning-portland",
    "/drain-cleaning-washington-dc",
    "/drain-cleaning-louisville",
    "/drain-cleaning-milwaukee",
    "/drain-cleaning-tucson",
    "/drain-cleaning-fresno",
    "/drain-cleaning-sacramento",
    "/drain-cleaning-atlanta",
    "/drain-cleaning-mesa",
    "/drain-cleaning-kansas-city",
    "/drain-cleaning-colorado-springs",
    "/drain-cleaning-omaha",
    "/drain-cleaning-raleigh",
    "/drain-cleaning-miami",
    "/drain-cleaning-virginia-beach",
    "/drain-cleaning-long-beach",
    "/drain-cleaning-oakland",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogListingRoute = {
    url: `${baseUrl}/blogs`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  };

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, blogListingRoute, ...blogRoutes];
}

