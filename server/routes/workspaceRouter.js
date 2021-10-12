const Router = require('express')
const WorkspaceController = require('../controllers/workspaceController')
const authMiddleware = require('../middleware/authMiddleware')
// const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const workspaceRouter = new Router()

workspaceRouter.get('/', authMiddleware, WorkspaceController.getAll)
workspaceRouter.get('/:id', authMiddleware, WorkspaceController.getOne)
workspaceRouter.put('/:id', authMiddleware, WorkspaceController.update)
workspaceRouter.delete('/:id', authMiddleware, WorkspaceController.delete)
// workspaceRouter.post('/', checkRoleMiddleware('ADMIN'), WorkspaceController.create)
workspaceRouter.post('/', authMiddleware, WorkspaceController.create)

module.exports = workspaceRouter;