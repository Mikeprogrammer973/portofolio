
const { createTransport } = require('nodemailer')

function sendMail(msg, to, subject)
{
    const transporter = createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
    })

    transporter.verify((err, success)=>{
        if(err)
        {
            throw err
        }
        else
        {
            const mailOptions = {
                from: 'Portofólio technopro.net@gmail.com',
                to: to,
                subject: subject,
                html: msg
              
            } 
            transporter.sendMail(mailOptions, (err, info)=>{
                if(err)
                {
                    throw err
                }
            })
        }
    })
}

module.exports = {sendMail}