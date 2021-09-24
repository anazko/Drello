const Router = require('express')
const userRouter = require('./userRouter')
const workspaceRouter = require('./workspaceRouter')
// const boardRouter = require('./boardRouter')
// const taskRouter = require('./taskRouter')


const router = new Router()

router.use('/user', userRouter)
router.use('/workspace', workspaceRouter)
// router.use('/board', boardRouter)
// router.use('/task', taskRouter)

router.get('/', (req, res) => {
  res.status(200).json({message: "ok"})
})



module.exports = router;