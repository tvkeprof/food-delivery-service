import { Foods } from "../../models/food.models.js";

export const deleteFoods = async (req, res) => {
  const { id } = req.params;

  try {
    await Foods.findByIdAndDelete({ id });
    res.send({ message: "succesfully deleted" }).status(200);
  } catch (err) {
    console.log("errr", err);
    res.send(err).status(400);
  }
};
