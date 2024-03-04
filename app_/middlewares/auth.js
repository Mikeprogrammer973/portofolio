const { verify, sign } = require('jsonwebtoken')
const Admin = require('../models/admin')
const { sendMail } = require('../utils/mail')

const verifyToken = async (req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if(!token)
    {
        res.redirect('/profile/admin/login')
    }
    else
    {
        try
        {
            const decoded = verify(token, process.env.TOKEN_SECRET)
            req.user = decoded
            if((await Admin.findOne({access: req.user["access"]})) != null) // comparaison avec la base de données
            {
                next()
            }
            else
            {
                res.redirect('/profile/admin/login')
            }
        }
        catch(e)
        {
            res.redirect('/profile/admin/login')
        }
    }
}

const login = async (req, res, next)=>{
    global.msg.login.active = false
    const { access, password } = req.body
    const adm = await Admin.findOne({access: access, password: password})
    if(adm != null && (access == adm.access && password == adm.password))
    {
        global.logged = true
        adm.access = Math.round(Math.random()*100000000000)
        adm.password = Math.round(Math.random()*100000000000)
        adm.token = sign({access : adm.access}, process.env.TOKEN_SECRET)
        await adm.save()
        sendMail(`<h1 style='color:green;'>Nova tentativa de login se concretizou!</h1><hr><strong style='font-weight:bold'>IP: ${req.socket.remoteAddress}</strong><hr><p><strong style='font-weight:bold'>Novo código de acesso:</strong> ${adm.access}</p><p><strong style='font-weight:bold'>Nova palavra-passe:</strong> ${adm.password}</p>`, "antiquesclub007@gmail.com", "Portofolio Admin Login")
        global.access.admin = adm.access
        res.redirect('/profile/admin/dashboard')
    }
    else
    {
        sendMail(`<h1 style='color:red;'>Nova tentativa de login falhou!</h1><hr><strong style='font-weight:bold'>IP: ${req.socket.remoteAddress}</strong>`, "antiquesclub007@gmail.com", "Portofolio Admin Login")
        global.msg.login.active = true
        res.redirect('/profile/admin/login')
    }
}

const verifyLoginStatus = async (req, res, next)=>{
    if(!global.logged)
    {
        res.redirect('/profile/admin/login')
    }
    else
    {
        const adm = await Admin.findOne({access: global.access.admin})
        if(adm != null) // comparaison avec la base de données
        {
            next()
        }
        else
        {
            res.redirect('/profile/admin/page_not_auth')
        }
    }
}

module.exports =  {verifyToken, login, verifyLoginStatus}