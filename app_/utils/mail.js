
const { createTransport } = require('nodemailer')

function sendMail(msg, to, subject)
{
    const transporter = createTransport({
        service: 'gmail',
        auth: {
          user: "technopro.net@gmail.com",
          pass: "izitpmewujjnxutj"
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
                from: 'Mike D. Pascal technopro.net@gmail.com',
                to: to,
                subject: subject,
                html: msg,
                plain: msg
              
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