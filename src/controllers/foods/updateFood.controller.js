import { Foods } from "../../models/food.models.js";

export const updateFoods = async (req, res) => {
  const updateData = req.body;
  try {
    const food = await Foods.updateOne(updateData);
    console.log("updated foods");
  } catch (Err) {
    console.log("err", Err);
    res.send(err).status(400).json({
      message: "error while updating foods",
    });
  }
};
