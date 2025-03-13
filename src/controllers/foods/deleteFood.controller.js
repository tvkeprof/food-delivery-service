import { Foods } from "../../models/food.models.js";

export const deleteFoods = async (req, res) => {
  const { _id } = req.body;

  try {
    const food = await Foods.deleteOne({ id: _id });
    res.send(food).status(200);
  } catch (err) {
    console.log("errr", err);
    res.send(err).status(400);
  }
};
