const express = require('express')
const router = express.Router()
const dummyController = require('../controllers/dummy.controller');

router.get('/', dummyController.get);

module.exports = router