import express from "express";
import cors from "cors";
import { categoryRouter } from "./routes/category.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { foodRouter } from "./routes/food.routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const url = process.env.DATABASE_CONNECTION_URL;
const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("success");
  } catch (err) {
    console.log("error", err);
  }
};
connectDb();

const app = express();
const port = 9999;
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/category", categoryRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/food", foodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
