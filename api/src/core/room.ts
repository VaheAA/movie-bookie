import { IShowtime } from './showtime'
import { ISeat } from './seat'

export interface IRoom {
	id: number
	name: string
	showtimes?: IShowtime[]
	seats?: ISeat[]
	created_at?: Date
	updated_at?: Date
}

export type RoomCreation = Omit<IRoom, 'id'>
