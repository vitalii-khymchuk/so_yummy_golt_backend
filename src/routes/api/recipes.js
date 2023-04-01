const express = require('express')
const { bodyValidation, authenticate } = require('@middlewares')
const { authBodySchemas } = require('@models')

const router = express.Router()

// router.get('/recipes', authenticate, recipesCtrl.getAll)
// router.get('/recipes/:recipeId', authenticate, recipesCtrl.getOne)
// router.post(
//   '/recipes',
//   authenticate,
//   bodyValidation(authBodySchemas(authBodySchemas.postRecipe)),
//   recipesCtrl.postOne
// )
// router.delete('/recipes/:recipeId', authenticate, recipesCtrl.deleteOne)

// router.get('/recipes/my', authenticate, recipesCtrl.getUserRecipes)
// router.get('/recipes/main-page', authenticate, recipesCtrl.getMainPageRecipes)
// router.get('/recipes/popular', authenticate, recipesCtrl.getPopularRecipes)
// router.get(
//   '/recipes/category/:categoryName',
//   authenticate,
//   recipesCtrl.getRecipesByCategory
// )

// router.get('/recipes/my/favorite', authenticate, recipesCtrl.getFavorites)
// router.patch(
//   '/recipes/:recipeId/favorite',
//   authenticate,
//   recipesCtrl.patchFavorite
// )
// router.delete(
//   '/recipes/:recipeId/favorite',
//   authenticate,
//   recipesCtrl.deleteFavorite
// )

module.exports = router
