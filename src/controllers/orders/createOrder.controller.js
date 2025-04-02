import { Orders } from "../../models/foodOrder.model.js";

export const createOrder = async (req, res) => {
  try {
    console.log("🛒 Incoming Order Data:", JSON.stringify(req.body, null, 2));

    const { items, totalAmount, userId, status = "PENDING" } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        error: "Invalid order data: 'items' must be a non-empty array.",
      });
    }
    if (typeof totalAmount !== "number") {
      return res
        .status(400)
        .json({ error: "Invalid order data: 'totalAmount' must be a number." });
    }

    const orderData = {
      user: userId,
      totalPrice: totalAmount,
      image: items[0]?.image || "",
      foodOrderItems: items.map(({ _id, quantity }) => ({
        food: _id,
        quantity,
      })),
      status,
    };

    console.log("✅ Processed Order Data:", JSON.stringify(orderData, null, 2));

    const newOrder = await Orders.create(orderData);
    console.log("✅ Order Created:", newOrder);

    return res.status(201).json(newOrder);
  } catch (error) {
    console.error("🔥 Error creating order:", error);
    return res
      .status(500)
      .json({ error: "Failed to create order due to server error." });
  }
};
