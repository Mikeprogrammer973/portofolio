const { verify, sign } = require('jsonwebtoken')
const Admin = require('../models/admin')

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
            const decoded = verify(token, 'H90Jkk@hjuj#okk*jhh854&7')
            req.user = decoded
            if( 2 > 1) // comparaison avec la base de données
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

const verifyLogin = async (req, res, next)=>{
    global.msg.login.active = false
    const { access, password } = req.body
    const adm = await Admin.findOne({access: access, password: password})
    if(adm != null && (access == adm.access && password == adm.password))
    {
        global.logged = true
        adm.access = Math.round(Math.random()*1000000)
        adm.password = Math.round(Math.random()*1000000)
        adm.token = sign({access : adm.access}, process.env.TOKEN_SECRET)
        await adm.save()
        global.access.admin = adm.access
        res.redirect('/profile/admin/dashboard')
    }
    else
    {
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

module.exports =  {verifyToken, verifyLogin, verifyLoginStatus}