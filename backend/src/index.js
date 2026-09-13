import express from "express";
import cors from "cors";
import "dotenv/config";

import { clerkMiddleware } from '@clerk/express';

import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


app.get("/health", (req, res) => {
    res.status(200).json({ ok: true });
});


app.listen(PORT, () => {
    connectDB();
    console.log("app is running on port:", PORT)
});