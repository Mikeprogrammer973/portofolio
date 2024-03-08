const Education = require("../models/education");

const newEducation = async (req, res)=>{
    const { name, place, start, end, details } = req.body
    await (new Education({
        name: name,
        place: place,
        date: {start: start, end: end},
        details: details
    })).save()
    res.redirect('../experiences')
}

const educationUpdate = async (req, res)=>{
    const { name, place, start, end, details, id } = req.body
    const education = await Education.findOne({_id: id})
    education.name = name
    education.place = place
    education.date = {start: start, end: end}
    education.details = details
    await education.save()
    res.redirect('../experiences')
}

const educationDelete = async (req, res)=>{
    const { id } = req.body
    await Education.deleteOne({_id: id})
    res.redirect('../experiences')
}

module.exports = {
    newEducation,
    educationUpdate,
    educationDelete
}