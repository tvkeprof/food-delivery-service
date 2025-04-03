import { Router } from "express";
import { getFoods } from "../controllers/foods/getAllFood.controller.js";
import { getFood } from "../controllers/foods/getFoodById.controller.js";
import { createFood } from "../controllers/foods/createFood.controller.js";
import { updateFoods } from "../controllers/foods/updateFood.controller.js";
import { deleteFoods } from "../controllers/foods/deleteFood.controller.js";
// import multer from "multer";
export const foodRouter = Router();
// const upload = multer({ dest: "uploads/" });
foodRouter.get("", getFoods);
foodRouter.get("/:id", getFood);
foodRouter.post("", createFood);
foodRouter.delete("/:id", deleteFoods);
foodRouter.put(
  "/:id",
  //  upload.single("image"),
  updateFoods
);
