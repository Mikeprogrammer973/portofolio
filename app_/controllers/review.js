const formidable = require("formidable");
const Review = require("../models/review");
const { readFileSync } = require("fs");
const { sendMail } = require("../utils/mail");

const reviewForm = (req, res)=>{
    res.render('review/form')
}

const reviewDashboard = async (req, res)=>{
    const review = await Review.findOne({_id: req.params.review_id})
    if(review != null)
    {
       res.render('review/dashboard', { review: review }) 
    }else{
        res.render('system_notice/route_not_auth')
    }
}

const newReview = async (req, res)=>{
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files)=>{
        if(err) throw err
        const review = new Review({
            client: {
                name: fields.name[0],
                email: fields.email[0],
                photo: {
                    tipo: files.photo[0].mimetype,
                    data: readFileSync(files.photo[0].filepath,'base64')
                }
            },
            content: fields.content[0],
            status: 0
        })
        await review.save()

        const msg = `http://localhost:3000/profile/review/${review._id}/manage`
        sendMail(msg, review.client.email, "Manage your review")

        res.render('review/add_success')
    })
}

const reviewUpdate = async (req, res)=>{

    const form = new formidable.IncomingForm({allowEmptyFiles: true, minFileSize: 0})
    form.parse(req, async (err, fields, files)=>{
        if(err) throw err
        const review = await Review.findOne({_id: fields.id[0]})

        review.client.name = fields.name[0]
        review.client.email = fields.email[0]
        if(files.photo[0].size > 0)
        {
            review.client.photo = {
                tipo: files.photo[0].mimetype,
                data: readFileSync(files.photo[0].filepath,'base64')
            }
        }
        review.content = fields.content[0]
        review.status = 0

        await review.save()
        

        res.redirect(`http://localhost:3000/profile/review/${review._id}/manage`)
    })

}

const reviewDelete = async (req, res)=>{
    const { id } = req.body

    await Review.deleteOne({_id: id})

    res.render('review/delete_success')
}

module.exports = {
    reviewForm,
    newReview,
    reviewDashboard,
    reviewUpdate,
    reviewDelete
}