import { Room, Seat } from '../../models'
import { IRoom, RoomCreation } from '../../core'

export class RoomService {
	async getAllRooms(): Promise<IRoom[]> {
		return await Room.findAll()
	}

	async getSingleRoom(id: number): Promise<IRoom | null> {
		return await Room.findOne({
			where: {
				id
			},
			raw: true
		})
	}

	async createRoom(room: RoomCreation): Promise<Room> {
		return Room.create(room)
	}

	async updateRoom(id: number, newData: Partial<IRoom>): Promise<IRoom | null> {
		await Room.update({ ...newData }, { where: { id } })
		return await Room.findOne({ where: { id } })
	}

	async deleteRoom(id: number): Promise<void> {
		await Room.destroy({ where: { id } })
	}
}
