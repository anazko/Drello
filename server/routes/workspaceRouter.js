const Router = require('express')
const WorkspaceController = require('../controllers/workspaceController')
const authMiddleware = require('../middleware/authMiddleware')
// const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const workspaceRouter = new Router()

workspaceRouter.get('/', WorkspaceController.getAll)
workspaceRouter.get('/:id', WorkspaceController.getOne)
workspaceRouter.put('/:id', WorkspaceController.update)
workspaceRouter.delete('/:id', WorkspaceController.delete)
// workspaceRouter.post('/', checkRoleMiddleware('ADMIN'), WorkspaceController.create)
workspaceRouter.post('/', authMiddleware, WorkspaceController.create)

module.exports = workspaceRouter;