const historyRepository = require('../repositories/history.repository');

class HistoryService {
    async createRecord(data) {
        return await historyRepository.createHistoryRecord(data);
    }

    async getRecords(filters, page = 1, pageSize = 10) {
        const offset = (page - 1) * pageSize;
        return await historyRepository.getHistoryRecords(filters, offset, pageSize);
    }
}

module.exports = new HistoryService();
