import { Users } from "../../models/users.model.js";
import bcrypt from "bcryptjs";

export const createUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedUser = await Users.findOne({ email });
    console.log("existedUser", existedUser);

    if (existedUser) {
      return res.status(400).json({
        message: "User aldready exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const cretedUser = await Users.create({
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "succesfully created user",
      user: cretedUser,
    });
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
