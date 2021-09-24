const ApiError = require('../error/ApiError')
const { Workspace } = require('../models/models')

class WorkspaceController {

  async getAll(req, res, next) {
    console.log('All workspaces')
    const workspaces = await Workspace.findAll()
    res.json(workspaces)
  }

  async getOne(req, res, next) {
    const {id} = req.params
    const workspace = await Workspace.findOne({ where: {id} })
    return res.json(workspace)
  }

  async update(req, res, next) {
    const {id} = req.params
    console.log(req.body)
    console.log(id)
    try {
      const workspace = await Workspace.update(req.body, { where: {id} })
      return await res.json(workspace)
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
      return res.json({deleted: id})
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
        return await res.json(workspace)
      }
      catch (e) {
        console.log(e.message)
        return res.json({error: e.message})
      }
  }
}


module.exports = new WorkspaceController()