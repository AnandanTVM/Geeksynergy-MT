const express = require('express');
const clientController = require('../controller/clientController');
const router = express.Router();
router.post('/clientLogin', clientController.clientLogin);
module.exports = router;
