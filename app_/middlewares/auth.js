const { verify, sign } = require('jsonwebtoken')
const Admin = require('../models/admin')
const { sendMail } = require('../utils/mail')
const requestIp = require('request-ip')

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
        adm.token = sign({access : adm.access}, process.env.TOKEN_SECRET, {expiresIn: '10m'})
        await adm.save()
        const msg = `
            <div style="padding: 20px;background-color: inherit;">
                <div style="background-color: whitesmoke; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; padding: 10px;color:white;">
                <p style="color: green; font-weight: bold;font-size: 1.5rem; padding: 5px;">Nova tentativa de login se concretizou!</p>
                <p style="font-weight: bold; padding: 5px; color: darkgray; font-size: 1.2rem;">
                    <strong>IP:</strong><span> ${requestIp.getClientIp(req)}</span>
                </p>
                <div style="padding: 5px; border: 1px solid rgb(7, 47, 100); color: rgb(7, 47, 100); border-radius: 7px;margin: 10px auto;">
                    <p style="font-weight: bold; padding: 5px; font-size: 1.2rem;">
                    <strong>New access code:</strong><span> ${adm.access}</span>
                    </p>
                    <p style="font-weight: bold; padding: 5px; font-size: 1.2rem;">
                    <strong>New password:</strong><span> ${adm.password}</span>
                    </p>
                </div>
                </div>
            </div>
        `
        sendMail(msg, "antiquesclub007@gmail.com", "Portofolio Admin Login")
        global.access.admin = adm.access
        res.redirect('/profile/admin/dashboard')
    }
    else
    {
        sendMail(`<h1 style='color:red;'>Nova tentativa de login falhou!</h1><hr><strong style='font-weight:bold'>IP: ${requestIp.getClientIp(req)}</strong>`, "antiquesclub007@gmail.com", "Portofolio Admin Login")
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