import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    companyname:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobdetails:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    employer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
},
{
    timestamps:true
})

const jobModel =mongoose.model('job',jobSchema)
export default jobModel