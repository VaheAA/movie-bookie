<template>
	<div class="grid grid-cols-1 gap-4" v-if="rooms.length && !loading">
		<div class="p-4 shadow-sm rounded-lg shadow-emerald-50" v-for="room in rooms" :key="room.id">
			<div class="flex items-center justify-between">
				<div>
					<h3 class="text-lg font-semibold">{{ room.name }}</h3>
				</div>
				<Button
					as="routerLink"
					:to="{ name: 'Booking', params: { roomId: room.id } }"
					class="p-button-raised p-button-success"
					label="Check movies"
				/>
			</div>
		</div>
		<app-loader v-if="loading" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import { useRoomsStore } from '@/stores/rooms'
import AppLoader from '@/components/app/AppLoader.vue'

const store = useRoomsStore()
const loading = ref(false)
onMounted(async () => {
	loading.value = true
	await store.getRooms()
	loading.value = false
})

const rooms = computed(() => store.rooms)
</script>
