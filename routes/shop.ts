import express,{Response,Request} from "express";
const adminControllers = require("../controllers/adminController");
const shopControllers = require('../controllers/shopController')

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    res.send("<h1>Home Page</h1>");
});

router.get('/products/:productId',adminControllers.getProduct)
// router.get('/cart',shopControllers.getProduct);
// router.post('/cart/:productId',shopControllers.addCart);
router.get('/cart',shopControllers.getCart)

module.exports = router;
