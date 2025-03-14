import { Users } from "../../models/users.model.js";

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await Users.findByIdAndDelete(id);
    res.send({ message: "succes" }).status(200);
  } catch (error) {
    console.log("errororor", error);
    res.send(error).status(400);
  }
};
