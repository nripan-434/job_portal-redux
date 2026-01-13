import mongoose from "mongoose";

const ApplictionSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"job",
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected','withdraw'],
        default:'pending',
    },
     

} ,{timestamps:true});

const ApplicationModel = mongoose.model('application',ApplictionSchema)
export default  ApplicationModel