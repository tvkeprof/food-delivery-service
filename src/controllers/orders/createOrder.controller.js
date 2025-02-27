// import { Users } from "../../models/users.model.js";
import { Orders } from "../../models/foodOrder.model.js";
export const createOrder = async (req, res) => {
  const data = req.body;
  try {
    const orders = await Orders.create(data);
    console.log("users", orders);

    res.json(orders);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
