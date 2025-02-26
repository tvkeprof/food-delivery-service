import { Router } from "express";
import { getUsers } from "../controllers/users/getUsers.controller.js";
import { createUsers } from "../controllers/users/createUser.controller.js";
import { deleteUser } from "../controllers/users/deleteUser.controller.js";

export const userRouter = Router();

userRouter.get("", getUsers);
userRouter.post("", createUsers);
userRouter.delete("", deleteUser);
