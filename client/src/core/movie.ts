export interface IMovie {
	id: number
	title: string
	poster_url: string
	createdAt?: Date
	updatedAt?: Date
}

export type MovieCreation = Omit<IMovie, 'id'>
