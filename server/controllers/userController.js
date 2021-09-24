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
    const user = await User.create({ email, password: hashPassword, role: "USER" })
    const token = createJWT({email, id: user.id, role: user.role})
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      return res.json({ message: "Отсутствует логин или пароль" })
    }
    const user = await User.findOne({where: {email} })
    if (!user) {
      return res.json({ message: "Пользователь не найден" })
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return res.json({ message: "Пароль не верный" })
    }
    const token = createJWT({ email, id: user.id, role: user.role })
    return res.json({ token })
  }

  async check(req, res) {
    const token = createJWT({ email: req.user.email, id: req.user.id, role: req.user.role })
    return res.json({ token })
  }

}

module.exports = new UserController()