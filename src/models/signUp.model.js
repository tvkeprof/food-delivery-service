import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
export const SignUp = mongoose.model("signUp", usersSchema);
