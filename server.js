import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import requestRoute from './routes/requestRoute.js'
dotenv.config()


const app = express()

app.use(cors())

app.use(express.json())


app.use("/api/request",requestRoute)


// http://localhost:5000/api/request

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Succfully done http://localhost:${PORT}`);
    
})