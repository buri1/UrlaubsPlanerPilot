import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

dotenv.config()


const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB();
  console.log(`App listens on Port ${port}`)
})

