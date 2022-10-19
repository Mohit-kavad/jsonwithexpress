import bodyParser from "body-parser";
import express, { Application, Response, Request, NextFunction } from "express";
// import adminRoutes  from "../routes/admin"
const adminRoutes = require('../routes/admin');
const shopRoutes = require('../routes/shop');

const app: Application = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req:Request,res:Response )=>{
    res.status(404).send('page not found')
})

app.listen(8000);
