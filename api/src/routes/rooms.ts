import { Router } from 'express'
import { getAllRooms } from '../controllers/rooms'
const router = Router()

router.get('/', getAllRooms)

export { router as rooms }
