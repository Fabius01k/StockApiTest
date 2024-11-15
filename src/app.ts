import express from 'express';
import {productRouter} from "./stockApi/routers/product.router";
import {stockRouter} from "./stockApi/routers/stock.router";
const historyRouter = require('../controllers/history.controller');



const app = express();
app.use(express.json());


app.use('/products', productRouter);
app.use('/stocks', stockRouter);
app.use('/history', historyRouter);

export default app;