
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Models/UserModel.js";
dotenv.config();
export const AuthUser = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token =  req.headers.token
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const user = await User.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};