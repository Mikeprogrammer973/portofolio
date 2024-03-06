const express = require('express')
const { webIndexView , notFound} = require('../controllers/web')
const { verifyToken, login, verifyLoginStatus } = require('../middlewares/auth')
const { adminIndexView, notAuth, admin_login_get, homeIndexView, aboutIndexView, experienceIndexView, homeUpdate, aboutUpdate } = require('../controllers/admin')
const { skillsIndexView, newSkill, skillUpdate, skillDelete } = require('../controllers/skill')

const router = express.Router()

// portofolio index
router.get('/', webIndexView)

// admin
router.get('/admin/dashboard', verifyLoginStatus, adminIndexView)
router.get('/admin/login', admin_login_get)
router.post('/admin/login', login)

router.get('/admin/home', verifyLoginStatus, homeIndexView)
router.post('/admin/home', verifyToken, homeUpdate)

router.get('/admin/about', verifyLoginStatus, aboutIndexView)
router.post('/admin/about', verifyToken, aboutUpdate)

router.get('/admin/skills', verifyLoginStatus, skillsIndexView)
router.post('/admin/skills/new', verifyToken, newSkill)
router.post('/admin/skills/edit', verifyToken, skillUpdate)
router.post('/admin/skills/delete', verifyToken, skillDelete)

router.get('/admin/experience', verifyLoginStatus, experienceIndexView)


router.get('/admin/page_not_auth', notAuth)

// page not found
router.get('/page_not_found', notFound)
router.get('*', (req, res)=>{
    res.redirect('/page_not_found')
})
router.post('*', (req, res)=>{
    res.redirect('/page_not_found')
})

// export
module.exports = router