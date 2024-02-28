const express = require('express')
const { webIndexView , notFound} = require('../controllers/web')

const router = express.Router()

router.get('/', webIndexView)

router.get('/page_not_found', notFound)
router.get('*', (req, res)=>{
    res.redirect('/page_not_found')
})
router.post('*', (req, res)=>{
    res.redirect('/page_not_found')
})

module.exports = router