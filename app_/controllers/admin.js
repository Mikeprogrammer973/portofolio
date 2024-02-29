
const adminIndexView = (req, res)=>{
    res.render('admin/dashboard', {})
}

const admin_login_get = (req, res)=>{
    if(!global.logged)
    {
        res.render('admin/login', {})
    }
    res.redirect('dashboard')
}

const admin_login_post = (req, res)=>{
    console.log(req)
    global.logged = true
    res.redirect('dashboard')
}

const notAuth = (req, res)=>{
    res.render('system_notice/route_not_auth')
}

module.exports = { adminIndexView, notAuth, admin_login_get, admin_login_post }