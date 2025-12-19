import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ["men", "women","kids"],
        required: true
    },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    brand:{
        type: String,
        required: true
    },    

    price:{
        type: Number,
        default: 0
    },

    discount:{
        type: Number,
        default: 0,
    },

    sizes:{
        type: String,
        required: true,
     },
    
    color:{
        type: String,
        required: true,
     },

    rating:{
         type: Number,
        default: 0,
    },

    stock:{
        type: Number,
        default: 0,
     },
    images:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
     }

    }, { timestamps: true});

const Product = model("ecommecrce", productSchema);

export default Product;