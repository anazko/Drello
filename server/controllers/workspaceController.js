const ApiError = require('../error/ApiError')
const { Workspace } = require('../models/models')

class WorkspaceController {

  async getAll(req, res, next) {
    console.log('All workspaces')
    const workspaces = await Workspace.findAll()
    if (!workspaces) return res.status(404).json({ message: "Рабочие пространства не найдены" })
    res.status(200).json(workspaces)
  }

  async getOne(req, res, next) {
    const {id} = req.params
    const workspace = await Workspace.findOne({ where: {id} })
    if (!workspace) return res.status(404).json({ message: `Рабочее пространство с id=${id} не найдено` })
    return res.status(200).json(workspace)
  }

  async update(req, res, next) {
    const {id} = req.params
    console.log(req.body)
    console.log(id)
    try {
      const workspace = await Workspace.update(req.body, { where: {id} })
      return await res.status(200).json(workspace)
    }
    catch (e) {
      console.log(e.message)
      return res.json({updated: id})
    }
  }

  async delete(req, res, next) {
    const {id} = req.params
    try {
      await Workspace.destroy({ where: {id} }) 
      return res.status(200).json({deleted: id})
    }
    catch (e) {
      console.log(e.message)
      return res.json({error: e.message})
    }
  }

  async create(req, res, next) {
      const newWorkspace = {...req.body, userId: req.user.id, contributors: []}
      console.log("create Workspace:", newWorkspace)
      try {
        const workspace = await Workspace.create(newWorkspace)
        return await res.status(200).json(workspace)
      }
      catch (e) {
        console.log(e.message)
        return res.json({error: e.message})
      }
  }
}


module.exports = new WorkspaceController()