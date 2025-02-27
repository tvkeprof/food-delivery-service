import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  category: {
    type: mongoose.Types.ObjectId,
    default: "category",
  },
});
export const Users = mongoose.model("foods", foodSchema);
