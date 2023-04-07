const mongoDB = require('./mongoDB')
const RecipesService = require('./RecipesService')
const UserService = require('./UserService')
const IngredientsService = require('./IngredientsService')
const CategoryService = require('./CategoryService')
const sendEmail = require('./sendEmail')

module.exports = {
  mongoDB,
  RecipesService,
  UserService,
  IngredientsService,
  CategoryService,
  sendEmail,
}
