const Project = require("../models/project");

const newProject = async (req, res)=>{
    const { logo, name, visit_link } = req.body

    await (new Project({
        name: name,
        logo: logo,
        uri: visit_link
    })).save()

    res.redirect('../experiences')
}

const projectUpdate = async (req, res)=>{
    const { id, logo, name, visit_link } = req.body
    const project = await Project.findOne({_id: id})

    project.name = name
    project.logo = logo
    project.uri = visit_link

    await project.save()

    res.redirect('../experiences')
}

const projectDelete = async (req, res)=>{
    const { id } = req.body

    await Project.deleteOne({_id: id})

    res.redirect('../experiences')
}

module.exports = {
    newProject,
    projectUpdate,
    projectDelete
}

