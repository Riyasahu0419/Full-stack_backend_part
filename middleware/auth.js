const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1]
        if(!token){
            res.status(400).json({msg:"please login first"})
        }

        const decoded = jwt.verify(token,process.env.SECRET_Key)
        console.log(decoded)
        req.body.userId = decoded.userId
        req.body.user = decoded.user
        next()
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = {auth}