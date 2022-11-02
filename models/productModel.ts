const db = require("../util/database");
export interface ProductObject {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

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

  findeExistingProduct(productsData: any, selectedId: number): number {
    return productsData.findIndex(
      (info: ProductObject) => info.id === selectedId
    );
  }

  save() {
    return db.execute(
      `INSERT INTO products (title,price,imageUrl,description) VALUES ("${this.title}","${this.price}","${this.imageUrl}","${this.description}")`
      // "INSERT INTO products (title,price,imageUrl,description) VALUES (?,?,?,?)",
      // [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  findById(id: number) {
    return db.execute(`SELECT * FROM products WHERE id = ${id}`);
  }
  deleteById() {}
};
