import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  foodName: { type: String },
});
export const Users = mongoose.model("category", categoriesSchema);
