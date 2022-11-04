import bodyParser from "body-parser";
import express,{ Application, Response, Request, NextFunction } from "express";
import { sequelize } from "../util/database";
import { Product } from "../models/productModel";
import { User } from "../models/userModel";
import { Cart } from "../models/cartModel";
import { CartItem } from "../models/cartItemModel";

// import adminRoutes  from "../routes/admin"
const adminRoutes = require("../routes/admin");
const shopRoutes = require("../routes/shop");

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

export interface IUser  {
  id:number;
  name:string;
  email:string;
}
export interface IUserRequest extends Request {
  user?: IUser;
}
app.use((req: IUserRequest, res: Response, next: NextFunction) => {
  User.findByPk(1)
    .then((user) => {
       req.user=user?.toJSON()
       next()
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use("/admin", shopRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send("page not found");
});

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{through:CartItem});
Product.belongsToMany(Cart,{through:CartItem});


sequelize
  .sync()
  .then((data) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Mohit", email: "mohit@gmaail.com" });
    }
  })
  .then((user) => {
    return Cart.create()
  }).then((cart)=>{
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
