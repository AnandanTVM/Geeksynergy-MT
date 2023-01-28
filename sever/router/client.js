const express = require('express');
const clientController = require('../controller/clientController');
const auth = require('../middleware/authuser');

const router = express.Router();
router.post('/clientLogin', clientController.clientLogin);
router.get('/getProfile', auth.Clientprotect, clientController.getProfile);
module.exports = router;
