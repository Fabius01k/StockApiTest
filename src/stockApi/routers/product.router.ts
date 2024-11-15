import {Router} from "express";
import {productController} from "../../composition-root";

export const productRouter = Router({})

productRouter.post('/',
    productController.createProduct.bind(productController))