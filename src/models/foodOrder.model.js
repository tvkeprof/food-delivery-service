import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    totalPrice: { type: Number, required: true },
    image: { type: String, required: true },
    foodOrderItems: [
      {
        food: { type: mongoose.Types.ObjectId, required: true, ref: "foods" },
        quantity: { type: Number, required: true },
      },
    ],
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      required: true,
    },
  },
  { timestamps: true }
);
export const Orders = mongoose.model("foodOrder", foodOrderSchema);
