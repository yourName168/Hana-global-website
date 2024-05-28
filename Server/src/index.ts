import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import { travelRouter } from './routes/Travel.Routes'
import { databaseService } from './services/database.services'
import usersRoute from './routes/User.Routes'
import { adminRouter } from './routes/Admin.Routes'
dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
databaseService.run()
app.use(express.json())
app.use(cors())
app.use('/travel', travelRouter)
app.use('/users',usersRoute)
app.use('/admin',adminRouter)
app.use(defaultErrorHandler)
