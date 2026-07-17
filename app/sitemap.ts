import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calisdoctor.com";

  const pages = [
    "",
    "/doctor-calis-beach",
    "/english-speaking-doctor-calis",
    "/hotel-doctor-calis",
    "/home-visit-doctor-calis",
    "/emergency-doctor-calis",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.9,
  }));
}