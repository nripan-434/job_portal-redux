import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    jobdetails:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }

})

const jobModel =mongoose.model('job',jobSchema)
export default jobModel