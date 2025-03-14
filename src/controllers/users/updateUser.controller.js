import { Users } from "../../models/users.model.js";

export const updateUsers = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedUser = await Users.findByIdAndUpdate(id, data);
    res
      .send({ updatedUser, message: "users updated successfully" })
      .status(200);
    console.log("users", users);

    res.json(users);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
