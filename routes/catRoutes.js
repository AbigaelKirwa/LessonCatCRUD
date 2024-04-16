const express = require('express')
const router = express.Router()
const catController = require('../controllers/catController')

router.get('/', catController.read)

module.exports = router