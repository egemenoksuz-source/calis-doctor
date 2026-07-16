import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://calisdoctor.com/sitemap.xml",
    host: "https://calisdoctor.com",
  };
}