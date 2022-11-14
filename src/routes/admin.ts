import { Router } from 'express';
import {
  addProduct,
  deleteProduct,
  editPorduct,
  getProduct,
  getProducts
} from '../controllers/adminController';
import { schemaValidator } from '../middlewares/validation/validator/product';
import { verifyToken } from '../middlewares/validation/auth/verifyToken';
import { roleAuthorization } from '../middlewares/validation/auth/role';

const adminRouter = Router();

adminRouter.post(
  '/add-product',
  schemaValidator,
  verifyToken,
  roleAuthorization('admin'),
  addProduct
);

adminRouter.put(
  '/edit-product/:productId',
  schemaValidator,
  verifyToken,
  roleAuthorization('admin'),
  editPorduct
);

adminRouter.get('/products/', verifyToken, getProducts);

adminRouter.get('/product/:id', verifyToken, getProduct);

adminRouter.delete(
  '/delete-product/:productId',
  roleAuthorization('admin'),
  verifyToken,
  deleteProduct
);

export { adminRouter };
