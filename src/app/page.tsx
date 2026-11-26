
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/member",
        "/login",
        "/bank-transfer",
        "/coins",
      ],
    },
    sitemap: "https://rintei-keirin-qgwc.vercel.app/sitemap.xml",
  };
}
