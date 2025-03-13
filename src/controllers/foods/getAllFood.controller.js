import { Foods } from "../../models/food.models.js";

export const getFoods = async (req, res) => {
  try {
    const food = await Foods.find();
    res.status(200).json(food);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      err: "bad req",
      message: "err while getting foods",
    });
  }
};
