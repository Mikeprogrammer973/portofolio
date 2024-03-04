const formidable = require('formidable')

const adminIndexView = (req, res)=>{
    res.render('admin/dashboard', {access: global.access})
}

const aboutIndexView = (req, res)=>{
    res.render('about/index', {access: global.access})
}

const homeIndexView = (req, res)=>{
    res.render('home/index', {access: global.access})
}

const contactIndexView = (req, res)=>{
    res.render('contact/index', {access: global.access})
}

const experienceIndexView = (req, res)=>{
    res.render('experience/index', {access: global.access})
}

const skillsIndexView = (req, res)=>{
    res.render('skills/index', {access: global.access})
}

const admin_login_get = (req, res)=>{
    global.logged = false
    global.access.admin = null
    res.render('admin/login', { msg: global.msg.login })
}

const notAuth = (req, res)=>{
    res.render('system_notice/route_not_auth')
}

module.exports = { adminIndexView, notAuth, admin_login_get, aboutIndexView, contactIndexView, experienceIndexView, homeIndexView, skillsIndexView }