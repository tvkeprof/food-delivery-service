import { Orders } from "../../models/foodOrder.model.js";

export const deleteOrder = async (req, res) => {
  const { food } = req.body;
  try {
    const orders = await Orders.deleteOne({ food: food });
    res.send(orders).status(200);
  } catch (error) {
    console.log("errororor", error);
    res.send(error).status(400);
  }
};
