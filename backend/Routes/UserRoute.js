
import express from "express";
import { CreateUser } from "../Controllers/UserController.js";

const router = express.Router();

router.post("/register",CreateUser);





export default router;