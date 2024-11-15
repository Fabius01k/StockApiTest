import {Request, Response} from "express";
import {Product} from "../interfaces/interface.product";
import {CreateProductDto} from "../dto/product.dto";
import {ProductService} from "../services/product.service";


export class ProductController {
    constructor(
        protected productService: ProductService
    ) {
    }

    async createProduct(req: Request, res: Response) {
        const { plu, name } = req.body;
        const newBookBody = new CreateProductDto(plu, name)

        const newProduct: Product = await this.productService.createProduct(newBookBody)
        res.status(201).send(newProduct)
    }
}