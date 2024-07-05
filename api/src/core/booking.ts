export interface IBooking {
	id?: number
	showtime_id?: number
	seat_id?: number
	is_active?: boolean
	booked_at?: Date
	created_at?: Date
	updated_at?: Date
}

export type BookingCreation = Omit<IBooking, 'id'>
