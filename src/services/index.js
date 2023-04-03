const mongoDB = require('./mongoDB')
const RecipesService = require('./RecipesService')
const AuthService = require('./AuthService')
const IngredientsService = require('./IngredientsService')
const CategoryService = require('./CategoryService')

module.exports = {
  mongoDB,
  RecipesService,
  AuthService,
  IngredientsService,
  CategoryService,
}
