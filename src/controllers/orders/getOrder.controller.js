import { Orders } from "../../models/foodOrder.model.js";
export const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find({});
    console.log("users", orders);

    res.json(orders);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
