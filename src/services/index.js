const mongoDB = require('./mongoDB')
const RecipesService = require('./RecipesService')
const AuthService = require('./AuthService')
const ingredientsService = require('./IngredientsService')

module.exports = {
  mongoDB,
  RecipesService,
  AuthService,
  ingredientsService,
}
