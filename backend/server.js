import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import protectRoute from "./middleware/protectRoute.js";

const app = express()

dotenv.config()
const port = process.env.PORT
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/api/users', authRoutes)
app.use('/api/messages',protectRoute,messageRoutes)
app.use('/api/contacts',userRoutes)
 
app.listen(port, () => {
    connectToDB()
    console.log(`Server started on port ${port}`)
    
})
