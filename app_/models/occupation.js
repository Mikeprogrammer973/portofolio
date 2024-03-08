
const mongoose = require('mongoose')

const OccupationSchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

const Occupation = mongoose.model('Occupation', OccupationSchema)

module.exports = Occupation