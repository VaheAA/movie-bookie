import dotenv from 'dotenv'
import path from 'path'

const env = process.env.NODE_ENV || 'development'

const envFilePath = path.resolve(process.cwd(), `.env.${env}`)
dotenv.config({ path: envFilePath })

const DATABASE_USER = process.env.POSTGRES_USER
const DATABASE_NAME = process.env.POSTGRES_DB
const DATABASE_PASSWORD = process.env.POSTGRES_PASSWORD
const DATABASE_HOST = process.env.POSTGRES_HOST
const DATABASE_PORT = process.env.POSTGRES_PORT

const config = {
	database: DATABASE_NAME,
	password: DATABASE_PASSWORD,
	username: DATABASE_USER,
	host: DATABASE_HOST,
	port: DATABASE_PORT
}

console.log(config)

export default config
