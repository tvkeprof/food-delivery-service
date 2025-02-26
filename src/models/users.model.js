import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String },
  phoneNumber: { type: Number },
  address: { trype: String },
  role: {
    type: String,

    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  isVerified: { type: Boolean },
});
export const Users = mongoose.model("users", usersSchema);
