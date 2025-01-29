const express=require("express")
const { ProductModel } = require("../models/productModel")
const { auth } = require("../middleware/auth")
const ProductRoute=express.Router()


ProductRoute.post("/",auth,async(req,res)=>{
    try {
        const newProduct= new ProductModel(req.body)
        await newProduct.save()
        res.status(200).json({msg:"Product created Successfully!"})
    } catch (error) {
        res.status(500).json({msg:"Internal server error", error})
    }
})


ProductRoute.get("/",auth, async(req,res)=>{
    try {
        const Product = await ProductModel.find({userId: req.body.userId})
        res.status(200).json({Product})
    } catch (error) {
        res.status(500).json({msg:"Internal server error", error}) 
    }
})

ProductRoute.patch("/:ProductId",auth,async(req,res)=>{
    const {ProductId}=req.params
    try {
        const Product = await ProductModel.findOne({_id:ProductId})
       if(Product.userId.toString()===req.body.userId){
        await ProductModel.findByIdAndUpdate({_id:ProductId},req.body)
        res.status(200).json({msg:`The note with ID: ${ProductId} has been updated`})
       }
       else{
        res.status(400).json({msg:"You are not authorised to perform this task!"})
       }

    } catch (error) {
        res.status(500).json({error})
    }
})


ProductRoute.delete("/:ProductId",auth,async(req,res)=>{
    const{ProductId}=req.params
    try {
        const Product=await ProductModel.findOne({_id:ProductId})
        if(Product.userId.toString()===req.body.userId){
            await ProductModel.findByIdAndDelete({_id:ProductId})
            res.status(200).json({msg:`The note with ID: ${ProductId} has been deleted`})
        }
        else {
            res.status(400).json({msg:"You are not authorised to perform this task!"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports={ProductRoute}