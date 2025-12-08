import express from "express";
import connectDB from "./connectDB.js";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";


const PORT = 3000;
const app = express();
connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);

app.get("/", (req, res)=>{
    return res.status(200).json({message: "Welcome from server!"})
})

app.listen(PORT, ()=>{
    console.log(`server started at http://localhost: ${PORT}/`);
})