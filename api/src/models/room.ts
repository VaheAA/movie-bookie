import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import sequelize from '../../config/db'
import { IRoom } from '../core/room'

class Room extends Model<InferAttributes<Room>, InferCreationAttributes<Room>> implements IRoom {
	declare id: CreationOptional<number>
	declare name: string
}

Room.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: { type: DataTypes.STRING, allowNull: false }
	},
	{
		sequelize,
		modelName: 'Room',
		tableName: 'rooms',
		timestamps: true
	}
)

export { Room }
