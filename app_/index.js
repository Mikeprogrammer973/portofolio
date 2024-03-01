const express = require('express')
const mongoose = require('mongoose');
const app = express()
const path = require('path')
const web = require('./routes/web')
const dotenv = require("dotenv");

dotenv.config();

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database)
.then(() => console.log('e don connect'))
.catch(err => console.log(err));

global.logged = false
global.token = null
global.msg = { login: { active: false, content: "Access code or password wrong!" } }
global.access = { admin: null, home: null, contact: null, about: null, experience: null, project: null, skills: null, review: null }

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'assets')))

app.use(express.urlencoded({extended: true}))

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