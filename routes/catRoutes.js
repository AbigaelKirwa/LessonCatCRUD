const express = require('express')
const router = express.Router()
const catController = require('../controllers/catController')

router.post('/', catController.create)
router.get('/', catController.read)
router.put('/:id', catController.update)
router.delete('/:id', catController.delete)

module.exports = router