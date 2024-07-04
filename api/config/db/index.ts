import { Sequelize } from 'sequelize'
import config from '../config'

const sequelize = new Sequelize('movie', 'postgres', 'root', {
	host: config.host,
	dialect: 'postgres'
})

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')
	})
	.catch(error => {
		console.error('Unable to connect to the database: ', error)
	})

export default sequelize
