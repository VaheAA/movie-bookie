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

app.use(cors())
app.use(express.json())
app.use(errorHandlerMiddleware)
app.use('/api', router)

const allowedOrigins = ['https://movie-bookie.vercel.app/'] // Add more as needed

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
app.options('*', cors())

const initDb = async () => {
	await sequelize.authenticate()
	setupAssociations()
	await sequelize.sync()
}

const start = async () => {
	try {
		app.listen(port, () => console.log(`Server is listening on port ${port}...`))
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

void start()
void initDb()
