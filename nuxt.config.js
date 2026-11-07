// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: true,

  runtimeConfig: {
    public: {
      companyPhone: "+254727981420",
      whatsappDefaultMsg:
        "Hello Merlay Limited, I would like to inquire about your iron sheets pricing and availability.",
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://merlaylimited.co.ke",
    },
  },

  app: {
    head: {
      title: "Merlay Limited | Quality Iron Sheets & Factory Prices",
      link: [{ rel: "icon", type: "image/png", href: "/images/favicon.png" }],
    },
  },
});
