
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const Admin = require('./models/admin');

dotenv.config();

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database)
.then(async () => {

    const adm = new Admin({
        access: "000",
        password: "000",
        token: "000",
        contact: {
            emails: ["mikepascal.delta@gmail.com", "antiquesclub007@gmail.com"],
            tels: ["+1 514-299-8184"],
            address: {
                short: "Montreal, Canada",
                long: "9199, Rue Airlie, Lasalle, Montréal QC"
            },
            socials: [
                {
                    icon: ["https://www.pngfind.com/pngs/b/57-579617_facebook-logo-circle-black-transparent-social-media-icons.png", "https://static.vecteezy.com/system/resources/previews/023/741/223/non_2x/facebook-logo-icon-social-media-icon-free-png.png"],
                    name: "Facebook",
                    uri: "https://www.facebook.com/mike.pascal.967?mibextid=ZbWKwL"
                    
                },
                {
                    icon: ["https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg", "https://static.vecteezy.com/system/resources/previews/023/986/514/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"],
                    name: "Instagram",
                    uri: "https://www.instagram.com/mike9_73?igsh=MXF0OWc5NDJmdDRwZg=="
                },
                {
                    icon: ["https://cdn-icons-png.flaticon.com/512/25/25231.png", "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png"],
                    name: "GitHub",
                    uri: "https://github.com/Mikeprogrammer973"
                },
                {
                    icon: ["https://pngimg.com/d/telegram_PNG17.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"],
                    name: "Telegram",
                    uri: "https://t.me/mikeprogrammer973"
                }
            ]
        },
        profile: {
            name: "Mike D. Pascal",
            title: "Web Developer",
            salut: "Hello, I'm",
            photo: "./imgs/foto-perfil-mike.png",
            about: {
                icon: "https://cdn-icons-png.flaticon.com/512/10438/10438224.png",
                content: "I am an highly motivated and detail-oriented web developer with over 2 years of experience in developing responsive websites and applications. I love to work in groups where everyone can voice their opinions and ideas."
            },
            occupation: [
                {
                    icon: "https://www.shareicon.net/download/2015/10/06/112788_design_512x512.png",
                    name: "UI UX Design",
                    details: "Seamless and meaningful user experience, intuitive and aesthetically-pleasing interfaces and interactive elements."
                },
                {
                    icon: "https://cdn-icons-png.freepik.com/512/9517/9517119.png",
                    name: "Web Development",
                    details: "From developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
                },
                {
                    icon: "https://cdn0.iconfinder.com/data/icons/elpis/144/App_Development-512.png",
                    name: "App Development",
                    details: "Software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems."
                }
            ]
        },
        navigation: {
            menu: ["Home", "About", "Skills", "Experiences", "Contact"],
            sections: ["About me", "What I do", "Technical Skills", "Education", "Projects", "Client Reviews", "Leave a review", "Contact me"]
        }
    })

    await adm.save()

    console.log("Admin inserted successfully!")

})
.catch(err => console.log(err));

