const formidable = require('formidable')
const Admin = require('../models/admin')

const admin = ()=>{ return Admin.findOne({access: global.access.admin})}

const adminIndexView = (req, res)=>{
    res.render('admin/dashboard', {})
}

const aboutIndexView = (req, res)=>{
    res.render('about/index', {access: global.access})
}

const homeIndexView = (req, res)=>{
    admin().then(admin => {
        res.render('home/index', {admin: admin})
    }).catch(err =>{
        res.send(err)
    })
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