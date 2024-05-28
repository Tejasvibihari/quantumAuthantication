import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import authRoute from './router/userRoute.js'
import cors from 'cors'

dotenv.config()
const app = express();
const port = 3000
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Conected to Mongodb Database")
    })
    .catch((err) => {
        console.log(err)
    })
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'], // Add OPTIONS to methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true
}));

app.use("/api/auth", authRoute)
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})