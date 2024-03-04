const Admin = require("../models/admin")

const webIndexView = async (req, res)=>{
    Admin.findOne({key: process.env.ADM_KEY}).then((admin)=>{
        res.render('portofolio', {admin: (admin != null ? admin : {})})
    })
}

const notFound = (req, res)=>{
    res.render('system_notice/page_not_found', {})
}

module.exports = { webIndexView, notFound }