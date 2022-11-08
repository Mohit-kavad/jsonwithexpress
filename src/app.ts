import bodyParser from "body-parser";
import express, { Application, Response, Request, NextFunction } from "express";
import { sequelize } from "./util/database";
import { Product } from "./models/productModel";
import { User } from "./models/userModel";
import { Cart } from "./models/cartModel";
import { CartItem } from "./models/cartItemModel";
import { adminRouter, shopRouter, userRouter } from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(adminRouter);
app.use(shopRouter);
app.use(userRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("page not found");
});

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  .sync()
  .then((cart) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
