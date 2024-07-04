import { Room } from '../../models'

export class RoomService {
	async getAllRooms(): Promise<Room[]> {
		return await Room.findAll()
	}

	async createRoom(room: Room): Promise<Room> {
		return Room.create(room)
	}

	async updateRoom(id: number, newData: Partial<Room>): Promise<Room | null> {
		await Room.update({ ...newData }, { where: { id } })
		return await Room.findOne({ where: { id } })
	}

	async deleteRoom(id: number): Promise<void> {
		await Room.destroy({ where: { id } })
	}
}
