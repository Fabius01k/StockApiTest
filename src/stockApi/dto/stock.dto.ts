export class CreateStockDto {
    productId: string;
    shopId: number;
    stockQuantity: number;
    orderQuantity: number;

    constructor(productId: string, shopId: number, stockQuantity: number = 0, orderQuantity: number = 0) {
        this.productId = productId;
        this.shopId = shopId;
        this.stockQuantity = stockQuantity;
        this.orderQuantity = orderQuantity;
    }
}