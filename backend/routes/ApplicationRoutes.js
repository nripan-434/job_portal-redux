import { reapply,withdrawapplication,userapplications,applicationreg ,getapplicants,changestatus} from "../controllers/ApplicationController.js";
import express from 'express'

const router = express.Router()

router.post('/applicationreg',applicationreg)
router.get('/getapplicants/:jobid',getapplicants)
router.patch('/changestatus/:applicationid',changestatus)
router.get('/userapplications/:userid',userapplications)
router.patch('/withdrawapplication/:id',withdrawapplication)
router.put('/reapply/:appid',reapply)


export default router