import express, { Response, Request, NextFunction } from "express";
const productControllers = require("../controllers/productController");

const router = express.Router();

router.get("/add-product", productControllers.getProducts);
router.post("/add-product", productControllers.addProduct);

router.post("/edit-product", productControllers.postEditPorduct);

module.exports = router;
