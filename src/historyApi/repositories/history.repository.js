const {Op} = require("sequelize");
const History = require('../entities/history.entity.ts');


class HistoryRepository {
    async createHistoryRecord(record) {
        return await History.create(record);
    }

    async getHistoryRecords(filters, offset = 0, limit = 10) {
        const where = {};

        if (filters.shop_id) where.shop_id = filters.shop_id;
        if (filters.plu) where.plu = filters.plu;
        if (filters.action) where.action = filters.action;
        if (filters.date_from && filters.date_to) {
            where.date = {
                [Op.between]: [filters.date_from, filters.date_to],
            };
        }

        return await History.findAndCountAll({
            where,
            offset,
            limit,
        });
    }
}

module.exports = new HistoryRepository();