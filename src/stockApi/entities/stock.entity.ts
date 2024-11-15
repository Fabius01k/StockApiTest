import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../infrastructure/db';

interface StockAttributes {
    id: number;
    product_id: string;
    shop_id: number;
    stock_quantity: number;
    order_quantity: number;
}

interface StockCreationAttributes extends Optional<StockAttributes, 'id'> {}

class StockEntity extends Model<StockAttributes, StockCreationAttributes> implements StockAttributes {
    public id!: number;
    public product_id!: string;
    public shop_id!: number;
    public stock_quantity!: number;
    public order_quantity!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

StockEntity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        shop_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        order_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        modelName: 'Stock',
        tableName: 'stocks',
    }
);

export default StockEntity;