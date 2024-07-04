import { Model, DataTypes } from 'sequelize'
import sequelize from '../../config/db'

class Room extends Model {}
Room.init(
	{
		name: DataTypes.STRING
	},
	{ sequelize, modelName: 'room' }
)

class Movie extends Model {}
Movie.init(
	{
		title: DataTypes.STRING,
		poster_url: DataTypes.STRING
	},
	{ sequelize, modelName: 'movie' }
)

class Showtime extends Model {}
Showtime.init(
	{
		start_time: DataTypes.DATE,
		end_time: DataTypes.DATE,
		roomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'rooms', // refers to table name
				key: 'id' // 'id' is the column name in the parent table
			}
		},
		movieId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'movies', // refers to table name
				key: 'id'
			}
		}
	},
	{ sequelize, modelName: 'showtime' }
)

class Seat extends Model {}
Seat.init(
	{
		roomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'rooms', // This should match the table name in the database
				key: 'id'
			}
		},
		row_number: DataTypes.INTEGER,
		seat_number: DataTypes.INTEGER
	},
	{ sequelize, modelName: 'seat' }
)

class Booking extends Model {}
Booking.init(
	{
		showtimeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'showtimes',
				key: 'id'
			}
		},
		seatId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'seats',
				key: 'id'
			}
		},
		booked_at: DataTypes.DATE
	},
	{ sequelize, modelName: 'booking' }
)

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

export { Seat, Booking, Showtime, Room, Movie }
