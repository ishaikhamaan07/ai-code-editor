import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 8004;

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"hello from ai service"});
});

app.listen(port,()=>{
    connectDB();
    console.log(`ai service started at ${port}`);
});