import jobModel from "../models/jobModel.js";
export const addjob = async (req, res) => {
    const { name, jobdetails, location, email, contact, salary, jobtype } = req.body
    try {

        if (!name || !jobdetails || !location || !email || !contact || !salary || !jobtype) {
            return res.json({ message: 'fill the fields' })
        }
        await jobModel.create({
            name, jobdetails, location, email, contact, salary, jobtype
        })
        return res.json({ message: "job added" })
    }
    catch {
        res.json({ message: "something went wrong", error })
    }


}


export const getalljobs = async (req,res) => {
            const jobs =await jobModel.findAll()
            res.json({jobs})
}