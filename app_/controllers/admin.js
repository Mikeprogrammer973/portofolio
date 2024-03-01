const formidable = require('formidable')

const adminIndexView = (req, res)=>{
    res.render('admin/dashboard', {})
}

const admin_login_get = (req, res)=>{
    global.logged = false
    global.access.admin = null
    res.render('admin/login', { msg: global.msg.login })
}

const notAuth = (req, res)=>{
    res.render('system_notice/route_not_auth')
}

module.exports = { adminIndexView, notAuth, admin_login_get }