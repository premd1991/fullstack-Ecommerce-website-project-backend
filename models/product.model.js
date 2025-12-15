import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Description:{
        type: String,
        required: true,
    },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }

    Price:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }

} ,{timestamps: true}) 
const Product = model("ecommecrce", productSchema);

export default Product;