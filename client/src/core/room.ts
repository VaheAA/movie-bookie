import { IShowtime } from './showtime'

export interface IRoom {
	id: number
	name: string
	showtimes?: IShowtime[]
	createdAt?: Date
	updatedAt?: Date
}

export type RoomCreation = Omit<IRoom, 'id'>
