import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String },
  price: { type: Number },
  image: { type: String },
  ingredients: { type: String },
  category: {
    type: mongoose.Types.ObjectId,
    default: "category",
  },
});
export const Users = mongoose.model("foods", foodSchema);
