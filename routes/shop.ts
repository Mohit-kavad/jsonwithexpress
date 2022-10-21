import express,{Response,Request} from "express";
const productControllers = require("../controllers/productController");

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    res.send("<h1>Home Page</h1>");
  });

router.get('/products/:productId',productControllers.getProduct)

module.exports = router;
