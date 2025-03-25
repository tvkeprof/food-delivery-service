import { Foods } from "../../models/food.models.js";

export const updateFoods = async (req, res) => {
  const { id } = req.params;
  const { foodName, price, ingredients, image } = req.body;
  try {
    const updatedDate = await Foods.findByIdAndUpdate(id, {
      foodName,
      price,
      ingredients,
      image,
    });
    res.send({ updatedDate }).status(200);
    console.log("updated foods");
  } catch (Err) {
    console.log("err", Err);
    res.send(err).status(400).json({
      message: "error while updating foods",
    });
  }
};
