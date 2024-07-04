import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import sequelize from '../../config/db'
import { IBooking } from '../core/booking'

class Booking extends Model<InferAttributes<Booking>, InferCreationAttributes<Booking>> implements IBooking {
	declare id: CreationOptional<number>
	declare showtime_id: number
	declare seat_id: number
	declare booked_at: Date
}

Booking.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		showtime_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'showtimes',
				key: 'id'
			}
		},
		seat_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'seats',
				key: 'id'
			}
		},
		booked_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'Booking',
		tableName: 'bookings',
		timestamps: true
	}
)

export { Booking }
