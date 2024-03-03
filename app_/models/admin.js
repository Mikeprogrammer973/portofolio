
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    access: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
    // about: {
    //     type: String
    // }
    // home: {
    //     type: String
    // }
})

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin