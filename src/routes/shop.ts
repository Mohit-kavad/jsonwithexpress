import express, { Response, Request } from "express";
const adminControllers = require("../controllers/adminController");
const shopControllers = require("../controllers/shopController");

const shopRouter = express.Router();

shopRouter.get("/products/:id", adminControllers.getProduct);
// shopRouter.get('/cart',shopControllers.getProduct);
shopRouter.get("/cart", shopControllers.getCart);
shopRouter.post("/cart", shopControllers.postCart);

export { shopRouter };
