import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.draincleaningnearme.us";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const serviceRoutes = [
    "/kitchen-sink-drain-cleaning-unclogging-services",
    "/bathroom-drain-cleaning-unclogging-services",
    "/emergency-drain-cleaning-services",
    "/hydro-jetting-cleaning-services",
    "/sewer-line-cleaning-repair-usa",
    "/drain-camera-inspection",
  ];

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
  ];

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return allRoutes;
}
