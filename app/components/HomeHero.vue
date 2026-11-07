<template>
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-tag">
          <LucideSparkles :size="16" />
          <span>Premium Roofing Solutions</span>
        </div>

        <h1 class="hero-title">
          Durable Glossy Iron Sheets at
          <span class="highlight">Factory Prices</span>
        </h1>

        <p class="hero-subtitle">
          Discover high-quality Normal Corrugated Glossy and Box Profile Glossy
          iron sheets in Gauge 30 and Gauge 28. Built to last, designed to
          shine.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/products" class="btn-primary">
            View Products & Prices
            <LucideIcon name="ArrowRight" :size="18" :stroke-width="2.5" />
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary"> Get a Quote </NuxtLink>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">30G & 28</span>
            <span class="stat-label">Available Gauges</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">Ksh 560+</span>
            <span class="stat-label">Price Rates per Meter</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Glossy Finish</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-card">
          <div class="visual-badge">Best Value</div>
          <div class="visual-header">
            <LucideIcon name="Layers" :size="32" />

            <div>
              <h3>Box Profile & Corrugated</h3>
              <p>Glossy Finish</p>
            </div>
          </div>
          <div class="price-preview">
            <div class="preview-row">
              <span>30G Price</span>
              <strong>Ksh 460 / m</strong>
            </div>
            <div class="preview-row">
              <span>Gauge 28 Price</span>
              <strong>Ksh 620 / m</strong>
            </div>
          </div>
          <NuxtLink to="/products" class="visual-link">
            Check full pricing structure
            <LucideIcon name="ChevronRight" :size="16" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 5rem 0 6rem;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-bg) 100%
  );
  border-bottom: 1px solid var(--color-border);
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  width: fit-content;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero-title .highlight {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 600;
  padding: 0.8rem 1.75rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: var(--color-primary-dark);
  font-weight: 600;
  padding: 0.8rem 1.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background-color: var(--color-surface);
  border-color: var(--color-primary-dark);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.stat-divider {
  width: 1px;
  height: 32px;
  background-color: var(--color-border);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  width: 100%;
  box-shadow: var(--shadow-md);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.visual-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: var(--color-accent);
  color: var(--color-primary-dark);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  text-transform: uppercase;
}

.visual-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.visual-icon {
  color: var(--color-primary);
  background-color: rgba(30, 58, 138, 0.08);
  padding: 8px;
  border-radius: var(--radius-sm);
  box-sizing: content-box;
}

.visual-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.visual-header p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.price-preview {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--color-bg);
  padding: 1.25rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

.preview-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.preview-row span {
  color: var(--color-text-muted);
}

.preview-row strong {
  color: var(--color-primary);
}

.visual-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.visual-link:hover {
  color: var(--color-accent-hover);
}

@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }

  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .stat-divider {
    display: none;
  }
}
</style>
