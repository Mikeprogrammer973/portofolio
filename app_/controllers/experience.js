
const experienceIndexView = (req, res)=>{
    res.render('experience/index', {access: global.access})
}

module.exports = { experienceIndexView }