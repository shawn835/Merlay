<template>
  <section class="intro-section">
    <div class="container intro-container">
      <div class="intro-badge">
        <LucideShieldCheck :size="18" />
        <span>Direct Factory Prices & Quality Assured</span>
      </div>

      <h2 class="intro-title">Welcome to Merlay Limited</h2>

      <p class="intro-text">
        At Merlay Limited, we supply top-tier roofing solutions tailored for
        durability and aesthetic appeal. Whether you are building a residential
        home, a commercial complex, or managing large-scale construction, we
        provide premium-grade <strong>Normal Corrugated Glossy</strong> and
        <strong>Box Profile Glossy</strong> iron sheets in both Gauge 30 and
        Gauge 28.
      </p>

      <div class="intro-highlights">
        <div class="highlight-item">
          <div class="icon-box">
            <LucideIcon name="CheckCircle2" :size="20" />
          </div>
          <span>perfect pricing</span>
        </div>
        <div class="highlight-item">
          <div class="icon-box">
            <LucideIcon name="CheckCircle2" :size="20" />
          </div>
          <span>Exact Gauge 28 & 30G Standards</span>
        </div>
        <div class="highlight-item">
          <div class="icon-box">
            <LucideIcon name="CheckCircle2" :size="20" />
          </div>
          <span>Vibrant Glossy Finishes & Colors</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  padding: 5rem 0;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.intro-container {
  max-width: 900px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-bg);
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid var(--color-border);
}

.intro-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.02em;
}

.intro-text {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.intro-text strong {
  color: var(--color-text);
}

.intro-highlights {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-primary-dark);
}

.icon-box {
  color: var(--color-primary);
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .intro-section {
    padding: 3.5rem 0;
  }

  .intro-title {
    font-size: 1.75rem;
  }

  .intro-highlights {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
