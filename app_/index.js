const express = require('express')
const app = express()
const path = require('path')
const { indexView } = require('./controllers/portofolio')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'assets')))

app.get('*', indexView)

app.listen(3000, ()=>{
    console.log(`Server listening...`)
})