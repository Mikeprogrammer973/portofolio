const express = require('express')
const app = express()
const path = require('path')
const web = require('./routes/web')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'assets')))

app.use('/profile', web)

app.get('*', (req, res)=>{
    res.redirect('profile/page_not_found')
})
app.post('*', (req, res)=>{
    res.redirect('profile/page_not_found')
})

app.listen(3000 || process.env.PORT, ()=>{
    console.log(`Server listening...`)
})