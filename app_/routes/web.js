const express = require('express')
const { webIndexView , notFound} = require('../controllers/web')
const { verifyToken, login, verifyLoginStatus } = require('../middlewares/auth')
const { adminIndexView, notAuth, admin_login_get, homeIndexView, aboutIndexView, experiencesIndexView, homeUpdate, aboutUpdate } = require('../controllers/admin')
const { skillsIndexView, newSkill, skillUpdate, skillDelete } = require('../controllers/skill')
const { newEducation, educationUpdate, educationDelete } = require('../controllers/education')
const { newProject, projectUpdate, projectDelete } = require('../controllers/project')
const { reviewForm, newReview, reviewSuccess, reviewDashboard, reviewUpdate, reviewDelete } = require('../controllers/review')

const router = express.Router()

// portofolio 
router.get('/', webIndexView)

router.get('/review/new', reviewForm)
router.post('/review/new', newReview)
router.get('/review/:review_id/manage', reviewDashboard)
router.post('/review/update', reviewUpdate)
router.post('/review/delete', reviewDelete)

// admin
router.get('/admin/dashboard', verifyLoginStatus, adminIndexView)
router.get('/admin/login', admin_login_get)
router.post('/admin/login', login)

router.get('/admin/home', verifyLoginStatus, homeIndexView)
router.post('/admin/home', verifyToken, homeUpdate)

router.get('/admin/about', verifyLoginStatus, aboutIndexView)
router.post('/admin/about', verifyToken, aboutUpdate)

router.get('/admin/skills', verifyLoginStatus, skillsIndexView)
router.post('/admin/skill/new', verifyToken, newSkill)
router.post('/admin/skill/edit', verifyToken, skillUpdate)
router.post('/admin/skill/delete', verifyToken, skillDelete)

router.get('/admin/experiences', verifyLoginStatus, experiencesIndexView)
router.post('/admin/experiences/new_education', verifyToken, newEducation)
router.post('/admin/experiences/education_update', verifyToken, educationUpdate)
router.post('/admin/experiences/education_delete', verifyToken, educationDelete)
router.post('/admin/experiences/new_project', verifyToken, newProject)
router.post('/admin/experiences/project_update', verifyToken, projectUpdate)
router.post('/admin/experiences/project_delete', verifyToken, projectDelete)


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