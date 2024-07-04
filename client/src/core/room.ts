export interface ISeat {
  label: string
  selected: boolean
  available: boolean
}

export interface IRoom {
  id: string
  name: string
  seats: ISeat[]
  totalSeats: number
}
