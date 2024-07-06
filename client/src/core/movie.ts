export interface IMovie {
	id: number
	title: string
	poster_url: string
	created_at?: Date
	updated_at?: Date
}

export type MovieCreation = Omit<IMovie, 'id'>
