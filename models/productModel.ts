import fs from "fs";
import path from "path";
export interface ProductObject {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}
const filePath: string = path.join(__dirname, "../data/data.json");

module.exports = class Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  constructor(
    id: number,
    title: string,
    imageUrl: string,
    description: string,
    price: number
  ) {
    (this.id = id),
      (this.title = title),
      (this.imageUrl = imageUrl),
      (this.description = description),
      (this.price = price);
  }

  findeExistingProduct(productsData: any,selectedId:number): number {
    return productsData.findIndex((info: ProductObject) => info.id === selectedId);
  }

  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent.toString());
      }

      if (this.id) {
        //check is ID already awailable for updating a product
        console.log("this id is und:", this.id);
        let updatedProduct;
        const existingProductIndex = this.findeExistingProduct(products,this.id);
        updatedProduct = [...products]; // copy products array of object in updatedProducts
        updatedProduct[existingProductIndex] = this;
        fs.writeFile(
          filePath,
          JSON.stringify(updatedProduct, null, 2),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Data Written Successfully");
            }
          }
        );
      } else {
        this.id = Math.random();
        products.push(this);
        fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Data Written Successfully");
          }
        });
      }
    });
  }

  static fetchAll(): string {
    return fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
  }

  deleteById() {
    const productData = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    const products = JSON.parse(productData);
    let deletedData;
    const existingProductIndex = this.findeExistingProduct(products,this.id);
    console.log("existing data index",existingProductIndex);
    deletedData = [...products]
    delete deletedData[existingProductIndex]
    fs.writeFile(filePath, JSON.stringify(deletedData, null, 2), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data deleted Successfully");
      }
    });
  }
};
