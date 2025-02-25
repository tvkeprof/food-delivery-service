import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber: { type: Number, require: true },
  address: { trype: String, require: true, default: "this address" },
  role: {
    type: String,
    require: true,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  isVerified: { type: Boolean },
});
export const Users = mongoose.model("users", usersSchema);
