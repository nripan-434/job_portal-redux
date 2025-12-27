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
    }

})