<template>
  <section class="products-section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <Icon name="lucide:package" size="16" />
          <span>Our Catalog</span>
        </div>
        <h2 class="section-title">Featured Iron Sheets & Pricing</h2>
        <p class="section-subtitle">
          Choose from our premium selection of tile profiles, corrugated, and
          box profile sheets. Available in direct factory wholesale and retail
          rates.
        </p>
      </div>

      <div class="products-grid">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
          :show-badge="true"
          badge="Popular"
        />
      </div>

      <div class="section-footer">
        <NuxtLink to="/products" class="btn-all-products">
          View Full Specifications & Color Options
          <Icon name="lucide:arrow-right" size="18" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from "../../data/products.js";
// Pick a couple of featured items for the homepage (e.g. Normal Corrugated and Box Profile)
const featuredProducts = products.filter((p) => p.id === 3 || p.id === 4);
</script>

<style scoped>
.products-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.section-tag {
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

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto 3rem;
}

.section-footer {
  text-align: center;
}

.btn-all-products {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-surface);
  color: var(--color-primary-dark);
  font-weight: 600;
  padding: 0.8rem 1.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.btn-all-products:hover {
  background-color: var(--color-primary);
  color: #ffffff;
  border-color: var(--color-primary);
}
</style>
