import express from 'express'
import { movies } from './movies'
import { rooms } from './rooms'
import { bookings } from './bookings'

const router = express.Router()

router.use('/movies', movies)
router.use('/rooms', rooms)
router.use('/bookings', bookings)

export default router
