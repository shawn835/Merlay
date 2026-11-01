<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container header-container">
        <div class="header-tag">
          <LucideIcon name="Building" size="16" />
          <span>About Merlay Limited</span>
        </div>
        <h1 class="page-title">Building Trust, One Sheet at a Time</h1>
        <p class="page-subtitle">
          Learn more about our company background, our strategic location, and
          the premium roofing services we provide to our clients.
        </p>
      </div>
    </section>

    <!-- Business Background Section -->
    <section class="about-section">
      <div class="container about-grid">
        <div class="about-text-content">
          <div class="section-tag">
            <Icon name="lucide:history" size="16" />
            <span>Our Background</span>
          </div>
          <h2>Committed to Excellence in Manufacturing & Supply</h2>
          <p>
            <strong>Merlay Limited</strong> was established with a clear
            mission: to bridge the gap between high manufacturing standards and
            accessible roofing materials. We understand that a roof is one of
            the most critical investments in any construction project—protecting
            families, investments, and businesses.
          </p>
          <p>
            By eliminating unnecessary intermediaries, we are able to supply
            premium-grade <strong>Normal Corrugated Glossy</strong> and
            <strong>Box Profile Glossy</strong> iron sheets directly to
            contractors, hardware stores, and individual homeowners at
            unbeatable factory rates.
          </p>
          <div class="stats-row">
            <div class="stat-box">
              <span class="stat-value">30G & 28</span>
              <span class="stat-label">Standard Gauges</span>
            </div>
            <div class="stat-box">
              <span class="stat-value">Ksh 410+</span>
              <span class="stat-label">Factory Wholesale Rate</span>
            </div>
          </div>
        </div>

        <div class="about-visual-card">
          <div class="visual-inner">
            <Icon name="lucide:shield-check" size="48" class="accent-icon" />
            <h3>Quality You Can Trust</h3>
            <p>
              Every meter of iron sheet we supply undergoes rigorous quality
              checks to guarantee thickness accuracy, corrosion resistance, and
              a brilliant glossy finish.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="location-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <Icon name="lucide:map-pin" size="16" />
            <span>Find Us</span>
          </div>
          <h2>Our Location & Operations</h2>
          <p class="section-subtitle">
            Visit our offices or distribution point to inspect our product
            samples, view color charts, and place your orders directly.
          </p>
        </div>

        <div class="location-card">
          <div class="location-info">
            <div class="location-item">
              <div class="loc-icon">
                <LucideIcon name="MapPin" size="22" />
              </div>
              <div>
                <h3>Main Office & Depot</h3>
                <p>
                  Conveniently situated for easy pickup and transport
                  coordination for both local and upcountry deliveries.
                </p>
              </div>
            </div>

            <div class="location-item">
              <div class="loc-icon">
                <LucideIcon name="Clock" size="22" />
              </div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday – Saturday: 8:00 AM – 5:00 PM<br />Sunday: Closed</p>
              </div>
            </div>

            <div class="location-item">
              <div class="loc-icon">
                <LucideIcon name="Truck" size="22" />
              </div>
              <div>
                <h3>Delivery Support</h3>
                <p>
                  We assist in arranging reliable transport options to ensure
                  your iron sheets reach your construction site safely.
                </p>
              </div>
            </div>
          </div>

          <div class="location-map-placeholder">
            <LucideIcon name="Map" size="22" />
            <span>Merlay Limited Depot Location</span>
            <p class="map-note">
              Contact us for precise turn-by-turn directions to our yard.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <Icon name="lucide:briefcase" size="16" />
            <span>What We Offer</span>
          </div>
          <h2>Our Core Services</h2>
          <p class="section-subtitle">
            We go beyond just selling sheets—we provide comprehensive support
            for your roofing needs.
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <LucideIcon name="Layers" size="24" />
            </div>
            <h3>Direct Factory Supply</h3>
            <p>
              Access bulk factory pricing starting from Ksh 410 per meter for
              both normal corrugated and box profile glossy sheets.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <LucideIcon name="Ruler" size="24" />
            </div>
            <h3>Custom Length Cutting</h3>
            <p>
              We cut your roofing sheets to your exact required meter
              measurements to minimize wastage and speed up installation.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <LucideIcon name="Palette" size="24" />
            </div>
            <h3>Color Consultation</h3>
            <p>
              Choose from our extensive palette of vibrant, high-gloss factory
              colors to match your architectural design.
            </p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <LucideIcon name="Calculator" size="24" />
            </div>
            <h3>Quantity Estimation</h3>
            <p>
              Not sure how many meters you need? Share your roof dimensions with
              our team for an accurate material estimate.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="about-cta-section">
      <div class="container cta-box">
        <div class="cta-text">
          <h2>Ready to Partner with Merlay Limited?</h2>
          <p>
            Get in touch today for expert advice, current stock availability,
            and the best prices in town.
          </p>
        </div>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn-primary">
            Contact Us
            <LucideIcon name="ArrowRight" size="18" />
          </NuxtLink>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-whatsapp"
          >
            <LucideIcon name="MessageSquare" size="18" />
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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

.about-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.about-text-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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
  width: fit-content;
}

.about-text-content h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.about-text-content p {
  font-size: 1.025rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.about-text-content strong {
  color: var(--color-text);
}

.stats-row {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.stat-box {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.about-visual-card {
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
  border-radius: var(--radius-md);
  padding: 3rem 2.5rem;
  color: #ffffff;
  box-shadow: var(--shadow-md);
}

.visual-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accent-icon {
  color: var(--color-accent);
}

.visual-inner h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

.visual-inner p {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.6;
}

.location-section {
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

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.02em;
}

.location-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.location-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.loc-icon {
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  padding: 10px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.location-item h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.25rem;
}

.location-item p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.location-map-placeholder {
  background-color: #e2e8f0;
  border: 2px dashed #cbd5e1;
  border-radius: var(--radius-md);
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  text-align: center;
  padding: 1.5rem;
}

.location-map-placeholder span {
  font-weight: 700;
  color: var(--color-primary-dark);
  font-size: 1.05rem;
}

.map-note {
  font-size: 0.85rem;
}

.services-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: var(--color-surface);
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

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.service-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.service-card p {
  font-size: 0.925rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.about-cta-section {
  padding: 6rem 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.cta-box {
  background-color: var(--color-primary-dark);
  border-radius: var(--radius-md);
  padding: 4rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  box-shadow: var(--shadow-md);
}

.cta-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 600px;
}

.cta-text h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.cta-text p {
  font-size: 1.05rem;
  color: #94a3b8;
}

.cta-buttons {
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
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .location-card {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2rem;
  }

  .cta-box {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 2rem;
  }

  .cta-buttons {
    width: 100%;
    flex-direction: column;
  }
}
</style>
