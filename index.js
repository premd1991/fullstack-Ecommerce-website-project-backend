import express from "express";
import connectDB from "./connectDB.js";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import dotenv  from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { useEffect } from "react";

dotenv.config({path: path.resolve("./.env")})

const PORT = process.env.PORT;
const app = express();
const corsOptions = {
    orgin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true
}
connectDB();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);

useEffect(()=>{
    fetch("http://localhost:3000/api/products/kids")
    .then(res => res.json())
    .then(data => setproduct(data));
}, [])



app.get("/", (req, res)=>{
    return res.status(200).json({message: "Welcome from server!"})
})

app.listen(PORT, ()=>{
    console.log(`server started at http://localhost: ${PORT}/`);
})