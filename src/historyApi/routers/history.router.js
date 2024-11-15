const express = require('express');
const historyController = require('../controllers/history.controller');
const historyRouter = express.Router();

historyRouter.post('/', historyController.createRecord);
historyRouter.get('/', historyController.getRecords);

module.exports = historyRouter;