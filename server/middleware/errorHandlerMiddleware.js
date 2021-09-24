const ApiError = require("../error/ApiError")

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    console.log(err.status, ': ', err.message)
    return res.status(err.status).json({ message: err.message })
  }
  else {
    console.log('Unknown error')
    return res.status(500).json({ message: err.message })
  }
} 

module.exports = errorHandlerMiddleware