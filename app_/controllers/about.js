

const aboutIndexView = (req, res)=>{
    res.render('about/index', {access: global.access})
}

module.exports = { aboutIndexView }