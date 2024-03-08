const Occupation = require("../models/occupation");

const newOccupation = async (req, res)=>{
    const { icon, name, details } = req.body

    await (new Occupation({
        name: name,
        icon: icon,
        details: details
    })).save()

    res.redirect('../about')
}

const occupationUpdate = async (req, res)=>{
    const { id, icon, name, details } = req.body
    const occupation = await Occupation.findOne({_id: id})

    occupation.name = name
    occupation.icon = icon
    occupation.details = details

    await occupation.save()

    res.redirect('../about')
}

const occupationDelete = async (req, res)=>{
    const { id } = req.body

    await Occupation.deleteOne({_id: id})

    res.redirect('../about')
}

module.exports = {
    newOccupation,
    occupationUpdate,
    occupationDelete
}
