import {Request, Response} from "express";

import {StockService} from "../services/stock.service";
import {StockFilters} from "../interfaces/interface.stock";
import {CreateStockDto} from "../dto/stock.dto";

export class StockController {
    constructor(protected stockService: StockService) {}

    async createStock(req: Request, res: Response) {
        const { productId, shopId, stockQuantity, orderQuantity } = req.body;
        const createStockDto = new CreateStockDto(productId, shopId, stockQuantity, orderQuantity);

        const newStock = await this.stockService.createStock(createStockDto);
        res.status(201).send(newStock);
    }

    async increaseStock(req: Request, res: Response) {
        const { stockId, amount } = req.body;

        const updatedStock = await this.stockService.increaseStock(stockId, amount);
        if (!updatedStock) return res.status(404).send({ message: 'Stock not found' });

        res.status(200).send(updatedStock);
    }

    async decreaseStock(req: Request, res: Response) {
        const { stockId, amount } = req.body;

        const updatedStock = await this.stockService.decreaseStock(stockId, amount);
        if (!updatedStock) return res.status(404).send({ message: 'Stock not found' });

        res.status(200).send(updatedStock);
    }

    async getStocks(req: Request, res: Response) {
        const { plu, shopId, stockQuantityMin, stockQuantityMax, orderQuantityMin, orderQuantityMax } = req.query;

        const filters: StockFilters = {
            plu: plu as string,
            shopId: shopId ? Number(shopId) : undefined,
            stockQuantityRange: stockQuantityMin && stockQuantityMax ? { min: Number(stockQuantityMin), max: Number(stockQuantityMax) } : undefined,
            orderQuantityRange: orderQuantityMin && orderQuantityMax ? { min: Number(orderQuantityMin), max: Number(orderQuantityMax) } : undefined,
        };

        const stocks = await this.stockService.getStocks(filters);
        res.status(200).send(stocks);
    }
}