import express, { Express } from 'express'
import dotenv from 'dotenv'
import sequelize from '../config/db'
import './models'
import cors from 'cors'
import errorHandlerMiddleware from './middleware/errorHandler'
import router from './routes'
import { setupAssociations } from './models/relations'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

const allowedOrigins = ['https://movie-bookie.vercel.app']

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true)
			} else {
				callback(new Error('Not allowed by CORS'))
			}
		},
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204
	})
)

app.use(express.json())

// Explicit CORS headers for /api/rooms
app.use('/api/rooms', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'https://movie-bookie.vercel.app')
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.use('/api', router)

// This middleware should come after all route definitions
app.use(errorHandlerMiddleware)

const initDb = async () => {
	await sequelize.authenticate()
	setupAssociations()
	await sequelize.sync()
}

const start = async () => {
	try {
		await initDb()
		app.listen(port, () => console.log(`Server is listening on port ${port}...`))
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

void start()
