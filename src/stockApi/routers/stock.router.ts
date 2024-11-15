import {Router} from "express";
import {stockController} from "../../composition-root";

export const stockRouter = Router();

stockRouter.post('/', stockController.createStock.bind(stockController));
stockRouter.post('/increase', stockController.increaseStock.bind(stockController));
stockRouter.post('/decrease', stockController.decreaseStock.bind(stockController));
stockRouter.get('/', stockController.getStocks.bind(stockController));