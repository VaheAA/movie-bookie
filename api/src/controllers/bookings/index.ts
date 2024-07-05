import { NextFunction, Request, Response } from 'express'
import { BookingService } from '../../services/bookings'
import { IBooking } from '../../core'

const bookingService = new BookingService()

export const getBookingsByShowtime = async (req: Request<{ id: number }>, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params
		const bookings = await bookingService.getBookingsByShowtime(id)

		res.status(200).json(bookings)
	} catch (error) {
		return next(error)
	}
}

export const bookSeat = async (
	req: Request<void, void, { bookings: Partial<IBooking>[] }>,
	res: Response,
	next: NextFunction
) => {
	try {
		const { bookings } = req.body
		await bookingService.bookSeat(bookings)
		res.status(200).send('ok')
	} catch (error) {
		return next(error)
	}
}
