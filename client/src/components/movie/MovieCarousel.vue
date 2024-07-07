<template>
	<Carousel :value="props.showtimes" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
		<template #item="slotProps">
			<div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4 max-auto h-[600px]">
				<div class="flex flex-col w-full h-full">
					<div class="mb-4">
						<div class="relative mx-auto">
							<img :src="slotProps.data.movie.poster_url" alt="slotProps.data.name" class="w-full rounded" />
						</div>
					</div>
					<p class="mb-4 font-medium text-lg">{{ slotProps.data.movie.title }}</p>
					<p class="mb-4 font-medium text-md">Room: {{ roomName }}</p>
					<p class="mb-4 font-medium text-md">Start: {{ formatDate(slotProps.data.start_time) }}</p>
					<p class="mb-4 font-medium text-md">End: {{ formatDate(slotProps.data.end_time) }}</p>
					<Button
						:disabled="isExpired(slotProps.data.end_time)"
						label="Book now"
						class="mt-auto"
						@click="selectMovie(slotProps.data.movie.id)"
					/>
				</div>
			</div>
		</template>
	</Carousel>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel'
import Button from 'primevue/button'
import { ref } from 'vue'
import type { IShowtime } from '@/core'
import { isExpired, formatDate } from '@/shared/helpers'

const props = defineProps<{ showtimes: IShowtime[] | undefined; roomName: string }>()

const responsiveOptions = ref([
	{
		breakpoint: '1400px',
		numVisible: 2,
		numScroll: 1
	},
	{
		breakpoint: '1199px',
		numVisible: 3,
		numScroll: 1
	},
	{
		breakpoint: '767px',
		numVisible: 2,
		numScroll: 1
	},
	{
		breakpoint: '575px',
		numVisible: 1,
		numScroll: 1
	}
])

const emit = defineEmits(['selectMovie'])

const selectMovie = (movieId: number) => {
	emit('selectMovie', movieId)
}
</script>

<style lang="scss" scoped></style>
