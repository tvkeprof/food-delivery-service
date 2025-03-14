import { Orders } from "../../models/foodOrder.model.js";

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Orders.findByIdAndDelete({ id });
    res.send({ message: "order succesfully deleted" }).status(200);
  } catch (error) {
    console.log("errororor", error);
    res.send(error).status(400);
  }
};
