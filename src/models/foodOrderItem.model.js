import mongoose from "mongoose";

const foodOrderItemSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, required: true, ref: "foods" },
  quantity: { type: Number, required: true },
});
export const OrderItem = mongoose.model("foodOrderItem", foodOrderItemSchema);
