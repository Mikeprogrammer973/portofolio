
const indexView = (req, res)=>{
    res.render('index', {colors: "#000"})
}

module.exports = { indexView }