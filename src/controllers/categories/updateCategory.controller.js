import { Categories } from "../../models/categories.model.js";

export const updateCategories = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(id, data);
    res.send({ updatedCategory, message: "successfully updated" }).status(200);
    console.log("updated category", category);
  } catch (err) {
    console.log("err", err);
    res.send(err).status(400).json({
      message: "error while updating categories",
    });
  }
};
