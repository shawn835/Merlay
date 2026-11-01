<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-col">
        <div class="logo">
          <span class="logo-icon">M</span>
          <span class="brand-name">Merlay Limited</span>
        </div>
        <p class="footer-desc">
          Your trusted partner for premium quality normal corrugated and box
          profile glossy iron sheets at unbeatable factory and retail prices.
        </p>
      </div>

      <div class="footer-col">
        <h4 class="footer-title">Quick Links</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products & Prices</NuxtLink></li>
          <li><NuxtLink to="/about">About Us</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-title">Products</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/products">Normal Corrugated Glossy</NuxtLink></li>
          <li><NuxtLink to="/products">Box Profile Glossy</NuxtLink></li>
          <li><NuxtLink to="/products">Gauge 28 & 30 Available</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-title">Get in Touch</h4>
        <p class="footer-contact-info">
          Ready to order or need a custom quote? Reach out to our sales team
          today.
        </p>
        <NuxtLink to="/contact" class="btn-footer-contact">Contact Us</NuxtLink>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-container">
        <p>
          &copy; {{ new Date().getFullYear() }} Merlay Limited. All rights
          reserved.
        </p>
        <p class="designer-credit">Quality Roofing Solutions</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary-dark);
  color: #ffffff;
  margin-top: auto;
  border-top: 4px solid var(--color-primary);
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  padding-top: 4rem;
  padding-bottom: 3rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: var(--radius-sm);
}

.brand-name {
  font-weight: 700;
  font-size: 1.15rem;
  color: #ffffff;
}

.footer-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
}

.footer-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  font-size: 0.9rem;
  color: #94a3b8;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-contact-info {
  font-size: 0.9rem;
  color: #94a3b8;
}

.btn-footer-contact {
  display: inline-block;
  background-color: var(--color-primary);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.55rem 1.25rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
  width: fit-content;
}

.btn-footer-contact:hover {
  background-color: #1d4ed8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  font-size: 0.85rem;
  color: #94a3b8;
}

.footer-bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .footer-container {
    padding-top: 3rem;
    padding-bottom: 2rem;
    gap: 2rem;
  }

  .footer-bottom-container {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
