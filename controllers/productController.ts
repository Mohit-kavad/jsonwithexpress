import express, { Response, Request, NextFunction } from "express";
import fs from "fs";
import path from "path";

exports.getProduct = (req: Request, res: Response) => {
    const data = fs.readFileSync(path.join(__dirname, "../data.json"),{
      encoding: "utf-8",
    });
    console.log(data);   
    res.json(JSON.parse(data));
}

exports.addProduct = (req: Request, res: Response): void => {

  const readData = fs.readFileSync(path.join(__dirname, "../data.json"),{
    encoding: "utf-8"
  });
  const data = JSON.stringify(req.body,null,2)
  
  fs.appendFileSync(path.join(__dirname, "../data.json"),data)
}


