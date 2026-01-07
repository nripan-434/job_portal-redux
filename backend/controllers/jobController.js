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
    if (!jobs) {
        return res.json({ error: "no jobs found!" })
    }
    return res.json({ jobs })
}

