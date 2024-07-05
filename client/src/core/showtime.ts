export interface IShowtime {
	id: number
	start_time: Date
	end_time: Date
	room_id: number
	movie_id: number
	createdAt?: Date
	updatedAt?: Date
}

export type ShowtimeCreation = Omit<IShowtime, 'id'>
