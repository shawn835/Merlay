<template>
  <div class="site-layout">
    <AppHeader />

    <main class="main-content">
      <slot />
    </main>

    <AppFooter />

    <WhatsAppButton />
  </div>
</template>

<style scoped>
.site-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
