import ApplicationModel from "../models/ApplicationModel.js";
import jobModel from "../models/jobModel.js";


export const applicationreg = async (req, res) => {
    const { user, job, email, address, contact, message } = req.body
    if (!user || !job || !email || !address || !contact || !message) {
        return res.json({ error: "fill all fields" })
    }
    const exist = await ApplicationModel.findOne({ user: user, job: job })
    if (exist) {
        return res.json({ error: "You already applied for this role" })
    }
    else {
        await ApplicationModel.create({
            user, job, email, address, contact, message
        })
        res.json({ message: "application delivered successfully" })
    }
}

export const getapplicants = async (req, res) => {
    const { jobid } = req.params
    const applicants = await ApplicationModel.find({ job: jobid }).populate('job').populate('user')
    res.json({ applicants })
}
export const changestatus = async (req, res) => {
    const { status } = req.body
    const { applicationid } = req.params
    const application = await ApplicationModel.findByIdAndUpdate(applicationid, { $set: { status } }, { new: true })
    if (!application) {
        return res.json({ error: "no application is found" })
    }
    else {
        res.json({ success: "status updated" })

    }
}
export const userapplications = async (req, res) => {
    const { userid } = req.params
    const userapplications = await ApplicationModel.find({ user: userid }).populate('job')
    if (!userapplications) {
        res.json({ error: "No job applications " })
    }
    res.json({ userapplications })
}
export const withdrawapplication = async (req, res) => {
    const { id } = req.params
    const application = await ApplicationModel.findOneAndUpdate(
        { job: id }, { status: 'withdraw' }, { new: true })
    if (!application) {
        return res.json({ error: "no application found" })
    }
    else if(application){
    res.json({ message: "Application withdrawn" })

    }
}

export const reapply = async (req, res) => {
    const { appid } = req.params
    const { user, job, email, address, contact, message  } = req.body
    if (!user || !job || !email || !address || !contact || !message) {
        return res.json({ error: "fill all fields" })
    }
    const application = await ApplicationModel.findByIdAndUpdate(appid, { user, job, email, address, contact, message,status:'reapplied'},{new:true})
    if(!application){
       return  res.json({error:"something went wrong"})
    }
    res.json({message:"reapplied successfully"})

}
