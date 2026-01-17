import express from  'express'
import { deleteuser, loginuser, registeruser } from '../controllers/userController.js'
import { verifytoken } from '../middleware/auth.js'
const router = express.Router()

router.post('/register',registeruser)
router.delete('/deleteuser',verifytoken,deleteuser)
router.post('/login',loginuser)



export default router