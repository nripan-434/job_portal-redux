import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export const connectDb = () =>{

    try{
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('db connected')
            })
    }
    catch(e){
        console.log(e)
    }
}
