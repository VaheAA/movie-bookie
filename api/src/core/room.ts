export interface ISeat {
	roomId: number
	rowNumber: number
	seatNumber: number
}

export interface IRoom {
	id: string
	name: string
	seats: ISeat[]
	totalSeats: number
}
