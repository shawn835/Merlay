import { products } from "../data/products.js";
import { mkdir, writeFile } from "node:fs/promises";
import { slugify } from "../app/utils/slugify.js";
const baseUrl =
  process.env.NUXT_PUBLIC_SITE_URL || "https://merlaylimited.co.ke";
// Static routes
const staticPages = ["/", "/products", "/containers", "/about", "/contact"];

// Dynamic product routes
const productPages = products.map(
  (product) => `/products/${slugify(product.name)}`,
);

// Combine and remove duplicate URLs
const allPages = [...new Set([...staticPages, ...productPages])];

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

// Write sitemap into Nuxt's public directory
await mkdir(new URL("../public/", import.meta.url), {
  recursive: true,
});

await writeFile(
  new URL("../public/sitemap.xml", import.meta.url),
  sitemap,
  "utf8",
);

console.log(`Sitemap generated with ${allPages.length} URLs.`);
