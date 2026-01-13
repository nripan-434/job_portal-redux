import jobModel from "../models/jobModel.js";
export const addjob = async (req, res) => {
    const { companyname, jobdetails, location, jobtitle, salary, jobtype, employer } = req.body
    try {

        if (!companyname || !jobtitle || !location || !jobdetails || !jobtype || !salary) {
            return res.json({ error: 'fill the fields' })
        }
        await jobModel.create({
            companyname, jobtitle, location, jobdetails, jobtype, salary, employer
        })
        return res.json({ message: "job post added" })
    }
    catch (err) {
        res.json({ error: "something went wrong", err })
    }


}

export const getjobapplications = async (req, res) => {
    const { userid } = req.params
    const jobapplications = await jobModel.find({ employer: userid })
    res.json({ jobapplications })
}


export const getalljobs = async (req, res) => {
    const jobs = await jobModel.find()
    res.json({ jobs })
}
export const getallbookmarks = async (req, res) => {
    const bookmarkjobs = await jobModel.find({bookmark:true})
    res.json({ bookmarkjobs })
}
export const getlatestjob = async (req, res) => {
    const latestjobs = await jobModel.find().sort({createdAt:-1})
    res.json({ latestjobs })
}

export const jobsearch = async (req, res) => {
    const { search } = req.query
    if(search===''){
       return res.json({error:'enter a keyword'})
    }
    const jobs = await jobModel.find({
        $or: [
            { companyname: { $regex: search, $options: "i" } },
            { jobtitle: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } }
        ]
    })
    if (jobs.length === 0) {
        return res.json({emptyres:search })
    }
    return res.json({ jobs, search })
}

export const addtobookmark=async(req,res)=>{
    const {jobid}=req.params
    const marked = await jobModel.findOneAndUpdate({_id:jobid},{$set:{bookmark:true}},{new:true})
    if(marked){
    return res.json({message:"added to bookmark"})
    }
    else{
    return res.json({error:"something went wrong"})

    }

}
export const removejob=async(req,res)=>{
    const {jobid} = req.params
    const deleted = await jobModel.findByIdAndDelete({_id:jobid})
    if(deleted){
        return res.json({message:'job removed'})
    }
    else{
        return res.json({error:'something went wrong'})
    }
}
export const removebookmark=async(req,res)=>{
    const {jobid}=req.params
    const marked = await jobModel.findOneAndUpdate({_id:jobid},{$set:{bookmark:false}},{new:true})
    if(marked){
    return res.json({message:"removed from bookmark"})
    }
    else{
    return res.json({error:"something went wrong"})

    }
}

