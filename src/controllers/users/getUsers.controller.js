import { Users } from "../../models/users.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    console.log("users", users);

    res.json(users);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
