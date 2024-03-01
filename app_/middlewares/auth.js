const { verify } = require('jsonwebtoken')

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
    if(req.body.access == "123" && req.body.password == "000")
    {
        global.logged = true
        global.access.admin = req.body.access
        res.redirect('/profile/admin/dashboard') 
    }
    else
    {
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
        if(global.access.admin == "123") // comparaison avec la base de données
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