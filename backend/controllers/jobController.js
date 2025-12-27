import jobModel from "../models/jobModel.js";
export const addjob = async (req, res) => {
    const { name, jobdetails, location, email, contact, salary, jobtype } = req.body
    try {

        if (!name || !jobdetails || !location || !email || !contact || !salary || !jobtype) {
            return res.json({ error: 'fill the fields' })
        }
        await jobModel.create({
            name, jobdetails, location, email, contact, salary, jobtype
        })
        return res.json({ message: "job post added" })
    }
    catch (err){
        res.json({ error: "something went wrong",err })
    }


}


export const getalljobs = async (req,res) => {
            const jobs =await jobModel.findAll()
            res.json({jobs})
}