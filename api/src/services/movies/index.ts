import { Movie } from '../../models'
import { IMovie } from '../../core'

export class MovieService {
	async getAllMovies(): Promise<IMovie[]> {
		return await Movie.findAll()
	}

	async getMovie(id: number): Promise<IMovie | null> {
		return await Movie.findOne({
			where: {
				id
			},
			raw: true
		})
	}
}
