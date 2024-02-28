
const webIndexView = (req, res)=>{
    res.render('portofolio', {colors: "#000"})
}

const notFound = (req, res)=>{
    res.render('system_notice/page_not_found', {})
}

module.exports = { webIndexView, notFound }