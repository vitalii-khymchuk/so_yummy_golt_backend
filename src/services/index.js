const mongoDB = require('./mongoDB')
const RecipesService = require('./RecipesService')
const UserService = require('./UserService')
const IngredientsService = require('./IngredientsService')
const CategoryService = require('./CategoryService')

module.exports = {
  mongoDB,
  RecipesService,
  UserService,
  IngredientsService,
  CategoryService,
}
