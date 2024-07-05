import { Seat } from '../../models'
import { ISeat } from '../../core'

export class SeatService {
	async getRoomSeats(roomId: number): Promise<ISeat[]> {
		return Seat.findAll({
			where: {
				room_id: roomId
			}
		})
	}
}
