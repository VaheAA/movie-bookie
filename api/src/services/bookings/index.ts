import { Booking } from '../../models'
import { IBooking } from '../../core'

export class BookingService {
	async getBookingsByShowtime(id: number) {
		return await Booking.findAll({ where: { showtime_id: id } })
	}

	async bookSeat(data: Partial<IBooking>[]) {
		await Booking.bulkCreate(data)
	}
}
