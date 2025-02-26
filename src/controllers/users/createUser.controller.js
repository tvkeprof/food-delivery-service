import { Users } from "../../models/users.model.js";

export const createUsers = async (req, res) => {
  const data = req.body;
  try {
    const users = await Users.create(data);
    console.log("users", users);

    res.json(users);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
