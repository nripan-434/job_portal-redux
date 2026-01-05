import { addjob,getalljobs,getjobapplications } from "../controllers/jobController.js";
import express from 'express'

const router = express.Router()

router.post('/jobreg',addjob)
router.get('/getalljobs',getalljobs)
router.get('/getjobapplications/:userid',getjobapplications)

export default router
