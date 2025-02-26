import { Users } from "../../models/users.model.js";

export const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const users = await Users.deleteOne({ email: email });
    res.send(users).status(200);
  } catch (error) {
    console.log("errororor", error);
    res.send(error).status(400);
  }
};
