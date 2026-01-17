import { getallbookmarks, removejob,addtobookmark,removebookmark,getlatestjob , jobsearch , addjob , getalljobs , getjobapplications } from "../controllers/jobController.js";
import express from 'express'
import { verifytoken } from "../middleware/auth.js";

const router = express.Router()

router.post('/jobreg',verifytoken,addjob)
router.get('/getalljobs',getalljobs)
router.get('/getallbookmarks',getallbookmarks)
router.get('/getlatestjob',getlatestjob)
router.get('/getjobapplications/:userid',getjobapplications)
router.delete('/removejob/:jobid',verifytoken,removejob)
router.get('/jobsearch',jobsearch)
router.patch('/addtobookmark/:jobid',verifytoken,addtobookmark)
router.patch('/removebookmark/:jobid',verifytoken,removebookmark)


export default router
