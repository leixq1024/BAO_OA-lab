<script setup lang="ts">
import TheAside from './components/TheAside/index.vue'
import TheHeader from './components/TheHeader/index.vue'
</script>

<template>
  <div class="container">
    <TheAside />
    <div class="container__main">
      <TheHeader />
      <main class="router-container">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100%;
  background: #f5f5f5;
  overflow: hidden;
  display: flex;
  &__main {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-rows: 56px 1fr;
    gap: 8px;

    overflow-y: auto;
  }
}
</style>
