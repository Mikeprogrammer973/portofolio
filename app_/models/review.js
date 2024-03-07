
const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    client: {
        type: {
            photo: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        },
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review