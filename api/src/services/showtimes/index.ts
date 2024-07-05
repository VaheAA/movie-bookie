import { Movie, Showtime } from '../../models'
import { IShowtime } from '../../core'

export class ShowtimesService {
	async getAllShowtimes(roomId: number): Promise<IShowtime[]> {
		return await Showtime.findAll({
			where: {
				room_id: roomId
			},
			include: [
				{
					model: Movie,
					as: 'movie'
				}
			]
		})
	}
}
