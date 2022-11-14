import { Response, Request } from 'express';
import { Product } from '../models/productModel';

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await Product.findAll();
    res.json({
      status: 200,
      products: data
    });
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const prodId = +req.params.id;
    // Product.findAll({where:{id:prodId}})
    const data = await Product.findByPk(prodId);
    res.json({
      status: 200,
      product: data
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const prodId = +req.params.productId;
    const data = await Product.destroy({ where: { id: prodId } });
    res.json({
      status: 204,
      data: data,
      messege: 'Data Deleted Successfully'
    });
  } catch (error) {
    console.log(error);
  }
};

const editPorduct = async (req: Request, res: Response) => {
  try {
    const prodId = +req.params.productId;
    const data = await Product.update(
      { ...req.body },
      { where: { id: prodId } }
    );
    res.json({
      status: 200,
      data,
      body: req.body
    });
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const { title, price, imageUrl, description } = req.body;
    const data = await Product.create({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    });
    res.status(200).json({
      status: 200,
      messege: 'success',
      product: data
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { addProduct, deleteProduct, editPorduct, getProducts, getProduct };
