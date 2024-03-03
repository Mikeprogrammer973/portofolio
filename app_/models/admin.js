
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
    },
    contact: {
        type: {
            emails: {
                type: [],
                required: true
            },
            tels: {
                type: [],
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
                type: {
                    icon: {
                        type: String,
                        required: true
                    },
                    uri: {
                        type: String,
                        required: true
                    }
                }
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
            },
            occupation: {
                type: {
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