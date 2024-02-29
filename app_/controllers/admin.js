
const adminIndexView = (req, res)=>{
    res.render('admin/dashboard', {})
}

const admin_login_get = (req, res)=>{
    res.render('admin/login', {})
}

const admin_login_post = (req, res)=>{
    
}

const notAuth = (req, res)=>{
    res.render('admin/page_not_auth')
}

module.exports = { adminIndexView, notAuth, admin_login_get, admin_login_post }