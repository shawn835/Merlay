<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card">
        <div class="cta-content">
          <div class="cta-tag">
            <LucidePhoneCall :size="16" />
            <span>Ready to Build?</span>
          </div>
          <h2 class="cta-title">
            Start Your Roofing Project with Merlay Limited Today
          </h2>
          <p class="cta-subtitle">
            Get in touch with our sales experts for precise measurements, color
            selection, and immediate factory or retail pricing.
          </p>
        </div>

        <div class="cta-actions">
          <NuxtLink to="/contact" class="btn-cta-primary">
            Contact Our Sales Team
            <LucideArrowRight :size="18" />
          </NuxtLink>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-cta-whatsapp"
          >
            <LucideIcon name="MessageSquare" :size="18" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const whatsappUrl = `https://wa.me/${config.public.companyPhone}?text=${encodeURIComponent(config.public.whatsappDefaultMsg)}`;
</script>
<style scoped>
.cta-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
}

.cta-card {
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
  border-radius: var(--radius-md);
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  pointer-events: none;
}

.cta-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 650px;
}

.cta-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  width: fit-content;
}

.cta-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 240px;
}

.btn-cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-accent);
  color: var(--color-primary-dark);
  font-weight: 700;
  padding: 0.9rem 1.75rem;
  border-radius: var(--radius-sm);
  transition:
    background-color var(--transition-fast),
    transform var(--transition-fast);
  text-align: center;
}

.btn-cta-primary:hover {
  background-color: #fbbf24;
  transform: translateY(-2px);
}

.btn-cta-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: 600;
  padding: 0.9rem 1.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-fast);
  text-align: center;
}

.btn-cta-whatsapp:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #ffffff;
}

@media (max-width: 968px) {
  .cta-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 2rem;
  }

  .cta-actions {
    width: 100%;
    flex-direction: row;
  }
}

@media (max-width: 640px) {
  .cta-actions {
    flex-direction: column;
  }

  .cta-title {
    font-size: 1.75rem;
  }
}
</style>
