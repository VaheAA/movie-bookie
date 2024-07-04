export interface IRoom {
	id: number
	name: string
	createdAt?: Date
	updatedAt?: Date
}

export type RoomCreation = Omit<IRoom, 'id'>
