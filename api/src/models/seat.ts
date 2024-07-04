import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

import sequelize from '../../config/db'
import { ISeat } from '../core/seat'

class Seat extends Model<InferAttributes<Seat>, InferCreationAttributes<Seat>> implements ISeat {
	declare id: CreationOptional<number>
	declare room_id: number
	declare row_number: number
	declare seat_number: number
}

Seat.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		room_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'rooms',
				key: 'id'
			}
		},
		row_number: DataTypes.INTEGER,
		seat_number: DataTypes.INTEGER
	},
	{ sequelize, modelName: 'Seat', tableName: 'seats' }
)

export { Seat }
