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
    if(!global.logged)
    {
        res.redirect('/profile/admin/login')
    }
    else
    {
        next()
    }
}

module.exports =  {verifyToken, verifyLogin}