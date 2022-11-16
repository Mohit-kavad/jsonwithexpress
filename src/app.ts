import bodyParser from 'body-parser';
import express, { Application, Response, Request } from 'express';
// import { sequelize } from './util/database'; // without use of sequelize-cli
import { sequelize } from '../models/index'; // using sequelize-cli
import { adminRouter, userRouter } from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(adminRouter);
// app.use(shopRouter);
app.use(userRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send('page not found');
});

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
