import express from 'express'
import { connectDb } from './db.js'
import Userrouter from './routes/userRoutes.js'
import Jobrouter from './routes/jobRoutes.js'
import Applicationrouter from './routes/ApplicationRoutes.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.use('/users',Userrouter)
app.use('/job',Jobrouter)
app.use('/application',Applicationrouter)

app.listen(5000,()=>{
    console.log('server is running')
})

connectDb()