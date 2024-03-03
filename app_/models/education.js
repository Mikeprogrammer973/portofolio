
const mongoose = require('mongoose')

const EducationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    date: {
        type: {
            start: {
                type: (Number | Date),
                required: true
            },
            end: {
                type: (Number | Date),
                required: true
            }
        },
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

const Education = mongoose.model('Education', EducationSchema)

module.exports = Education