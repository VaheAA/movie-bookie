<template>
  <div>
    <app-header />
    <main class="pt-24">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
</script>

<style scoped></style>
