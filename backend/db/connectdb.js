import mongoose from 'mongoose'

const connectToDB = async () => {
    try{
       await mongoose.connect(process.env.MONGODB_URL, {})
        console.log("Connected to DB")
    }catch(err){
        console.log(`Error connecting to db:${err}`)
    }
}
export default connectToDB;