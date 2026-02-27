import { MetadataRoute } from "next";
import { articles } from "@/lib/insights";
import { subjects } from "@/lib/subjects";

const BASE_URL = "https://clearsteps.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/insights/${a.slug}`,
    lastModified: new Date(a.publishDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const subjectUrls: MetadataRoute.Sitemap = subjects.map((s) => ({
    url: `${BASE_URL}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...subjectUrls,
    ...articleUrls,
  ];
}
