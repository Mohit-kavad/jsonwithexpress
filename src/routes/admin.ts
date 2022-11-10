import { Router } from 'express';
import {
  addProduct,
  deleteProduct,
  editPorduct,
  getProduct,
  getProducts
} from '../controllers/adminController';
import { schemaValidator } from '../middlewares/validation/validator/product';

const adminRouter = Router();

adminRouter.post('/add-product', schemaValidator, addProduct);

adminRouter.put('/edit-product/:productId', schemaValidator, editPorduct);

adminRouter.get('/products/', getProducts);

adminRouter.get('/product/:id', getProduct);

adminRouter.delete('/delete-product/:productId', deleteProduct);

export { adminRouter };
