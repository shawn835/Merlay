// Helper to convert product names into URL-friendly slugs (e.g., "Normal Corrugated" -> "normal-corrugated")
export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};
