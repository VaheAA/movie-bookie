import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

import sequelize from '../../config/db'
import { IShowtime } from '../core/showtime'

class Showtime extends Model<InferAttributes<Showtime>, InferCreationAttributes<Showtime>> implements IShowtime {
	declare id: CreationOptional<number>
	declare start_time: Date
	declare end_time: Date
	declare room_id: number
	declare movie_id: number
}

Showtime.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		start_time: DataTypes.DATE,
		end_time: DataTypes.DATE,
		room_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'rooms', // refers to table name
				key: 'id' // 'id' is the column name in the parent table
			}
		},
		movie_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'movies', // refers to table name
				key: 'id'
			}
		}
	},
	{ sequelize, modelName: 'Showtime', tableName: 'showtimes', timestamps: true }
)

export { Showtime }
