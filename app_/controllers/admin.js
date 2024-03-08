const formidable = require('formidable')
const Admin = require('../models/admin')
const Education = require('../models/education')
const Project = require('../models/project')
const Review = require('../models/review')

const admin = ()=>{ return Admin.findOne({access: global.access.admin})}

const adminIndexView = (req, res)=>{
    res.render('admin/dashboard', {})
}

const aboutIndexView = (req, res)=>{
    admin().then(admin => {
        res.render('about/index', {admin: admin})
    }).catch(err =>{
        res.send(err)
    })
}
const aboutUpdate = async (req, res)=>{
    const { icon, content } = req.body
    const adm = await admin()
    adm.profile.about.icon = icon
    adm.profile.about.content = content
    await adm.save()
    res.redirect('about')
}

const homeIndexView = (req, res)=>{
    admin().then(admin => {
        res.render('home/index', {admin: admin})
    }).catch(err =>{
        res.send(err)
    })
}
const homeUpdate = async (req, res)=>{
    const { photo, salut, name, title, fb_icon_light, fb_icon_dark, fb_social_name, fb_social_uri, insta_icon_light, insta_icon_dark, insta_social_name, insta_social_uri, git_icon_light, git_icon_dark, git_social_name, git_social_uri, tel_icon_light, tel_icon_dark, tel_social_name, tel_social_uri, address_short, address_long, email, tel } = req.body
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
    adm.contact.tel = tel
    adm.contact.email = email
    adm.contact.address = { short: address_short, long: address_long }
    await adm.save()
    res.redirect('home')
}

const experiencesIndexView = async (req, res)=>{
    const token = (await admin()).token
    const educations = (await Education.find())
    const projects = (await Project.find())
    const reviews = (await Review.find())
    res.render('experience/index', {token: token, educations: educations, projects: projects, reviews: reviews})
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
    experiencesIndexView,
    homeIndexView,
    homeUpdate,
    aboutUpdate
}