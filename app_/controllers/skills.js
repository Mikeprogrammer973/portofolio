

const skillsIndexView = (req, res)=>{
    res.render('skills/index', {access: global.access})
}

module.exports = { skillsIndexView }