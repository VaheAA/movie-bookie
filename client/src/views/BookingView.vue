<template>
	<div class="container mx-auto p-4">
		<div class="max-w-[1200px] mx-auto" v-if="currentRoom">
			<h2 class="text-6xl text-center py-10">Select your next watch!</h2>
			<movie-carousel :room-name="currentRoom?.name" :showtimes="sortedShowtimes" @select-movie="selectMovie" />
		</div>
		<div class="flex flex-col gap-4 max-w-[1200px] mx-auto" v-if="selectedMovie && selectedMovie.movie">
			<MovieDetails
				:room-name="currentRoom?.name"
				:movie="selectedMovie.movie"
				:start="String(selectedMovie.start_time)"
				:end="String(selectedMovie.end_time)"
				:available-seats="availableSeats"
			/>
			<p class="text-4xl text-center py-2">Selects your seats!</p>
			<div class="flex gap-6">
				<div v-if="currentRoom">
					<span class="inline-block my-2">All seats:</span>
					<BookingGrid :room="currentRoom" :booked-seats="bookedSeats" @toggle-seat="toggleSeat" />
				</div>
				<div class="flex-1 flex flex-col">
					<div>
						<span class="inline-block my-2">Selected seats:</span>
						<div>
							<Button class="m-1" size="small" v-for="seat in selectedSeats" :key="seat" @click="toggleSeat(seat.id)">{{
								getSeatLabel(seat.row_number, seat.seat_number)
							}}</Button>
						</div>
					</div>
					<div class="text-center mt-auto">
						<Button
							:disabled="!selectedSeats.length"
							label="Book Now"
							class="p-button-raised p-button-danger"
							@click="bookTickets"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Toast />
</template>

<script setup lang="ts">
import MovieDetails from '@/components/movie/MovieDetails.vue'
import BookingGrid from '@/components/booking/BookingGrid.vue'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { computed, nextTick, onMounted, ref } from 'vue'
import type { IBooking, IRoom, ISeat, IShowtime } from '@/core'
import MovieCarousel from '@/components/movie/MovieCarousel.vue'
import { isExpired, scrollToBottom } from '@/shared/helpers'
import { useRoomsStore } from '@/stores/rooms'
import { useRoute } from 'vue-router'
import { bookSeat, getBookingsByShowtime } from '@/services/bookings'
import { useToast } from 'primevue/usetoast'
import { getSeatLabel } from '@/shared/helpers'

const route = useRoute()
const { roomId } = route.params

const store = useRoomsStore()
const toast = useToast()

const currentRoom = ref<IRoom | null>(null)
const bookedSeats = ref<IBooking[]>([])
const selectedSeats = ref<ISeat[]>([])

onMounted(async () => {
	currentRoom.value = await store.getRoomById(Number(roomId))
})

const selectedMovie = ref<IShowtime | null>(null)

const bookTickets = async () => {
	const newBookingData = selectedSeats.value.map(seat => constructBookingData(seat.id))
	await bookSeat(newBookingData)
	selectedMovie.value = null
	selectedSeats.value = []
	toast.add({ severity: 'success', summary: 'Success!', detail: 'You successfully booked seats!', life: 3000 })
}

const toggleSeat = (seatId: number) => {
	const alreadySelected = selectedSeats.value.find(({ id }) => id === seatId)
	if (alreadySelected) selectedSeats.value = selectedSeats.value.filter(({ id }) => id !== seatId)
	else {
		const selectedSeat = currentRoom.value?.seats?.find(({ id }) => id === seatId)
		if (selectedSeat) selectedSeats.value.push(selectedSeat)
	}
}

const selectMovie = async (movieId: number) => {
	selectedMovie.value = currentRoom?.value?.showtimes?.find(({ movie }) => movie?.id === movieId) ?? null

	if (selectedMovie.value) bookedSeats.value = await getBookingsByShowtime(selectedMovie.value.id)

	await nextTick(() => scrollToBottom())
}

const constructBookingData = (seatId: number): Partial<IBooking> => ({
	seat_id: seatId,
	showtime_id: selectedMovie.value?.id,
	is_active: true
})

const availableSeats = computed(() => {
	if (!currentRoom?.value?.seats?.length) return 0
	return currentRoom?.value.seats.length - bookedSeats.value.length
})

const sortedShowtimes = computed(() => {
	const clonedArr = [...(currentRoom?.value?.showtimes || [])]

	return clonedArr.sort((a, b) => {
		const aExpired = isExpired(String(a.end_time))
		const bExpired = isExpired(String(b.end_time))

		if (aExpired && !bExpired) {
			return 1
		} else if (!aExpired && bExpired) {
			return -1
		} else {
			return 0
		}
	})
})
</script>
