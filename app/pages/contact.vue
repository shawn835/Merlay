<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container header-container">
        <div class="header-tag">
          <LucideIcon name="Headset" size="24" />

          <span>Get in Touch</span>
        </div>
        <h1 class="page-title">Contact Merlay Limited</h1>
        <p class="page-subtitle">
          Have questions about our iron sheet prices, gauge specifications, or
          need a custom quote? Reach out to our team today.
        </p>
      </div>
    </section>

    <!-- Contact Info Cards Grid -->
    <section class="contact-info-section">
      <div class="container">
        <div class="info-cards-grid">
          <!-- Phone Card -->
          <div class="info-card">
            <div class="card-icon">
              <LucideIcon name="PhoneCall" size="24" />
            </div>
            <h3>Phone Enquiries</h3>
            <p>
              Speak directly with our sales desk for instant quotations and
              order bookings.
            </p>
            <a
              a
              :href="'tel:' + config.public.companyPhone"
              class="card-action-link"
            >
              {{ config.public.companyPhone }}
              <LucideIcon name="ArrowRight" size="16" />
            </a>
          </div>

          <!-- WhatsApp Card -->
          <div class="info-card">
            <div class="card-icon whatsapp-accent">
              <LucideIcon name="MessageSquare" size="24" />
            </div>
            <h3>WhatsApp Chat</h3>
            <p>
              Quick responses for inquiries, color selections, and meter
              estimates.
            </p>
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="card-action-link"
            >
              Chat on WhatsApp
              <LucideIcon name="ExternalLink" size="16" />
            </a>
          </div>

          
          <!-- Location Card -->
          <div class="info-card">
            <div class="card-icon">
              <lucideIcon name="MapPin" size="24" />
            </div>
            <h3>Depot Location</h3>
            <p>
              Visit our yard to view product samples and pick up your roofing
              materials.
            </p>
            <span class="card-static-text">
              Information House<br />
              Mfangano Street, 3409-00100<br />
              Nairobi, Kenya
            </span>
          </div>

          <!-- Operating Hours Card -->
          <div class="info-card">
            <div class="card-icon">
              <LucideIcon name="Clock" size="24" />
            </div>
            <h3>Operating Hours</h3>
            <p>
              We are open to serve you during the following weekly schedule:
            </p>
            <span class="card-static-text">
              Mon – Sat: 8:00 AM – 5:00 PM<br />Sunday: Closed
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Map Section -->
    <section class="form-section">
      <div class="container form-grid">
        <div class="form-container">
          <div class="form-header">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and our team will get back to you
              promptly.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="John Doe"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                :placeholder="config.public.companyPhone"
                required
              />
            </div>

            <div class="form-group">
              <label for="product">Product of Interest</label>
              <select id="product" v-model="form.product">
                <option value="Normal Corrugated Glossy">
                  Normal Corrugated Glossy (30G & 28)
                </option>
                <option value="Box Profile Glossy">
                  Box Profile Glossy (30G & 28)
                </option>
                <option value="General Inquiry">
                  General Inquiry / Custom Quote
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message / Specifications</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Tell us the meters needed, preferred color, etc."
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-submit">
              Send Message
              <LucideIcon name="Send" size="24" />
            </button>
          </form>
        </div>

        <div class="map-container-box">
          <div class="map-box-header">
            <h3>Find Our Yard</h3>
            <p>Easy access for transport vehicles and client pickup.</p>
          </div>
          <div class="map-placeholder">
            <Icon name="lucide:map" size="48" />
            <span>Merlay Limited Depot</span>
            <p>Information House, Mfangano Street, Nairobi</p>
          </div>
          <div class="quick-whatsapp-banner">
            <div class="banner-text">
              <h4>Need an instant quote?</h4>
              <p>Chat directly with our sales rep on WhatsApp right now.</p>
            </div>
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-banner-whatsapp"
            >
              <LucideIcon name="MessageSquare" size="24" />
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();

// Access your variables easily:
const phoneDisplay = config.public.companyPhone;

const form = ref({
  name: "",
  phone: "",
  product: "Normal Corrugated Glossy",
  message: "",
});

const handleSubmit = () => {
  // Since there is no backend/database yet, you can format a WhatsApp message or alert user
  const whatsappMsg = `Hello Merlay Limited,%0A*Name:* ${form.value.name}%0A*Phone:* ${form.value.phone}%0A*Product:* ${form.value.product}%0A*Message:* ${form.value.message}`;
  window.open(`https://wa.me/${phoneDisplay}?text=${whatsappMsg}`, "_blank");
};

const whatsappUrl = `https://wa.me/${phoneDisplay}?text=${encodeURIComponent(config.public.whatsappDefaultMsg)}`;
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

.contact-info-section {
  padding: 6rem 0 4rem;
  background-color: var(--color-bg);
}

.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.info-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.card-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(30, 58, 138, 0.08);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon.whatsapp-accent {
  background-color: rgba(37, 211, 102, 0.1);
  color: #25d366;
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.info-card p {
  font-size: 0.925rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.card-action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: auto;
  padding-top: 0.5rem;
  transition: color var(--transition-fast);
}

.card-action-link:hover {
  color: var(--color-accent-hover);
}

.card-static-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-top: auto;
  padding-top: 0.5rem;
  line-height: 1.5;
}

.form-section {
  padding: 4rem 0 6rem;
  background-color: var(--color-bg);
}

.form-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: flex-start;
}

.form-container {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 3rem;
  box-shadow: var(--shadow-sm);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: 0.35rem;
}

.form-header p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary-dark);
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: inherit;
  font-size: 0.95rem;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: var(--color-surface);
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 600;
  padding: 0.9rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
  width: 100%;
}

.btn-submit:hover {
  background-color: #1d4ed8;
}

.map-container-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.map-box-header h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: 0.25rem;
}

.map-box-header p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.map-placeholder {
  background-color: #e2e8f0;
  border: 2px dashed #cbd5e1;
  border-radius: var(--radius-md);
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  text-align: center;
  padding: 1.5rem;
}

.map-placeholder span {
  font-weight: 700;
  color: var(--color-primary-dark);
  font-size: 1.1rem;
}

.map-placeholder p {
  font-size: 0.85rem;
}

.quick-whatsapp-banner {
  background: linear-gradient(135deg, #065f46 0%, #047857 100%);
  border-radius: var(--radius-md);
  padding: 2rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: var(--shadow-sm);
}

.banner-text h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.banner-text p {
  font-size: 0.9rem;
  color: #a7f3d0;
}

.btn-banner-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #25d366;
  color: #ffffff;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
  width: fit-content;
}

.btn-banner-whatsapp:hover {
  background-color: #20ba5a;
}

@media (max-width: 968px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
