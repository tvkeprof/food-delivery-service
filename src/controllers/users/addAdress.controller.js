import { Users } from "../../models/users.model.js";

const AddAdress = async (req, res) => {
  const { value } = req.body;

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      { address: value },
      { new: true }
    );
    res
      .send({ updatedUser, message: "users added address successfuly" })
      .status(200);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};

export default AddAdress;
