import { DataTypes, Model } from 'sequelize';
import sequelize from "../../infrastructure/db";


class ProductEntity extends Model {
    public id!: string;
    public plu!: string;
    public name!: string;
}

ProductEntity.init(
    {
        id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
        plu: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
    },
    { sequelize, tableName: 'products', modelName: 'Product' }
);

export default ProductEntity;