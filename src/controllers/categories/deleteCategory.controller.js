import { Categories } from "../../models/categories.model.js";

const deleteCategories = async (req, res) => {
  const { _id } = req.body;

  try {
    const category = await Categories.deleteOne({ id: _id });
    res.send(category).status(200);
  } catch (err) {
    console.log("errrrr", err);
    res.send(err).status(400);
  }
};
export default deleteCategories;
