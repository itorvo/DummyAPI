const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/dummy.controller');

// Retrieve all employees
router.get('/', employeeController.get);

module.exports = router