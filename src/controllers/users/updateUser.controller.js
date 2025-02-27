import { Users } from "../../models/users.model.js";

export const updateUsers = async (req, res) => {
  const data = req.body;
  try {
    const users = await Users.updateOne(data);
    console.log("users", users);

    res.json(users);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
