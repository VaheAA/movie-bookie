import { NextFunction, Request, Response } from 'express'
import { RoomService, SeatService, ShowtimesService } from '../../services'
import { IRoom } from '../../core'

const roomService = new RoomService()
const showtimesService = new ShowtimesService()
const seatService = new SeatService()

export const getAllRooms = async (req: Request, res: Response<IRoom[]>, next: NextFunction): Promise<void> => {
	try {
		const rooms = await roomService.getAllRooms()

		res.status(200).json(rooms)
	} catch (error) {
		return next(error)
	}
}

export const getSingleRoom = async (
	req: Request<{ id: number }>,
	res: Response<IRoom | string | null>,
	next: NextFunction
): Promise<void> => {
	try {
		const { id } = req.params
		const singleRoom = await roomService.getSingleRoom(id)

		if (!singleRoom) return

		singleRoom.showtimes = await showtimesService.getAllShowtimes(id)
		singleRoom.seats = await seatService.getRoomSeats(id)
		res.json({ ...singleRoom })
	} catch (error) {
		return next(error)
	}
}
