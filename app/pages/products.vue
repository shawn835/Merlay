<template>
  <div class="products-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container header-container">
        <div class="header-tag">
          <Icon name="lucide:package" size="16" />
          <span>Merlay Limited Catalog</span>
        </div>
        <h1 class="page-title">Iron Sheets & Factory Pricing</h1>
        <p class="page-subtitle">
          Explore our complete catalog of tile profiles, corrugated, and box
          profile roofing sheets. Available in precise Gauge 30 and heavy-duty
          Gauge 28 at unbeatable wholesale and retail rates.
        </p>
      </div>
    </section>

    <!-- Products Grid Section -->
    <section class="catalog-section">
      <div class="container">
        <div class="products-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :show-badge="false"
          />
        </div>
      </div>
    </section>

    <!-- Color Options & Custom Cutting Info -->
    <section class="info-section">
      <div class="container">
        <div class="info-card">
          <div class="info-content">
            <div class="info-icon">
              <LucideIcon name="Palette" size="28" />
            </div>
            <div>
              <h3>Choose Your Preferred Colors</h3>
              <p>
                Our iron sheets come in a wide range of vibrant, fade-resistant
                factory colors (such as Charcoal Grey, Tile Red, Chocolate
                Brown, Sky Blue, and Forest Green). Select your color scheme
                during order placement.
              </p>
            </div>
          </div>

          <div class="info-divider"></div>

          <div class="info-content">
            <div class="info-icon">
              <LucideIcon name="Ruler" size="28" />
            </div>
            <div>
              <h3>Custom Lengths Available</h3>
              <p>
                Need specific measurements for your roof structure? We cut to
                your exact length requirements per meter to minimize waste and
                installation time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="order-cta-section">
      <div class="container order-cta-container">
        <div class="order-cta-text">
          <h2>Ready to Place an Order?</h2>
          <p>
            Contact our sales team today to confirm your quantities, colors, and
            delivery arrangements.
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
import { products } from "../../data/products.js";
const config = useRuntimeConfig();
const whatsappUrl = `https://wa.me/${config.public.companyPhone}?text=${encodeURIComponent(config.public.whatsappDefaultMsg)}`;
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

.catalog-section {
  padding: 5rem 0;
  background-color: var(--color-bg);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.info-section {
  padding: 4rem 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.info-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  align-items: center;
}

.info-content {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.info-icon {
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  padding: 12px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-content h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.35rem;
}

.info-content p {
  font-size: 0.925rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.info-divider {
  width: 1px;
  height: 100px;
  background-color: var(--color-border);
}

.order-cta-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
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
  .info-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  .info-divider {
    width: 100%;
    height: 1px;
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
