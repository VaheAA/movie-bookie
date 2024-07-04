import { NextFunction, Request, Response } from 'express'
import { RoomService } from '../../services/rooms'
import { IRoom } from '../../core'

const roomService = new RoomService()

export async function getAllRooms(req: Request, res: Response<IRoom[]>, next: NextFunction): Promise<void> {
	try {
		const rooms = await roomService.getAllRooms()

		res.status(200).json(rooms)
	} catch (error) {
		return next(error)
	}
}
