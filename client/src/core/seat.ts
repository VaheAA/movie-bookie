export interface ISeat {
	id: number
	room_id: number
	row_number: number
	seat_number: number
	created_at?: Date
	updated_at?: Date
}

export type SeatCreation = Omit<ISeat, 'id'>
