import { Sequelize } from 'sequelize'
import config from '../db-vars'

const sequelize = new Sequelize(
	`postgres://${config.username}:${config.password}@${config.host}:5432/${config.database}`
)

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')
	})
	.catch(error => {
		console.error('Unable to connect to the database: ', error)
	})

export default sequelize
