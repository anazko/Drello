const { User } = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createJWT = (payload) => {
  return jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' })
}

class UserController {

  async register(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(403).json({ message: "Отсутствует логин или пароль" })
    }
    const candidate = await User.findOne({ where: {email} })
    if (candidate) {
      res.status(403).json({ message: "Пользователь с таким email уже существует" })
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, password: hashPassword })
    const token = createJWT({email, id: user.id})
    return res.status(200).json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(403).json({ message: "Отсутствует логин или пароль" })
    }
    const user = await User.findOne({where: {email} })
    if (!user) {
      return res.status(403).json({ message: "Пользователь с таким email не найден" })
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return res.status(403).json({ message: "Неверный пароль" })
    }
    const token = createJWT({email, id: user.id})
    return res.status(200).json({ token })
  }

  async check(req, res) {
    const token = createJWT({ id: req.user.id, email: req.user.email })
    return res.status(200).json({ token })
  }

  async getUserProfile(req, res) {
    const {id} = req.user 
    const user = await User.findOne({where: {id} }) 
    if (!user) return res.status(404).json({ message: `Профиль пользователя c id=${id} не найден` })
    console.log("----------USER: ", user)
    const response = { 
      id: user.id, 
      email: user.email, 
      fullName: user.fullName, 
      description: user.description, 
      avatar: user.avatar
    }
    return res.status(200).json(response)
  }

}

module.exports = new UserController()