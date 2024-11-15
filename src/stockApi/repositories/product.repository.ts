import {Product} from "../interfaces/interface.product";
import ProductEntity from "../entities/product.entity";

export class ProductRepository {

    async createProduct(newProduct: Product): Promise<Product> {
        const product = await ProductEntity.create({
            data: newProduct,
        });
        return product;
    }
}