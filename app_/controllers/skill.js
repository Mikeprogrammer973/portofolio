const Skill = require('../models/skill')
const Admin = require('../models/admin')

const admin = ()=>{ return Admin.findOne({access: global.access.admin})}


const skillsIndexView = (req, res)=>{
    Skill.find().then(async (skills) =>{
        res.render('skills/index', { skills: skills, token: (await admin()).token })
    }).catch(err =>{
        res.send(err)
    })
}

const newSkill = async (req, res)=>{
    const { name, acquis, info } = req.body
    let skill = new Skill({
        name: name,
        acquis: Number(acquis),
        info: info
    })
    await skill.save()
    res.redirect('../../admin/skills')
}

const skillUpdate = async (req, res)=>{
    const { name, acquis, id, info } = req.body
    let skill = await Skill.findOne({_id: id})
    skill.name = name
    skill.acquis = Number(acquis)
    skill.info = info
    await skill.save()
    res.redirect('../../admin/skills')
}

const skillDelete = async (req, res)=>{
    const { id } = req.body
    await Skill.deleteOne({_id: id})
    res.redirect('../../admin/skills')
}

module.exports = {
    skillsIndexView,
    newSkill,
    skillUpdate,
    skillDelete
}