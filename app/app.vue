<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const siteUrl = config.public.siteUrl || "https://merlaylimited.co.ke";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Merlay Limited",
  url: siteUrl,
  logo: `${siteUrl}/images/favicon.png`,
};

useHead({
  link: [
    {
      rel: "canonical",
      href: computed(() => `${siteUrl}${route.path}`),
    },
  ],

  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema),
    },
  ],
});
</script>
