<template>
	<div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
		<div class="md:flex-shrink-0">
			<img class="w-full object-cover md:w-48 h-full" alt="Movie Poster" :src="props.movie?.poster_url" />
		</div>
		<div class="p-8">
			<div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
				{{ props.movie?.title }}
			</div>
			<span class="block mt-1 text-md leading-tight font-medium text-black">Room: {{ props.roomName }}</span>
			<span class="block mt-1 text-md leading-tight font-medium text-black">Available seats: {{ availableSeats }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IMovie } from '@/core'

const props = defineProps<{
	movie: IMovie | undefined
	roomName: string | undefined
	availableSeats: number
}>()
</script>
