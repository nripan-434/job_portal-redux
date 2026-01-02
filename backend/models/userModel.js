import  mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    },
    type:{
        type:String,
        required:true
    }

})

const userModel = mongoose.model('Users',userSchema)
export default userModel