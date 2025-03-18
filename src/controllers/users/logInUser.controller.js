import { Users } from "../../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const logInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findEmail = await Users.findOne({ email });

    if (!findEmail) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, findEmail.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }

    const token = jwt.sign(
      {
        id: findEmail._id,
        email: findEmail.email,
        role: findEmail.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: findEmail._id,
        email: findEmail.email,
        role: findEmail.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
