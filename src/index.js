import express from "express";
import cors from "cors";
import { categoryRouter } from "./routes/category.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { foodRouter } from "./routes/food.routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { logInRouter } from "./routes/logIn.routes.js";

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

app.use(cors({ origin: "http://localhost:3000" }));

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

// get user neg user id-gaar avdag ym nemj hiiy
// delete id-gaa params avdag bolgoh buh table
