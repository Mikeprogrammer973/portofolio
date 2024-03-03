
const homeIndexView = (req, res)=>{
    res.render('home/index', {access: global.access})
}

module.exports = { homeIndexView }