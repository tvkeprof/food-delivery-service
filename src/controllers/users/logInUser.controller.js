import { Users } from "../../models/users.model.js";
import bcrypt from "bcryptjs";

export const logInUser = async (req, res) => {
  const { email, password } = req.body;

  const findEmail = await Users.findOne({ email });
  try {
    if (!findEmail) {
      return res.status(404).json({
        message: " user not found",
      });
    }
    const match = await bcrypt.compare(password, findEmail.password);

    if (match) {
      return res.status(200).json({
        succes: true,
        data: findEmail,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "wrong password",
      });
    }
  } catch (error) {}

  res.json("invalid password");
};
