import express,{Response,Request} from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    // res.send("<h1>Home Page</h1>");
  });

module.exports = router;
