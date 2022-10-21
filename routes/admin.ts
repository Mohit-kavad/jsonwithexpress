import express, { Response, Request, NextFunction } from "express";
const productControllers = require("../controllers/productController");

const router = express.Router();

router.get("/add-product", productControllers.getProducts);
router.post("/add-product",productControllers.addProduct);

module.exports = router;


