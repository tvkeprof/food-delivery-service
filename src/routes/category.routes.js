import { Router } from "express";
import getCategories from "../controllers/categories/getCategory.controller.js";
import deleteCategories from "../controllers/categories/deleteCategory.controller.js";
import createCategory from "../controllers/categories/createCategory.controller.js";
import { updateCategories } from "../controllers/categories/updateCategory.controller.js";
import { validateCategory } from "../middlewares/categoryMiddleware.js";
import { existingCategoryMiddleware } from "../middlewares/existingCategoryMiddleware.js";

export const categoryRouter = Router();

categoryRouter.get("", getCategories);
categoryRouter.post(
  "",
  validateCategory,
  existingCategoryMiddleware,
  createCategory
);
categoryRouter.delete("/:id", deleteCategories);
categoryRouter.put("/:id", updateCategories);
