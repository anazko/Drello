const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Workspace = sequelize.define('workspace', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  contributors: {type: DataTypes.ARRAY(DataTypes.INTEGER)}
})

const Board = sequelize.define('board', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
})

const Task = sequelize.define('task', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  contributors: {type: DataTypes.ARRAY(DataTypes.INTEGER)}
})

User.hasMany(Workspace, { onDelete: 'cascade' })
Workspace.hasMany(Board, { onDelete: 'cascade' })
Board.hasMany(Task, { onDelete: 'cascade' })

module.exports = {
  User, Workspace, Board, Task
}