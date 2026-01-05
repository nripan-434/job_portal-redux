import express from  'express'
import { deleteuser, loginuser, registeruser } from '../controllers/userController.js'
const router = express.Router()

router.post('/register',registeruser)
router.delete('/deleteuser',deleteuser)
router.post('/login',loginuser)



export default router