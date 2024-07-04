import { Room } from '../../models'
import { IRoom, RoomCreation } from '../../core/room'

export class RoomService {
	async getAllRooms(): Promise<IRoom[]> {
		return await Room.findAll()
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
