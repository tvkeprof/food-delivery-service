import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  totalPrice: { type: Number },
  image: { type: String },
  foodOrderItems: [{ type: mongoose.Types.ObjectId, ref: "foodOrderItem" }],
  status: { type: String, enum: ["PENDING", "CANCELLED", "DELIVERED"] },
});
export const Users = mongoose.model("foodOrder", foodOrderSchema);
