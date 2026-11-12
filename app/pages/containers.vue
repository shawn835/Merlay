<template>
  <div class="containers-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container header-container">
        <div class="header-tag">
          <LucideIcon name="Box" size="16" />
          <span>Merlay Limited Prefab Solutions</span>
        </div>
        <h1 class="page-title">Detachable Container Houses</h1>
        <p class="page-subtitle">
          High-quality, durable detachable container structures engineered for
          quick assembly, superior drainage, and cost-effective bulk shipping.
        </p>
      </div>
    </section>

    <!-- Shipping & Bulk Logistics Info Bar -->
    <section class="logistics-bar-section">
      <div class="container">
        <div class="logistics-grid">
          <div class="logistics-card">
            <div class="log-icon">
              <LucideIcon name="Ship" size="24" />
            </div>
            <div>
              <h3>Bulk Shipping Efficiency</h3>
              <p>
                Shipped flat-packed in bulk to optimize transportation space and
                drastically reduce overseas freight costs.
              </p>
            </div>
          </div>

          <div class="logistics-card">
            <div class="log-icon">
              <LucideIcon name="Wrench" size="24" />
            </div>
            <div>
              <h3>Fast Assembly</h3>
              <p>
                Easily assembled on site. A standard unit takes a 3-worker team
                just 2 to 3 hours to build completely.
              </p>
            </div>
          </div>

          <div class="logistics-card">
            <div class="log-icon">
              <LucideIcon name="FileCheck" size="24" />
            </div>
            <div>
              <h3>Export & Compliance</h3>
              <p>
                CE & ISO certified. COC and Certificate of Origin documentation
                arranged for smooth shipping to Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Container Catalog Section -->
    <section class="catalog-section">
      <div class="container">
        <div class="section-header">
          <h2>Available Container Models</h2>
          <p class="section-subtitle">
            Compare our New Design and Standard detachable container options
            below.
          </p>
        </div>

        <div class="containers-grid">
          <div
            v-for="container in containerHouses"
            :key="container.id"
            class="container-card"
          >
            <!-- Image Gallery Carousel Wrapper -->
            <div class="card-image-wrapper">
              <img
                :src="
                  container.images[containerImageIndexes[container.id] || 0]
                "
                :alt="container.name"
                class="container-image"
              />

              <!-- Badge -->
              <div class="card-badge" v-if="container.badge">
                {{ container.badge }}
              </div>

              <!-- Finish Tag -->
              <div class="finish-badge">{{ container.finish }}</div>

              <!-- Gallery Navigation (if multiple images) -->
              <div
                class="image-controls"
                v-if="container.images && container.images.length > 1"
              >
                <button
                  @click.stop="prevImage(container.id)"
                  class="control-btn"
                  aria-label="Previous image"
                >
                  <LucideIcon name="ChevronLeft" size="16" />
                </button>
                <span class="image-counter"
                  >{{ (containerImageIndexes[container.id] || 0) + 1 }} /
                  {{ container.images.length }}</span
                >
                <button
                  @click.stop="nextImage(container.id)"
                  class="control-btn"
                  aria-label="Next image"
                >
                  <LucideIcon name="ChevronRight" size="16" />
                </button>
              </div>
            </div>

            <div class="card-content">
              <div class="card-header">
                <span class="product-category">{{ container.category }}</span>
                <h3 class="product-title">{{ container.name }}</h3>
                <p class="product-description">{{ container.description }}</p>
              </div>

              <!-- Specifications & Capacity -->
              <div class="specs-box">
                <h4>Shipping Capacity (Standard 50mm wall panel):</h4>
                <div class="specs-row">
                  <span>40HQ Container:</span>
                  <strong>Up to {{ container.capacity["40hq"] }} sets</strong>
                </div>
                <div class="specs-row">
                  <span>20GP Container:</span>
                  <strong>Up to {{ container.capacity["20gp"] }} sets</strong>
                </div>
              </div>

              <!-- Included Features -->
              <div class="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li v-for="(feature, idx) in container.features" :key="idx">
                    <LucideIcon
                      name="CheckCircle"
                      size="14"
                      class="check-icon"
                    />
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Pricing Footer -->
              <div class="card-pricing-footer">
                <!-- <div class="price-display">
                  <div class="price-info-group">
                    <span class="price-label">Estimated Base Price</span>
                    <span class="price-note"
                      >Excl. freight & port clearing</span
                    >
                  </div>
                  <span class="price-amount"
                    >Ksh {{ container.pricing.ksh.toLocaleString() }}
                    <small>/ set</small></span
                  >
                </div> -->
                <NuxtLink to="/contact" class="btn-order"
                  >Inquire / Order Set</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="order-cta-section">
      <div class="container order-cta-container">
        <div class="order-cta-text">
          <h2>Need Custom Container Specifications?</h2>
          <p>
            Contact our sales team to discuss bulk project orders, wiring
            add-ons, and landed delivery logistics in Kenya.
          </p>
        </div>
        <div class="order-cta-buttons">
          <NuxtLink to="/contact" class="btn-primary">
            Contact Sales Team
            <LucideIcon name="ArrowRight" size="18" />
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
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { containerHouses } from "../../data/containers.js";

const config = useRuntimeConfig();
const whatsappUrl = `https://wa.me/${config.public.companyPhoneRaw}?text=${encodeURIComponent("Hello Merlay Limited, I would like to inquire about your detachable container houses.")}`;

// Reactive image index tracker for each container card
const containerImageIndexes = reactive({});

const nextImage = (id) => {
  const container = containerHouses.find((c) => c.id === id);
  if (container && container.images) {
    const currentIndex = containerImageIndexes[id] || 0;
    containerImageIndexes[id] = (currentIndex + 1) % container.images.length;
  }
};

const prevImage = (id) => {
  const container = containerHouses.find((c) => c.id === id);
  if (container && container.images) {
    const currentIndex = containerImageIndexes[id] || 0;
    containerImageIndexes[id] =
      (currentIndex - 1 + container.images.length) % container.images.length;
  }
};

useSeoMeta({
  title: "Detachable Prefab Container Houses for Sale | Merlay Limited",
  description:
    "Discover our New Design and Standard detachable container houses. Featuring galvanized steel framing, superior internal drainage, and bulk shipping options.",
  ogTitle: "Detachable Prefab Container Houses | Merlay Limited",
  ogDescription:
    "Durable, quick-assembly detachable container houses with internal column drainage and custom configurations.",
  ogType: "website",
});
</script>

<style scoped>
.page-header {
  padding: 5rem 0 3rem;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-bg) 100%
  );
  border-bottom: 1px solid var(--color-border);
  text-align: center;
}

.header-container {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.header-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
}

.page-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.logistics-bar-section {
  padding: 4rem 0;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.logistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.logistics-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.log-icon {
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  padding: 12px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.logistics-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.35rem;
}

.logistics-card p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.catalog-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-primary-dark);
}

.containers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.container-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.container-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 260px;
  background-color: #e2e8f0;
  overflow: hidden;
}

.container-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.container-card:hover .container-image {
  transform: scale(1.03);
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-accent);
  color: var(--color-primary-dark);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;
  box-shadow: var(--shadow-sm);
}

.finish-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  z-index: 2;
}

.image-controls {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  z-index: 2;
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
  font-size: 0.75rem;
  color: #ffffff;
  font-weight: 600;
  min-width: 24px;
  text-align: center;
}

.card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.product-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.product-description {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin-top: 0.25rem;
}

.specs-box {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.specs-box h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.15rem;
}

.specs-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

.specs-row span {
  color: var(--color-text-muted);
}

.specs-row strong {
  color: var(--color-primary);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features-list h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.features-list ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.check-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}

.card-pricing-footer {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-info-group {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary-dark);
}

.price-note {
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.price-amount {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-primary);
  text-align: right;
}

.price-amount small {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-muted);
}

.btn-order {
  display: block;
  width: 100%;
  text-align: center;
  background-color: var(--color-primary-dark);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.btn-order:hover {
  background-color: var(--color-primary);
}

.order-cta-section {
  padding: 6rem 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.order-cta-container {
  background-color: var(--color-primary-dark);
  border-radius: var(--radius-md);
  padding: 4rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  box-shadow: var(--shadow-md);
}

.order-cta-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 600px;
}

.order-cta-text h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.order-cta-text p {
  font-size: 1.05rem;
  color: #94a3b8;
}

.order-cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-accent);
  color: var(--color-primary-dark);
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.btn-primary:hover {
  background-color: #fbbf24;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-fast);
}

.btn-whatsapp:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 968px) {
  .containers-grid {
    grid-template-columns: 1fr;
  }

  .order-cta-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 2rem;
  }

  .order-cta-buttons {
    width: 100%;
    flex-direction: column;
  }
}
</style>
