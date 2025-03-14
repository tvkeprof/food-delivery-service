import { Foods } from "../../models/food.models.js";

export const getFood = async (req, res) => {
  const { id } = req.params;
  try {
    const foodData = await Foods.findById(id);
    res.status(200).json({ foodData });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      err: "bad req",
      message: "err while getting foods",
    });
  }
};
