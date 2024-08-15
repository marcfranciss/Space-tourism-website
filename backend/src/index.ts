import express from "express";
import cors from 'cors';
import data from "./data.json"
import dotenv from 'dotenv'


const port = process.env.PORT || 5000;
const app = express();
const corsOptions = {
    origin: "http://marcfranciss.github.io/Space-tourism-website",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})