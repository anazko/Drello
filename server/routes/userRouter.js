const Router = require('express');
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

const userRouter = new Router()

userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.get('/auth', authMiddleware, userController.check)
userRouter.get('/profile', authMiddleware, userController.getUserProfile)

module.exports = userRouter;