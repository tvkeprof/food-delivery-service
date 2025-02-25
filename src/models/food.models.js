import mongoose, { mongo } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  ingredients: { type: String, require: true },
  category: {
    trype: mongoose.Types.ObjectId,
    require: true,
    default: "category",
  },
});
export const Users = mongoose.model("foods", foodSchema);
