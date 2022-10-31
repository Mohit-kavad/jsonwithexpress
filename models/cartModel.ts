import fs from "fs";
import path from "path";

const filePath: string = path.join(__dirname, "../data/data.json");

interface Products {
  id: number;
  qty: number;
}

interface addToCart {
  products: Products[];
  //   totalPrice: number;
}

module.exports = class Cart {
  static addProduct(id: number) {
    // Fetch the previous cart
    fs.readFile(filePath, (err, fileContent) => {
      let cart: addToCart = { products: [] };
      if (!err) {
        cart.products = JSON.parse(fileContent.toString());
      }

      // Analyze the Cart => Find Existing product
      const existingProductIndex = cart.products.findIndex(
        (prod: Products) => +prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
    //   console.log("updated", existingProduct);

      let updateProduct;

      // Add new Product/increase quantity
        if (existingProduct) {
            updateProduct = {...existingProduct}
            updateProduct.qty= 0;
            updateProduct.qty = updateProduct.qty + 1;
            // console.log("quantity value",updateProduct.qty);
            // console.log(...cart.products);
            cart.products[existingProductIndex] = updateProduct;
            // console.log("cart produt last line",cart.products[existingProductIndex]); 
        }else{
            updateProduct = { id:id,qty:1};
            cart.products = [...cart.products,updateProduct]
        }
        
         console.log(cart);
      fs.writeFile(
        path.join(__dirname, "../data/cart.json"),
        JSON.stringify(cart, null, 2),
        (err) => {
          console.log("error :",err);
        }
      );
    });
  }
};
