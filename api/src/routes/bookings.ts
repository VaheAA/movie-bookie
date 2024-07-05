import { Router } from 'express'
import { getBookingsByShowtime, bookSeat } from '../controllers'

const router = Router()

router.post('/', bookSeat)
router.get('/showtime/:id', getBookingsByShowtime)

export { router as bookings }
