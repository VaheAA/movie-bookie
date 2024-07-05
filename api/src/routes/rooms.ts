import { Router } from 'express'
import { getAllRooms, getSingleRoom } from '../controllers'
const router = Router()

router.get('/', getAllRooms)
router.get('/:id', getSingleRoom)

export { router as rooms }
