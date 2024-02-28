const express = require('express')
const { webIndexView , notFound} = require('../controllers/web')

const router = express.Router()

router.get('/', webIndexView)

router.get('/page_not_found', notFound)

module.exports = router