import { Router } from "express";
import { logInUser } from "../controllers/users/logInUser.controller.js";
import { validateLoginInput } from "../middlewares/authMiddleware.js";

export const logInRouter = Router();

logInRouter.post("", validateLoginInput, logInUser);
