<template>
	<header class="fixed top-0 left-0 right-0 p-2 z-50 w-full container mx-auto">
		<Toolbar class="p-2">
			<template #start>
				<router-link to="/">
					<h1 class="text-4xl">Movie Bookie</h1>
				</router-link>
			</template>

			<template #end>
				<div class="flex gap-2">
					<Button label="Sign in" @click="toggleModal(true, 'login')" />
					<Button label="Sign up" @click="toggleModal(true, 'register')" />
				</div>
			</template>
		</Toolbar>
	</header>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import { ref } from 'vue'

const visible = ref(false)
const typeOfModal = ref<'login' | 'register'>('login')

const toggleModal = (value: boolean, type: 'login' | 'register') => {
	visible.value = value
	typeOfModal.value = type
}
</script>
