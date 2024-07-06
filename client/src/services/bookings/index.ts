import api from '..'
import type { IBooking } from '@/core'

export const getBookingsByShowtime = async (showtimeId: number) => {
	const { data } = await api.get(`bookings/showtime/${showtimeId}`)

	return data
}

export const bookSeat = async (data: Partial<IBooking>[]) => {
	await api.post('bookings', {
		bookings: data
	})
}
