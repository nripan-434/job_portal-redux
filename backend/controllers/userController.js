import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const  registeruser =async(req,res)=>{
    const {name,email,password,admin,type}=req.body
    if(!name||!email||!password){
        return res.json({error:"fill all fields"})
    }
    const exist = await userModel.findOne({email})
    if(exist){
        return res.json({error:"user already exists"})
    }
    const hashpass = await bcrypt.hash(password,10)
    const user = await userModel.create({
        name,email,password:hashpass,admin,type
})
res.json({message:"registered successfully"})
}

export const deleteuser =async(req,res)=>{
    const {id} = req.body
    await userModel.findByIdAndDelete({_id:id})
    .then( res.json({message:"user has been deleted"}))

}

export const loginuser = async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.json({error:"fill the fields"})
        
    }
    const user = await userModel.findOne({email})
     if(!user){
        return res.json({error:"invalid credentials"})

    }
    const valid = await bcrypt.compare(password,user.password)
    
    if(!valid){
        return res.json({error:"invalid credentials"})

    }
    const token =jwt.sign({id:user._id,name:user.name},'secret')
    if(user.role=='true'){

    }
    const currentuser= {
        id:user._id,
        name:user.name,
        email:user.email,
        admin:user.admin,
        type:user.type

    }
    res.json({message:"Logged in Successfully",token,currentuser})



}

