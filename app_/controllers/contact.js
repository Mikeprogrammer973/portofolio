

const contactIndexView = (req, res)=>{
    res.render('contact/index', {access: global.access})
}

module.exports = { contactIndexView }