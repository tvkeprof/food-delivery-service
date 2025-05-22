import express from "express";
import cors from "cors";
import { categoryRouter } from "./src/routes/category.routes.js";
import { userRouter } from "./src/routes/user.routes.js";
import { orderRouter } from "./src/routes/order.routes.js";
import { foodRouter } from "./src/routes/food.routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { logInRouter } from "./src/routes/logIn.routes.js";

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

const app = express();
const port = 9999;

app.use(
  cors({
    origin: [
      "https://fooddeliveryy.vercel.app",
      "https://food-delivery-admin-web-one.vercel.app/",
    ],
  })
);

app.use(express.json());
connectDb();

app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/login", logInRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
