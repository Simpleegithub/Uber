
import express from "express";
import { CreateUser, LoginUser } from "../Controllers/UserController.js";

const router = express.Router();

router.post("/register",CreateUser);
router.post("/login",LoginUser);





export default router;