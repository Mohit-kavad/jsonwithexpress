import express,{Response,Request} from "express";
const productControllers = require("../controllers/productController");
const shopControllers = require('../controllers/shopController')

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    res.send("<h1>Home Page</h1>");
  });

router.get('/products/:productId',productControllers.getProduct)

// router.get('/cart',shopControllers.getProduct);
router.post('/cart/:productId',shopControllers.addCart);

module.exports = router;
