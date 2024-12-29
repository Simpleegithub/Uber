import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './db/db.js';
import UserRoute from './Routes/UserRoute.js';
import CookieParser from 'cookie-parser';





const app = express();

app.use(cors());
app.use(express.json());
app.use(CookieParser());

const PORT=process.env.PORT || 5000;

// routes
app.use('/api/user',UserRoute);



app.listen(3000, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});