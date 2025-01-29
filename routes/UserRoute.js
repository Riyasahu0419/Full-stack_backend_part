const express=require("express")
const userRoute=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/userModel")


userRoute.post("/",async(req,res)=>{
    const {name,email,pass}=req.body
    try {
        bcrypt.hash(pass,Number(process.env.SALT_ROUNDS),async(err,hash)=>{
            if(err){
                res.status(400).json({err})
            }
            else{
                const newUser=new UserModel({name,email,pass:hash})
                await newUser.save()
                console.log(newUser)
                res.status(200).json({msg:"You have been successfully regitered!"})
            }
        })
    } catch (error) {
        res.status(500).json({error})
    }
})



userRoute.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    try {
        const machingUser=await UserModel.findOne({email})
        if(machingUser){
            const passwordMatching= await bcrypt.compare(pass,machingUser.pass)
            if(passwordMatching){
                const token=jwt.sign({userId:machingUser._id,user:machingUser.name},process.env.SECRET_KEY)
                res.status(200).json({msg:"Login Successfull!", token})
            }else {
                res.status(400).json({msg:"Invalid Password"})
            }
            }else {
            res.status(404).json({msg:"User not found"})
        }
        } catch (error) {
            res.status(500).json({error})
    }
})


module.exports={userRoute}