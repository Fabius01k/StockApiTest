const historyService = require('../services/history.service');

class HistoryController {
    async createRecord(req, res) {
        try {
            const record = await historyService.createRecord(req.body);
            res.status(201).json(record);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getRecords(req, res) {
        try {
            const { shop_id, plu, date_from, date_to, action, page, pageSize } = req.query;
            const filters = { shop_id, plu, date_from, date_to, action };
            const records = await historyService.getRecords(filters, page, pageSize);
            res.status(200).send(records);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

module.exports = new HistoryController();