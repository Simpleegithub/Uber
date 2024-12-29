
import express from "express";
import { CreateUser, getProfile, LoginUser, LogoutUser } from "../Controllers/UserController.js";
import { AuthUser } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/register",CreateUser);
router.post("/login",LoginUser);
router.get("/profile",AuthUser,getProfile);
router.get("/logout",LogoutUser);





export default router;