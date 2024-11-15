import {StockRepository} from "../repositories/stock.repository";
import {CreateStockDto} from "../dto/stock.dto";
import StockEntity from "../entities/stock.entity";
import {StockFilters} from "../interfaces/interface.stock";

export class StockService {
    constructor(protected stockRepository: StockRepository) {}

    async createStock(createStockDto: CreateStockDto): Promise<StockEntity> {
        const newStock = {
            product_id: createStockDto.productId,
            shop_id: createStockDto.shopId,
            stock_quantity: createStockDto.stockQuantity,
            order_quantity: createStockDto.orderQuantity,
        };

        return await this.stockRepository.createStock(newStock);
    }

    async increaseStock(stockId: number, amount: number): Promise<StockEntity | null> {
        return await this.stockRepository.updateStockQuantity(stockId, amount);
    }

    async decreaseStock(stockId: number, amount: number): Promise<StockEntity | null> {
        return await this.stockRepository.updateStockQuantity(stockId, -amount);
    }

    async getStocks(filters: StockFilters): Promise<StockEntity[]> {
        return await this.stockRepository.findStocks(filters);
    }
}