<template>
	<header class="fixed top-0 left-0 right-0 p-2 z-50 w-full container mx-auto">
		<Toolbar class="p-2">
			<template #start>
				<router-link to="/">
					<h1 class="text-4xl">Movie Bookie</h1>
				</router-link>
			</template>
		</Toolbar>
	</header>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import { ref } from 'vue'
</script>
