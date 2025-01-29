const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    price: {type: String, required:true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    user: {type: String, required:true}
}, {
    versionKey: false
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = {ProductModel}