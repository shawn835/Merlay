<template>
  <div class="product-card">
    <!-- Image Gallery Carousel Wrapper -->
    <div class="card-image-wrapper">
      <NuxtLink :to="`/products/${slugify(product.name)}`">
        <img :src="currentImage" :alt="product.name" class="product-image" />
      </NuxtLink>

      <!-- Badge (Conditional) -->
      <div class="card-badge" v-if="showBadge && badge">{{ badge }}</div>

      <!-- Finish Tag -->
      <div class="finish-badge">{{ product.finish }} Finish</div>

      <!-- Gallery Navigation (if multiple images) -->
      <div
        class="image-controls"
        v-if="product.images && product.images.length > 1"
      >
        <button
          @click.stop="prevImage"
          class="control-btn"
          aria-label="Previous image"
        >
          <LucideIcon name="ChevronLeft" size="16" />
        </button>
        <span class="image-counter"
          >{{ currentImageIndex + 1 }} / {{ product.images.length }}</span
        >
        <button
          @click.stop="nextImage"
          class="control-btn"
          aria-label="Next image"
        >
          <LucideIcon name="ChevronRight" size="16" />
        </button>
      </div>
    </div>

    <div class="card-content">
      <div class="card-header">
        <span class="product-category">{{ product.category }}</span>
        <NuxtLink
          :to="`/products/${slugify(product.name)}`"
          class="product-title-link"
        >
          <h3 class="product-title">{{ product.name }}</h3>
        </NuxtLink>
      </div>

      <div class="pricing-table">
        <!-- Retail Price Row Only -->
        <div class="price-row retail-price">
          <div class="price-label">
            <span class="tag">Price</span>
            <span class="meter">Per {{ product.pricing.unit }}</span>
          </div>
          <div class="price-values">
            <div class="gauge-item">
              <span class="gauge">30G</span>
              <span class="amount">{{
                formatRetail(product.pricing.retail["30g"])
              }}</span>
            </div>
            <div class="divider"></div>
            <div class="gauge-item">
              <span class="gauge">Gauge 28</span>
              <span class="amount">{{
                formatRetail(product.pricing.retail["28g"])
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <NuxtLink to="/contact" class="btn-order">Inquire / Order Now</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { slugify } from "../utils/slugify.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  showBadge: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: String,
    default: "Popular",
  },
});

const currentImageIndex = ref(0);

const currentImage = computed(() => {
  if (props.product.images && props.product.images.length > 0) {
    return props.product.images[currentImageIndex.value];
  }
  return "/images/placeholder.jpg";
});

const nextImage = () => {
  if (props.product.images) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % props.product.images.length;
  }
};

const prevImage = () => {
  if (props.product.images) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + props.product.images.length) %
      props.product.images.length;
  }
};

const formatRetail = (retailObj) => {
  if (retailObj.min === retailObj.max) {
    return `Ksh ${retailObj.min}`;
  }
  return `Ksh ${retailObj.min} - ${retailObj.max}`;
};
</script>

<style scoped>
.product-card {
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

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #e2e8f0;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image {
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
  background-color: rgba(15, 23, 42, 0.75);
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
  background-color: rgba(15, 23, 42, 0.75);
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
  gap: 1.25rem;
  flex: 1;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
  letter-spacing: -0.01em;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.pricing-table {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.price-row {
  background-color: var(--color-bg);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border: 1px solid var(--color-border);
}

.price-row.retail-price {
  border-left: 4px solid var(--color-accent);
}

.price-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-label .tag {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--color-primary-dark);
}

.price-label .meter {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.price-values {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.4rem;
  border-top: 1px dashed var(--color-border);
}

.gauge-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
}

.gauge-item:last-child {
  text-align: right;
}

.gauge {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 600;
  text-transform: uppercase;
}

.amount {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-primary);
}

.divider {
  width: 1px;
  height: 24px;
  background-color: var(--color-border);
  margin: 0 0.75rem;
}

.card-footer {
  margin-top: auto;
  padding-top: 0.5rem;
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
</style>
