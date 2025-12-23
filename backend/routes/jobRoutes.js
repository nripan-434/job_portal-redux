import { addjob,getalljobs } from "../controllers/jobController.js";
import express from 'express'

const router = express.Router()

router.post('/jobreg',addjob)
router.get('/getalljobs',getalljobs)

export default router
