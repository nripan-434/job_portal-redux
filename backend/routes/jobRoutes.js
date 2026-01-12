import { getlatestjob,jobsearch,addjob,getalljobs,getjobapplications } from "../controllers/jobController.js";
import express from 'express'

const router = express.Router()

router.post('/jobreg',addjob)
router.get('/getalljobs',getalljobs)
router.get('/getlatestjob',getlatestjob)
router.get('/getjobapplications/:userid',getjobapplications)
router.get('/jobsearch',jobsearch)

export default router
