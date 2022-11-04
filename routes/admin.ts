import express from "express";
const adminControllers = require("../controllers/adminController");

const router = express.Router();

router.get("/add-product", adminControllers.getProducts);
router.post("/add-product", adminControllers.addProduct);

router.put("/edit-product/:productId", adminControllers.editPorduct);

router.delete('/delete-product/:productId',adminControllers.deleteProduct)

module.exports = router;
