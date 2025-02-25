import mongoose, { mongo } from "mongoose";

const categoriesSchema = new mongoose.Schema({
  foodName: { type: String, require: true },
});
export const Users = mongoose.model("category", categoriesSchema);
