import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  editPorduct,
  getProducts,
} from "../controllers/adminController";
import { createValidator } from "../middlewares/validation/validator/product";

const adminRouter = Router();

adminRouter.post("/add-product", createValidator, addProduct);

adminRouter.put("/edit-product/:productId", editPorduct);

adminRouter.get("/add-product/:id", getProducts);

adminRouter.delete("/delete-product/:productId", deleteProduct);

export { adminRouter };
