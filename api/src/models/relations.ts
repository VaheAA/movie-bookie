import { Room } from './room'
import { Movie } from './movie'
import { Showtime } from './showtime'
import { Seat } from './seat'
import { Booking } from './booking'

export const setupAssociations = () => {
	Room.hasMany(Showtime)
	Showtime.belongsTo(Room)

	Movie.hasMany(Showtime)
	Showtime.belongsTo(Movie)

	Room.hasMany(Seat)
	Seat.belongsTo(Room)

	Showtime.hasMany(Booking)
	Booking.belongsTo(Showtime)

	Seat.hasMany(Booking)
	Booking.belongsTo(Seat)
}
