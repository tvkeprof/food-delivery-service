import { Router } from "express";
import { getUsers } from "../controllers/users/getUsers.controller.js";
import { createUsers } from "../controllers/users/createUser.controller.js";
import { deleteUser } from "../controllers/users/deleteUser.controller.js";
import { updateUsers } from "../controllers/users/updateUser.controller.js";

export const userRouter = Router();

userRouter.get("", getUsers);
userRouter.post("", createUsers);
userRouter.delete("", deleteUser);
userRouter.put("", updateUsers);
