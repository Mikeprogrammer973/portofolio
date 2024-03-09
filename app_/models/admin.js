
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
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
    },
    contact: {
        type: {
            email: {
                type: String,
                required: true
            },
            tel: {
                type: String,
                required: true
            },
            address: {
                type: {
                    short: {
                        type: String,
                        required: true
                    },
                    long: {
                        type: String,
                        required: true
                    }
                },
                required: true
            },
            socials: {
                type: [{
                    icon: {
                        type: [],
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
                }]
            }
        },
        required: true
    },
    profile: {
        type: {
            name: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            salut: {
                type: String
            },
            photo: {
                type: String,
                required: true
            },
            about: {
                type: {
                    icon: {
                        type: String
                    },
                    content: {
                        type: String,
                        required: true
                    }
                }
            }
        },
        required: true
    },
    navigation: {
        type: {
            menu: {
                type: [],
                required: true
            },
            sections: {
                type: [],
                required: true
            }
        }
    }
})

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin