<template>
  <header class="header">
    <div class="container header-container">
      <NuxtLink to="/" class="logo">
        <span class="logo-icon">M</span>
        <div class="logo-text">
          <span class="brand-name">Merlay Limited</span>
          <span class="brand-tagline">Quality Iron Sheets</span>
        </div>
      </NuxtLink>

      <nav class="nav" :class="{ 'is-open': isMenuOpen }">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/products" class="nav-link" @click="closeMenu"
          >Products & Prices</NuxtLink
        >
        <NuxtLink to="/containers" class="nav-link" @click="closeMenu"
          >containers</NuxtLink
        >
        <NuxtLink to="/about" class="nav-link" @click="closeMenu"
          >About Us</NuxtLink
        >
        <NuxtLink to="/contact" class="nav-link btn-contact" @click="closeMenu"
          >Contact Us</NuxtLink
        >
      </nav>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        aria-label="Toggle Navigation"
      >
        <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-sm);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
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
  width: 42px;
  height: 42px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 800;
  font-size: 1.25rem;
  border-radius: var(--radius-sm);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--color-primary-dark);
  letter-spacing: -0.01em;
}

.brand-tagline {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
}

.btn-contact {
  background-color: var(--color-primary);
  color: #ffffff !important;
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.btn-contact:hover {
  background-color: #1d4ed8;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  position: relative;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: background-color var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: transform var(--transition-fast);
}

.hamburger::before {
  top: -7px;
}

.hamburger::after {
  bottom: -7px;
}

/* Mobile responsive menu */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--color-surface);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 2rem;
    gap: 1.25rem;
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    transform: translateY(-150%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .nav.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .btn-contact {
    width: 100%;
    text-align: center;
  }

  .hamburger.is-active {
    background-color: transparent;
  }

  .hamburger.is-active::before {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.is-active::after {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>
