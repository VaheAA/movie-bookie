<template>
	<div class="h-full">
		<app-header />
		<main class="pt-24 h-full">
			<router-view />
		</main>
	</div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
</script>

<style scoped></style>
