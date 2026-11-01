<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    aria-label="Chat with Merlay Limited on WhatsApp"
  >
    <div class="whatsapp-icon-wrapper">
      <!-- WhatsApp SVG Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
        />
      </svg>
    </div>
    <span class="whatsapp-tooltip">Chat with us</span>
  </a>
</template>

<script setup>
const config = useRuntimeConfig();
const whatsappUrl = `https://wa.me/${config.public.companyPhone}?text=${encodeURIComponent(config.public.whatsappDefaultMsg)}`;
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  animation: pulse-subtle 2s infinite;
}

.whatsapp-icon-wrapper {
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast);
}

.whatsapp-float:hover .whatsapp-icon-wrapper {
  transform: scale(1.1);
  background-color: #20ba5a;
}

.whatsapp-tooltip {
  background-color: var(--color-primary-dark);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transform: translateX(10px);
  pointer-events: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.whatsapp-float:hover .whatsapp-tooltip {
  opacity: 1;
  transform: translateX(0);
}

@keyframes pulse-subtle {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .whatsapp-icon-wrapper {
    width: 52px;
    height: 52px;
  }

  .whatsapp-tooltip {
    display: none; /* Hide tooltip on smaller mobile screens for cleanliness */
  }
}
</style>
