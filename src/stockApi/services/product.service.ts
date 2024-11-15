import {ProductRepository} from "../repositories/product.repository";
import {Product} from "../interfaces/interface.product";
import {CreateProductDto} from "../dto/product.dto";
import { v4 as uuidv4 } from 'uuid';

export class ProductService {

    constructor(protected productRepository: ProductRepository
    ) {
    }

    async createProduct(newProductBody: CreateProductDto): Promise<Product> {
        const newProduct: Product = {
            id: uuidv4(),
            plu: newProductBody.plu,
            name: newProductBody.name,
        };

        return await this.productRepository.createProduct(newProduct)
    }
}