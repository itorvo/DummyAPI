const express = require('express')
const router = express.Router()
const countryController = require('../controllers/country.controller');

router.get('/', countryController.getAll);
router.get('/:id', countryController.get);
router.post('/', countryController.save);
router.patch('/:id', countryController.update);
router.delete('/:id', countryController.delete);

module.exports = router