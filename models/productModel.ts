import fs from "fs";
import path from "path";
export interface ProductObject {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}
const filePath: string = path.join(__dirname, "../data.json");

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
        console.log(typeof products);
      }
      products.push(this);
      // console.log(products);
      fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        console.log(err);
      });
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
