export type StockFilters = {
    plu?: string;
    shopId?: number;
    stockQuantityRange?: { min: number; max: number };
    orderQuantityRange?: { min: number; max: number };
};