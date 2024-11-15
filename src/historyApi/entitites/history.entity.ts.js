const { DataTypes } = require('sequelize');
import sequelize from "../../infrastructure/db/db";


const History = sequelize.define('History', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    plu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'history',
    timestamps: false,
});

module.exports = History;