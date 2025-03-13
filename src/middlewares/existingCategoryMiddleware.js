import { Categories } from "../models/categories.model.js";

export const existingCategoryMiddleware = async (req, res, next) => {
  const { categoryName } = req.body;
  try {
    const existingCategory = await Categories.findOne({
      categoryName,
    });
    if (existingCategory) {
      return res.status(400).json({
        error: "bad request",
        message: "Category already exist",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log("err");
    res.status(500).json({
      message: "haraal id gej",
    });
  }
};
