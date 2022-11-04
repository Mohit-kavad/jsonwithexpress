import { Response, Request, NextFunction } from "express";
import { where } from "sequelize";
import { Product } from "../models/productModel";
import { IUser, IUserRequest } from "../src/app";

exports.getProducts = (req: Request, res: Response): void => {
  Product.findAll()
    .then((data) => {
      res.json({
        status: 200,
        products: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req: Request, res: Response) => {
  const prodId = +req.params.productId;
  // Product.findAll({where:{id:prodId}})
  Product.findByPk(prodId)
    .then((data) => {
      res.json({
        status: 200,
        product: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req: Request, res: Response) => {
  const prodId = +req.params.productId;
  Product.destroy({ where: { id: prodId } })
    .then((data) => {
      res.json({
        status: 200,
        data,
        messege: "Data Deleted Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editPorduct = (req: Request, res: Response) => {
  const prodId = +req.params.productId;
  Product.update({ ...req.body }, { where: { id: prodId } })
    .then((data) => {
      res.json({
        status: 200,
        data,
        body: req.body,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addProduct = (req: IUserRequest, res: Response): void => {
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    userId: req.user?.id
  })
    .then((data) => {
      res.json({
        status: 200,
        product: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
