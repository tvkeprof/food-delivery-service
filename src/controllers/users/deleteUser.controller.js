import { Users } from "../../models/users.model.js";

export const deleteUser = async (req, res) => {
  const { _id } = req.body;
  try {
    const users = await Users.deleteOne({ id: _id });
    res.send(users).status(200);
  } catch (error) {
    console.log("errororor", error);
    res.send(error).status(400);
  }
};
