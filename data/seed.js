import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/product.model.js";

import men from "./men.products.json" assert { type: "json"};
import women from "./women.products.json" assert { type: "json"};
import kids from "./kids.products.json" assert { type: "json"};

dotenv.config();


const seedData = async()=>{
    try{
        console.log("connecting to DB..");
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("clearing existing product...");
        await product.deleteMany();

        console.log("Inserting products...");
        await Product.insertMany([
            ...men.products,
            ...women.products,
            ...kids.products
        ]);

        console.log("Seeding completed sucessfully");
        process.exit();
    }
    catch(error){
        console.log("seeding failed:", error);
        process.exit(1);
    }

};


seedData();

