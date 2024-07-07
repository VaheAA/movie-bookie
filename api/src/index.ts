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
