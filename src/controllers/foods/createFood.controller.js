import { Foods } from "../../models/food.models.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const createFoods = await Foods.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });
    res.status(201).json({
      message: "food created successfull",
      foods: createFoods,
    });
  } catch (err) {
    console.log("error while creating foods", err);
    res.status(500).json({
      message: "error while creating foooooods",
    });
  }
};
// category n objectid r barij avhiig asuuh?
