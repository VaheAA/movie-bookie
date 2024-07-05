export interface ISeat {
	id: number
	room_id: number
	row_number: number
	seat_number: number
	createdAt?: Date
	updatedAt?: Date
}

export type SeatCreation = Omit<ISeat, 'id'>
