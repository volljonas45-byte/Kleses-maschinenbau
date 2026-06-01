import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/leistungen",
    "/maschinenpark",
    "/branchen",
    "/ueber-uns",
    "/galerie",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
