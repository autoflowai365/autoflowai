import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://autoflowai365.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://autoflowai365.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://autoflowai365.vercel.app/case-studies",
      lastModified: new Date(),
    },
  ];
}
