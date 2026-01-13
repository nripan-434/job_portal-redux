import { getallbookmarks, removejob,addtobookmark,removebookmark,getlatestjob , jobsearch , addjob , getalljobs , getjobapplications } from "../controllers/jobController.js";
import express from 'express'

const router = express.Router()

router.post('/jobreg',addjob)
router.get('/getalljobs',getalljobs)
router.get('/getallbookmarks',getallbookmarks)
router.get('/getlatestjob',getlatestjob)
router.get('/getjobapplications/:userid',getjobapplications)
router.delete('/removejob/:jobid',removejob)
router.get('/jobsearch',jobsearch)
router.patch('/addtobookmark/:jobid',addtobookmark)
router.patch('/removebookmark/:jobid',removebookmark)


export default router
