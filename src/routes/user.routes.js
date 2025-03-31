import { Router } from "express";
import { signUpMiddleWare } from "../middlewares/signUpMiddleware.js";
import { getUsers } from "../controllers/users/getUsers.controller.js";
import { deleteUser } from "../controllers/users/deleteUser.controller.js";
import { updateUsers } from "../controllers/users/updateUser.controller.js";
import { createUsers } from "../controllers/users/createUser.controller.js";
import { getUserById } from "../controllers/users/getUserById.controller.js";
import AddAdress from "../controllers/users/addAdress.controller.js";

export const userRouter = Router();

userRouter.get("", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("", signUpMiddleWare, createUsers);
userRouter.delete("/:id", deleteUser);
userRouter.put("", updateUsers);
userRouter.put("/addAdress/:id", AddAdress);
