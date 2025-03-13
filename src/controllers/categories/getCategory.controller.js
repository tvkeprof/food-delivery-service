import { Categories } from "../../models/categories.model.js";

const getCategories = async (req, res) => {
  try {
    const category = await Categories.find();
    res.status(200).json(category);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: "bad req",
      message: "error while getting categories",
    });
  }
};
export default getCategories;
