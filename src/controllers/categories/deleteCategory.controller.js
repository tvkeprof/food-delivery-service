import { Categories } from "../../models/categories.model.js";

const deleteCategories = async (req, res) => {
  const { id } = req.params;

  try {
    await Categories.findByIdAndDelete({ id });
    res.send({ message: "successfully deleted" }).status(200);
  } catch (err) {
    console.log("errrrr", err);
    res.send(err).status(400);
  }
};
export default deleteCategories;
