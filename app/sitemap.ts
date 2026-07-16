import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calisdoctor.com";
  const lastModified = new Date();

  const pages = [
    "",
    "/doctor-calis-beach",
    "/hotel-doctor-calis",
    "/english-speaking-doctor-calis",
    "/home-visit-doctor-calis",
    "/emergency-doctor-calis",
    "/food-poisoning-doctor-calis",
    "/ear-infection-doctor-calis",
    "/private-doctor-fethiye",
    "/iv-therapy-calis",
    "/blood-test-calis",
    "/family-doctor-fethiye",
    "/routine-checkup-fethiye",
  ];

  return pages.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.9,
  }));
}