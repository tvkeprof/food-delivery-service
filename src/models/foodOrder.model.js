import mongoose, { mongo } from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users", require: true },
  totalPrice: { type: Number, require: true },
  image: { type: String, require: true },
  foodOrderItems: [{ type: mongoose.Types.ObjectId, ref: "foodOrderItem" }],
  status: { type: String, enum: ["PENDING", "CANCELLED", "DELIVERED"] },
});
export const Users = mongoose.model("foodOrder", foodOrderSchema);
