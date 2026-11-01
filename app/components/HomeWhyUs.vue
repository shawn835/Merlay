<template>
  <section class="why-us-section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <LucideAward :size="16" />
          <span>The Merlay Advantage</span>
        </div>
        <h2 class="section-title">Why Choose Merlay Limited?</h2>
        <p class="section-subtitle">
          We are committed to delivering uncompromising quality and exceptional
          value for every meter of iron sheet you purchase.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <LucideIcon name="Tags" :size="24" />
          </div>
          <h3>Direct Factory Prices</h3>
          <p>
            Cut out middlemen and secure unbeatable factory rates (starting from
            Ksh 410/m) alongside flexible retail pricing options.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <LucideIcon name="ShieldCheck" color="green" />
          </div>
          <h3>Guaranteed Gauges</h3>
          <p>
            Full compliance with strict gauge standards. Choose between reliable
            Gauge 30 and heavy-duty Gauge 28 for maximum structural longevity.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <LucideIcon name="Sparkles" :size="24" />
          </div>
          <h3>Vibrant Glossy Finish</h3>
          <p>
            Enhance your building's curb appeal with our high-shine normal
            corrugated and box profile glossy sheets available in your choice of
            colors.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <LucideIcon name="Headset" :size="24" />
          </div>
          <h3>Expert Assistance</h3>
          <p>
            Our dedicated sales team is always ready to help you calculate exact
            quantities, select matching colors, and coordinate prompt delivery.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us-section {
  padding: 6rem 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.feature-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  letter-spacing: -0.01em;
}

.feature-card p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .why-us-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
