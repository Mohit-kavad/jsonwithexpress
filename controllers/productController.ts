import express, { Response, Request, NextFunction } from "express";
import { ProductObject } from "../models/productModel";

const Product = require("../models/productModel");

exports.getProducts = (req: Request, res: Response): void => {
  const readProductData = Product.fetchAll();
  res.json(JSON.parse(readProductData));
};

exports.getProduct = (req: Request, res: Response, next: NextFunction) => {
  const prodId = +req.params.productId;
  const readProductData = JSON.parse(Product.fetchAll());
  const findData = readProductData.find((info: ProductObject) => info.id === prodId);
  res.json(findData)
};

exports.addProduct = (req: Request, res: Response): void => {
  const product = new Product(
    (req.body.id = Math.random()),
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save();
};
