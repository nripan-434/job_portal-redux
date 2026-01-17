import { reapply,withdrawapplication,userapplications,applicationreg ,getapplicants,changestatus} from "../controllers/ApplicationController.js";
import express from 'express'
import { verifytoken } from "../middleware/auth.js";

const router = express.Router()


router.post('/applicationreg',verifytoken, applicationreg)
router.get('/getapplicants/:jobid',verifytoken,getapplicants)
router.patch('/changestatus/:applicationid',verifytoken,changestatus)
router.get('/userapplications/:userid',verifytoken,userapplications)
router.patch('/withdrawapplication/:id',verifytoken,withdrawapplication)
router.put('/reapply/:appid',verifytoken,reapply)


export default router