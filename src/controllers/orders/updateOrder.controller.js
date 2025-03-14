import { Orders } from "../../models/foodOrder.model.js";

export const updateOrders = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedOrder = await Orders.findByIdAndUpdate(id, data);
    res
      .send({ updatedOrder, message: "order succesfully updated" })
      .status(200);
    console.log("orders", orders);

    res.json(orders);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
