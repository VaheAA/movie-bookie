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
				model: 'rooms',
				key: 'id'
			}
		},
		movie_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'movie_id',
			references: {
				model: 'movies',
				key: 'id'
			}
		}
	},
	{ sequelize, modelName: 'showtime', tableName: 'showtimes', timestamps: true, underscored: true }
)

export { Showtime }
