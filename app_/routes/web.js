const express = require('express')
const { webIndexView } = require('../controllers/web')

const router = express.Router()

router.get('/', webIndexView)

module.exports = router