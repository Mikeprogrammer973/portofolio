const Admin = require("../models/admin")
const Occupation = require("../models/occupation")

const webIndexView = async (req, res)=>{
    Admin.findOne({key: process.env.ADM_KEY}).then(async (admin)=>{
        res.render('portofolio', {admin: (admin != null ? admin : {}), occupations: (await Occupation.find())})
    })
}

const notFound = (req, res)=>{
    res.render('system_notice/page_not_found', {})
}

module.exports = { webIndexView, notFound }