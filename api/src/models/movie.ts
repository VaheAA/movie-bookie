import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import sequelize from '../../config/db'
import { IMovie } from '../core/movie'

class Movie extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> implements IMovie {
	declare id: CreationOptional<number>
	declare title: string
	declare poster_url: string
}

Movie.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		poster_url: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'movie',
		tableName: 'movies',
		underscored: true,
		timestamps: true
	}
)

export { Movie }
