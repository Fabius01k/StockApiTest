import {ProductRepository} from "./stockApi/repositories/product.repository";
import {ProductService} from "./stockApi/services/product.service";
import {StockService} from "./stockApi/services/stock.service";
import {StockRepository} from "./stockApi/repositories/stock.repository";
import {ProductController} from "./stockApi/controllerts/product.controller";
import {StockController} from "./stockApi/controllerts/stock.controllet";


export const productRepository = new ProductRepository()
export const productService = new ProductService(productRepository)
export const productController = new ProductController(productService)

export const stockRepository = new StockRepository();
export const stockService = new StockService(stockRepository);
export const stockController = new StockController(stockService);