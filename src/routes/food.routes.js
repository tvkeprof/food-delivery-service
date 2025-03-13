import { Router } from "express";
import { createFood } from "../controllers/foods/createfood.controller.js";
import { getFoods } from "../controllers/foods/getAllFood.controller.js";
import { deleteFoods } from "../controllers/foods/deleteFood.controller.js";
import { updateFoods } from "../controllers/foods/updateFood.controller.js";
export const foodRouter = Router();

foodRouter.get("", getFoods);
foodRouter.post("", createFood);
foodRouter.delete("", deleteFoods);
foodRouter.put("", updateFoods);
