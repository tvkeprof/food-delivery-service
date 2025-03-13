import { Categories } from "../../models/categories.model.js";

const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const createdCategory = await Categories.create({
      categoryName,
    });
    res.status(201).json({
      message: "Category created succesfull",
      category: createdCategory,
    });
  } catch (error) {
    console.error("error durin creating category", error);
    res.status(500).json({
      message: "error while creating category",
    });
  }
};
export default createCategory;
