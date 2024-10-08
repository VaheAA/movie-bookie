export interface IShowtime {
	id: number
	start_time: Date
	end_time: Date
	room_id: number
	movie_id: number
	created_at?: Date
	updated_at?: Date
}

export type ShowtimeCreation = Omit<IShowtime, 'id'>
