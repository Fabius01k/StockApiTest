import StockEntity from "../entities/stock.entity";
import {Op} from "sequelize";
import ProductEntity from "../entities/product.entity";
import {StockFilters} from "../interfaces/interface.stock";

export class StockRepository {

    async createStock(newStock: StockEntity) {
        const stock = await StockEntity.create(newStock);
        return stock;
    }

    async updateStockQuantity(stockId: number, delta: number): Promise<StockEntity | null> {
        const stock = await StockEntity.findByPk(stockId);
        if (!stock) return null;

        stock.stock_quantity += delta;
        await stock.save();

        return stock;
    }

    async findStocks(filters: StockFilters): Promise<StockEntity[]> {
        const whereClause: any = {};
        if (filters.plu) {
            whereClause['$product.plu$'] = filters.plu;
        }
        if (filters.shopId) {
            whereClause.shop_id = filters.shopId;
        }
        if (filters.stockQuantityRange) {
            whereClause.stock_quantity = {
                [Op.between]: [filters.stockQuantityRange.min, filters.stockQuantityRange.max],
            };
        }
        if (filters.orderQuantityRange) {
            whereClause.order_quantity = {
                [Op.between]: [filters.orderQuantityRange.min, filters.orderQuantityRange.max],
            };
        }

        return await StockEntity.findAll({
            where: whereClause,
            include: [{ model: ProductEntity, as: 'product' }],
        });
    }
}