require('dotenv').config()
const express=require("express")
const connection=require("./config/db")
const { userRoute } = require('./routes/UserRoute')
const { ProductRoute } = require('./routes/ProductRoute')
const cors = require("cors")

const app=express()

app.use(cors())
app.use(express.json())
app.use("/user",userRoute)
app.use("/Product",ProductRoute)

const PORT= 8000
app.listen(PORT,async()=>{
    try {
        await connection();
        console.log("server running successfully")
    } catch (error) {
        console.log({error:error.message})
    }

})
