<template>
	<div class="flex flex-col gap-4">
		<div class="grid grid-cols-4 grid-md-cols-8 gap-2 max-w-[600px] w-full">
			<div v-for="(seat, index) in room.seats" :key="index" class="p-1">
				<Button
					size="small"
					:disabled="!!isBooked(seat.id)"
					:class="{ 'p-button-secondary': !!isBooked(seat.id) }"
					:label="getSeatLabel(seat.row_number, seat.seat_number)"
					@click="toggleSeat(seat.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import type { IBooking, IRoom } from '@/core'
import { getSeatLabel } from '@/shared/helpers'

const props = defineProps<{
	room: IRoom
	bookedSeats: IBooking[]
}>()

const { room } = props

const emit = defineEmits(['toggleSeat'])

const toggleSeat = (seatId: number) => {
	emit('toggleSeat', seatId)
}

const isBooked = (seatId: number) => props.bookedSeats.find(({ seat_id, is_active }) => seat_id === seatId && is_active)
</script>
