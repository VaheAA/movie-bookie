import dotenv from 'dotenv'
dotenv.config()

const DATABASE_USER = process.env.POSTGRES_USER
const DATABASE_NAME = process.env.POSTGRES_DB
const DATABASE_PASSWORD = process.env.POSTGRES_PASSWORD
const DATABASE_HOST = process.env.POSTGRES_HOST

const config = {
	database: DATABASE_NAME,
	password: DATABASE_PASSWORD,
	username: DATABASE_USER,
	host: DATABASE_HOST
}

export default config
