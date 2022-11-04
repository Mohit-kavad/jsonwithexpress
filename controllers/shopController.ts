import { Response, Request } from "express";
import { Cart } from "../models/cartModel";


// exports.addCart = (req: Request, res: Response) => {
//   const getProductIdForAddToCart = +req.params.productId;
//   console.log("get product Id", getProductIdForAddToCart);
//   const addingProductinCart = Cart.addProduct(getProductIdForAddToCart);
//   res.json(addingProductinCart);
// };

exports.getCart = (req: Request, res: Response) => {
  Cart.findAll()
    .then((cart:any) => {
      console.log(cart);
      res.end()
    })
    .catch((err:any) => {
      console.log(err);
    });
};
