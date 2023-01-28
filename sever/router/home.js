const express = require('express');
const homeControllers = require('../controller/homeController');
const router = express.Router();
router.post('/clientRegister', homeControllers.clientSignup);
module.exports = router;
