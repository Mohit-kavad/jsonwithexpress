import express, { Response, Request, NextFunction } from "express";
const Cart = require("../models/cartModel");

exports.addCart = (req: Request, res: Response) => {
  const getProductIdForAddToCart = +req.params.productId;
  console.log("get product Id", getProductIdForAddToCart);
  const addingProductinCart = Cart.addProduct(getProductIdForAddToCart);
  res.json(addingProductinCart);
};
