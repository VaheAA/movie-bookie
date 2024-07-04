export interface IBooking {
	id: number
	showtime_id: number
	seat_id: number
	booked_at: Date
	createdAt?: Date
	updatedAt?: Date
}

export type BookingCreation = Omit<IBooking, 'id'>
