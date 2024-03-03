
const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        required: true
    }
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project