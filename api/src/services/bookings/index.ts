import schedule from 'node-schedule'
import { Booking, Showtime } from '../../models'
import { IBooking } from '../../core'
import { Op } from 'sequelize'

export class BookingService {
	async getBookingsByShowtime(id: number) {
		return await Booking.findAll({ where: { showtime_id: id } })
	}

	async bookSeat(data: Partial<IBooking>[]) {
		await Booking.bulkCreate(data)
	}

	async deactivateExpiredBookings() {
		const expiredShowtimes = await Showtime.findAll({
			where: {
				end_time: { [Op.lt]: new Date() }
			}
		})

		const expiredShowtimeIds = expiredShowtimes.map(showtime => showtime.id)

		await Booking.update(
			{ is_active: false },
			{
				where: {
					showtime_id: expiredShowtimeIds
				}
			}
		)
	}
}

schedule.scheduleJob('0 * * * *', async () => {
	const bookingService = new BookingService()
	await bookingService.deactivateExpiredBookings()
})
