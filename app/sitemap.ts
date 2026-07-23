import type { MetadataRoute } from "next";
import { seoPages } from "@/data/seoPages";

const baseUrl = "https://calisdoctor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const homePage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...homePage, ...servicePages];
}