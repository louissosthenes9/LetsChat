import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToDB from "./db/connectdb.js";
const app = express()

dotenv.config()
const port = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/users', authRoutes)
app.listen(port, () => {
    connectToDB()
    console.log(`Server started on port ${port}`)
})
