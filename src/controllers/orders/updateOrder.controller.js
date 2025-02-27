import { Orders } from "../../models/foodOrder.model.js";

export const updateOrders = async (req, res) => {
  const data = req.body;
  try {
    const orders = await Orders.updateOne(data);
    console.log("orders", orders);

    res.json(orders);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
