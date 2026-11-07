<template>
  <div class="product-detail-page" v-if="product">
    <!-- Breadcrumb / Back Link -->
    <div class="container breadcrumb-container">
      <NuxtLink to="/products" class="back-link">
        <LucideIcon name="ArrowLeft" size="16" />
        Back to All Products
      </NuxtLink>
    </div>

    <!-- Main Product Section -->
    <section class="product-main-section">
      <div class="container product-grid">
        <!-- Image Gallery / Carousel Column -->
        <div class="product-gallery">
          <div class="main-image-wrapper">
            <img
              :src="currentImage"
              :alt="product.name"
              class="active-product-image"
            />
            <div class="finish-tag">{{ product.finish }} Finish</div>

            <!-- Gallery Navigation Controls -->
            <div
              class="image-controls"
              v-if="product.images && product.images.length > 1"
            >
              <button
                @click="prevImage"
                class="control-btn"
                aria-label="Previous image"
              >
                <LucideIcon name="ChevronLeft" size="18" />
              </button>
              <span class="image-counter"
                >{{ currentImageIndex + 1 }} / {{ product.images.length }}</span
              >
              <button
                @click="nextImage"
                class="control-btn"
                aria-label="Next image"
              >
                <LucideIcon name="ChevronRight" size="18" />
              </button>
            </div>
          </div>

          <!-- Thumbnail Row -->
          <div
            class="thumbnail-row"
            v-if="product.images && product.images.length > 1"
          >
            <button
              v-for="(img, idx) in product.images"
              :key="idx"
              class="thumb-btn"
              :class="{ active: currentImageIndex === idx }"
              @click="currentImageIndex = idx"
            >
              <img :src="img" :alt="`${product.name} thumbnail ${idx + 1}`" />
            </button>
          </div>
        </div>

        <!-- Product Info & Pricing Column -->
        <div class="product-details">
          <div class="detail-header">
            <span class="product-category">{{ product.category }}</span>
            <h1 class="product-title">{{ product.name }}</h1>
            <p class="product-subtitle">
              Manufactured to strict quality standards. Available in custom
              lengths per meter to match your exact roofing specifications.
            </p>
          </div>

          <!-- Pricing Card -->
          <div class="pricing-card">
            <h3>Pricing</h3>
            <div class="price-row">
              <div class="gauge-info">
                <span class="gauge-badge">Gauge 30</span>
                <span class="unit-text">Per {{ product.pricing.unit }}</span>
              </div>
              <span class="price-val">{{
                formatRetail(product.pricing.retail["30g"])
              }}</span>
            </div>
            <div class="price-row">
              <div class="gauge-info">
                <span class="gauge-badge">Gauge 28</span>
                <span class="unit-text">Per {{ product.pricing.unit }}</span>
              </div>
              <span class="price-val">{{
                formatRetail(product.pricing.retail["28g"])
              }}</span>
            </div>
          </div>

          <!-- Value Features -->
          <div class="features-grid">
            <div class="feature-item">
              <LucideIcon name="Palette" size="20" class="feat-icon" />
              <div>
                <h4>Multiple Colors</h4>
                <p>
                  Available in Charcoal Grey, Tile Red, Chocolate Brown & more.
                </p>
              </div>
            </div>
            <div class="feature-item">
              <LucideIcon name="Ruler" size="20" class="feat-icon" />
              <div>
                <h4>Custom Lengths</h4>
                <p>
                  Cut precisely to your measurements to minimize site waste.
                </p>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="action-buttons">
            <NuxtLink to="/contact" class="btn-order">
              <LucideIcon name="Send" size="18" />
              Inquire / Request Quote
            </NuxtLink>
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp"
            >
              <LucideIcon name="MessageSquare" size="18" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Fallback if Product Not Found -->
  <div class="not-found-container" v-else>
    <div class="container text-center">
      <h2>Product Not Found</h2>
      <p>
        The roofing profile you are looking for does not exist or has been
        removed.
      </p>
      <NuxtLink to="/products" class="btn-primary">Return to Catalog</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { products } from "../../../data/products.js";
import { slugify } from "../../utils/slugify.js";

const route = useRoute();
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl || "https://merlaylimited.co.ke";

// Find the matching product based on the route slug parameter
const product = computed(() => {
  return products.find((p) => slugify(p.name) === route.params.slug);
});

// Dynamic SEO Meta tags based on the active product
useSeoMeta({
  title: computed(() =>
    product.value
      ? `${product.value.name} Iron Sheets | Merlay Limited`
      : "Product Not Found | Merlay Limited",
  ),
  description: computed(() =>
    product.value
      ? `Explore ${product.value.name} roofing sheets at Merlay Limited Kenya. Available in Gauge 30 and 28 with glossy and matte finishes. Contact us for pricing.`
      : "Explore quality roofing iron sheets at Merlay Limited Kenya.",
  ),
  ogTitle: computed(() =>
    product.value
      ? `${product.value.name} | Merlay Limited Kenya`
      : "Merlay Limited",
  ),
  ogDescription: computed(() =>
    product.value
      ? `Explore ${product.value.name} roofing sheets at Merlay Limited Kenya. Contact us for retail pricing.`
      : "",
  ),
});

useHead(() => {
  if (!product.value) {
    return { script: [] };
  }

  const p = product.value;

  // Collect retail prices across the available gauges
  const retailPrices = Object.values(p.pricing.retail)
    .flatMap((price) => [price.min, price.max])
    .filter((price) => Number.isFinite(price));

  const lowPrice = Math.min(...retailPrices);
  const highPrice = Math.max(...retailPrices);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: `${p.name} Iron Sheets`,

    description: `Explore ${p.name} roofing sheets in ${p.category}, with ${p.finish.toLowerCase()} finish at Merlay Limited Kenya.`,

    image: p.images.map((image) => `${siteUrl}${image}`),

    brand: {
      "@type": "Brand",
      name: "Merlay Limited",
    },

    category: p.category,

    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KES",
      lowPrice,
      highPrice,
      offerCount: Object.keys(p.pricing.retail).length,
    },

    url: `${siteUrl}/products/${slugify(p.name)}`,
  };

  return {
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(productSchema),
      },
    ],
  };
});

// Image Gallery State
const currentImageIndex = ref(0);

const currentImage = computed(() => {
  if (
    product.value &&
    product.value.images &&
    product.value.images.length > 0
  ) {
    return product.value.images[currentImageIndex.value];
  }
  return "/images/placeholder.jpg";
});

const nextImage = () => {
  if (product.value && product.value.images) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % product.value.images.length;
  }
};

const prevImage = () => {
  if (product.value && product.value.images) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + product.value.images.length) %
      product.value.images.length;
  }
};

const formatRetail = (retailObj) => {
  if (retailObj.min === retailObj.max) {
    return `Ksh ${retailObj.min}`;
  }
  return `Ksh ${retailObj.min} - ${retailObj.max}`;
};

const whatsappUrl = computed(() => {
  const name = product.value ? product.value.name : "Iron Sheets";
  return `https://wa.me/${config.public.companyPhoneRaw}?text=${encodeURIComponent(`Hello Merlay Limited, I would like to inquire about pricing and availability for ${name}.`)}`;
});
</script>

<style scoped>
.breadcrumb-container {
  padding: 2rem 0 1rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: opacity var(--transition-fast);
}

.back-link:hover {
  opacity: 0.8;
}

.product-main-section {
  padding: 2rem 0 6rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.product-gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image-wrapper {
  position: relative;
  width: 100%;
  height: 420px;
  background-color: #e2e8f0;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.active-product-image {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}

.finish-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
}

.image-controls {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
}

.control-btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50%;
  transition: background var(--transition-fast);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.image-counter {
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 600;
  min-width: 28px;
  text-align: center;
}

.thumbnail-row {
  display: flex;
  gap: 0.75rem;
}

.thumb-btn {
  width: 80px;
  height: 65px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--color-border);
  overflow: hidden;
  background: none;
  cursor: pointer;
  padding: 0;
  transition: border-color var(--transition-fast);
}

.thumb-btn.active {
  border-color: var(--color-primary);
}

.thumb-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-category {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.02em;
}

.product-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.pricing-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: var(--shadow-sm);
}

.pricing-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.75rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gauge-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.gauge-badge {
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
}

.unit-text {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.price-val {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature-item {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: var(--radius-sm);
}

.feat-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-item h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.15rem;
}

.feature-item p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.btn-order {
  flex: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary-dark);
  color: #ffffff;
  font-weight: 600;
  padding: 0.9rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.btn-order:hover {
  background-color: var(--color-primary);
}

.btn-whatsapp {
  flex: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #25d366;
  color: #ffffff;
  font-weight: 600;
  padding: 0.9rem;
  border-radius: var(--radius-sm);
  transition: opacity var(--transition-fast);
}

.btn-whatsapp:hover {
  opacity: 0.9;
}

.not-found-container {
  padding: 8rem 0;
}

.not-found-container h2 {
  font-size: 2rem;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
}

.not-found-container p {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}

@media (max-width: 968px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>
