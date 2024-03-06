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
const homeUpdate = async (req, res)=>{
    const { photo, salut, name, title, fb_icon_light, fb_icon_dark, fb_social_name, fb_social_uri, insta_icon_light, insta_icon_dark, insta_social_name, insta_social_uri, git_icon_light, git_icon_dark, git_social_name, git_social_uri, tel_icon_light, tel_icon_dark, tel_social_name, tel_social_uri, } = req.body
    const adm = await admin()
    adm.profile.photo = photo
    adm.profile.salut = salut
    adm.profile.name = name
    adm.profile.title = title
    adm.contact.socials = [
        { name: fb_social_name, icon: [fb_icon_light, fb_icon_dark], uri: fb_social_uri },
        { name: insta_social_name, icon: [insta_icon_light, insta_icon_dark], uri: insta_social_uri },
        { name: git_social_name, icon: [git_icon_light, git_icon_dark], uri: git_social_uri },
        { name: tel_social_name, icon: [tel_icon_light, tel_icon_dark], uri: tel_social_uri }
    ]
    await adm.save()
    res.redirect('home')
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

module.exports = { 
    adminIndexView, 
    notAuth, 
    admin_login_get,
    aboutIndexView,
    contactIndexView,
    experienceIndexView,
    homeIndexView,
    skillsIndexView,
    homeUpdate 
}