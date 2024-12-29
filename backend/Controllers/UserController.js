import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const CreateUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const token =await jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"1d"})
    const user = await User.create({
      fullName: {
        firstName: fullName.firstName,
        lastName: fullName.lastName,
      },
      email,
      password : hashedPassword,
    });
    res.status(201).json({user,token});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
