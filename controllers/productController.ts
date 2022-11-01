import express, { Response, Request, NextFunction } from "express";
import { ProductObject } from "../models/productModel";

const Product = require("../models/productModel");

exports.getProducts = (req: Request, res: Response): void => {
  const readProductData = Product.fetchAll();
  res.json(JSON.parse(readProductData));
};

exports.getProduct = (req: Request, res: Response) => {
  const prodId = +req.params.productId;
  const readProductData = JSON.parse(Product.fetchAll());
  const findData = readProductData.find(
    (info: ProductObject) => info.id === prodId
  );
  res.json(findData);
};

exports.postEditPorduct = (req: Request, res: Response) => {
  const prodId = +req.body.productId;
  const updateTitle = req.body.title;
  const updateImageUrl = req.body.imageUrl;
  const updateDescription = req.body.description;
  const updatePrice = req.body.price;
  const updateJsonData = new Product(
    prodId,
    updateTitle,
    updateImageUrl,
    updateDescription,
    updatePrice
  );
  updateJsonData.save();
};

exports.addProduct = (req: Request, res: Response): void => {
  const product = new Product(
    req.body.id,
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save();
};
