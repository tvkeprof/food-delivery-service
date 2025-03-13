import { Categories } from "../../models/categories.model.js";

export const updateCategories = async (req, res) => {
  const updateData = req.body;
  try {
    const category = await Categories.updateOne(updateData);
    console.log("updated category", category);
  } catch (err) {
    console.log("err", err);
    res.send(err).status(400).json({
      message: "error while updating categories",
    });
  }
};
