import { Users } from "../../models/users.model.js";

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    await Users.findById(id);
    res.send({ message: "success" }).status(200);
  } catch (err) {
    console.log("errrr", err);
    res.send(err).status(400);
  }
};
