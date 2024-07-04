import express from 'express'
import { movies } from './movies'
import { rooms } from './rooms'

const router = express.Router()

router.use('/movies', movies)
router.use('/rooms', rooms)

export default router
