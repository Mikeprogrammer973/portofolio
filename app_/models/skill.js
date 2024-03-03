
const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    acquis: {
        type: Number,
        required: true
    },
    info: {
        type: String,
        required: true
    }
})

const Skill = mongoose.model('Skill', SkillSchema)

module.exports = Skill