import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  totalPrice: { type: Number, required: true },
  image: { type: String, required: true },
  foodOrderItems: [
    { type: mongoose.Types.ObjectId, ref: "foodOrderItem", required: true },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    required: true,
  },
});
export const Orders = mongoose.model("foodOrder", foodOrderSchema);
