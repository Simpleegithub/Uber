import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './db/db.js';




const app = express();

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 5000;


app.listen(3000, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});