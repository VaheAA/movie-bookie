// eslint-disable-next-line no-undef
const path = require('path')
const dotenv = require('dotenv')

const env = process.env.NODE_ENV || 'development'

const envFilePath = path.resolve(process.cwd(), `.env.${env}`)
dotenv.config({ path: envFilePath })

const DATABASE_USER = process.env.POSTGRES_USER
const DATABASE_NAME = process.env.POSTGRES_DB
const DATABASE_PASSWORD = process.env.POSTGRES_PASSWORD
const DATABASE_HOST = process.env.POSTGRES_HOST
const DATABASE_PORT = process.env.POSTGRES_PORT

// eslint-disable-next-line no-undef
module.exports = {
	development: {
		username: DATABASE_USER,
		password: DATABASE_PASSWORD,
		database: DATABASE_NAME,
		host: DATABASE_HOST,
		port: DATABASE_PORT,
		dialect: 'postgres'
	},
	production: {
		username: DATABASE_USER,
		password: DATABASE_PASSWORD,
		database: DATABASE_NAME,
		host: DATABASE_HOST,
		port: DATABASE_PORT,
		dialect: 'postgres'
	}
}
