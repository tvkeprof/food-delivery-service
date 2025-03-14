import { Router } from "express";
import { getOrders } from "../controllers/orders/getOrder.controller.js";
import { createOrder } from "../controllers/orders/createOrder.controller.js";
import { deleteOrder } from "../controllers/orders/deleteOrder.controller.js";
import { updateOrders } from "../controllers/orders/updateOrder.controller.js";

export const orderRouter = Router();

orderRouter.get("", getOrders);
orderRouter.post("", createOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.put("/:id", updateOrders);
