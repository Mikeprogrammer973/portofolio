const Admin = require("../models/admin")
const Education = require("../models/education")
const Occupation = require("../models/occupation")
const Project = require("../models/project")
const Review = require("../models/review")
const Skill = require("../models/skill")
const { sendMail } = require("../utils/mail")

const webIndexView = async (req, res)=>{
    Admin.findOne({key: process.env.ADM_KEY}).then(async (admin)=>{
        const educations = (await Education.find())
        const projects = (await Project.find())
        const reviews = (await Review.find())
        const skills = (await Skill.find())
        res.render('portofolio', {admin: admin, occupations: (await Occupation.find()), educations: educations, projects: projects, reviews: reviews, skills: skills})
    })
}

const contact = (req, res)=>{
    const { first, last, email, msg} = req.body
    const body__ = `
        <div style="padding: 20px;background-color: inherit;">
            <div style="background-color: whitesmoke; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; padding: 10px;color:white;">
            <p style="color: green; font-weight: bold;font-size: 1.5rem; padding: 5px;">Thank you very much for your message, ${first}; I will respond to you soon!</p>
            </div>
        </div>
    `
    const msg__ = `
        <div style="padding: 20px;background-color: inherit;">
            <div style="background-color: whitesmoke; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; padding: 10px;color:white;">
            <p style="color: green; font-weight: bold;font-size: 1.5rem; padding: 5px;">New message!</p>
            <p style="font-weight: bold; padding: 5px; color: darkgray; font-size: 1.2rem;">
                <strong>Name:</strong><span> ${first} ${last}</span>
                <br>
                <strong>Email:</strong><span> ${email}</span>
            </p>
            <div style="padding: 5px; border: 1px solid rgb(7, 47, 100); color: rgb(7, 47, 100); border-radius: 7px;margin: 10px auto;">
                <p style="font-weight: bold; padding: 5px; font-size: 1.2rem;">
                <strong>${msg}</strong>
                </p>
            </div>
            </div>
        </div>
    `
    sendMail(body__, email, 'Message received')
    sendMail(msg__, 'antiquesclub007@gmail.com', 'New message from your Portofolio')

    res.render('system_notice/msg_sent')
}

const notFound = (req, res)=>{
    res.render('system_notice/page_not_found', {})
}

module.exports = { webIndexView, notFound, contact }