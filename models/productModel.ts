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
  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent.toString());
      }
      const productIndex = products.findIndex(
        (info: ProductObject) => info.id === this.id
      );
      console.log(productIndex);

      const productForUpdate = products[productIndex];
      console.log("product which will be update", productForUpdate);

      // if (this.title) {
      //   console.log("this id is und:", this.title);

      //   //check is ID already awailable for updating a product
      //   const productIndex = products.findIndex(
      //     (info: ProductObject) => info.title === this.title
      //   );
      //   console.log(productIndex);
      // } else {
      //   // this.id = Math.random();
      //   products.push(this);
      //   fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
      //     console.log("error", err);
      //   });
      // }
    });
  }
  static fetchAll(): string {
    return fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
  }

  // fetchOne(id: number): ProductObject {
  //   const jsonFileData = JSON.parse(
  //     fs.readFileSync(filePath, {
  //       encoding: "utf-8",
  //     })
  //   );
  //   return jsonFileData.find((info: ProductObject) => info.id === id);
  // }
};
