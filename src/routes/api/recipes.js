const express = require('express')
const {
  bodyValidation,
  authenticate,
  paginate,
  isValidId,
} = require('@middlewares')

const { recipesCtrl: ctrl } = require('@controllers')
const { recipeSchemas: schemas } = require('@models')

const router = express.Router()

router.get('/recipes', authenticate, paginate, ctrl.getAll)

router.get(
  '/recipes/:recipeId',
  authenticate,
  isValidId('recipeId'),
  ctrl.getOne
)

router.post(
  '/recipes',
  authenticate,
  bodyValidation(schemas.addSchema),
  ctrl.addOne
)

// router.delete('/recipes/:recipeId', authenticate, ctrl.deleteOne)

// router.get('/recipes/my', authenticate, ctrl.getUserRecipes)
// router.get('/recipes/main-page', authenticate, ctrl.getMainPageRecipes)
// router.get('/recipes/popular', authenticate, ctrl.getPopularRecipes)
// router.get(
//   '/recipes/category/:categoryName',
//   authenticate,
//   ctrl.getRecipesByCategory
// )

// router.get('/recipes/my/favorite', authenticate, ctrl.getFavorites)
// router.patch(
//   '/recipes/:recipeId/favorite',
//   authenticate,
//   ctrl.patchFavorite
// )
// router.delete(
//   '/recipes/:recipeId/favorite',
//   authenticate,
//   ctrl.deleteFavorite
// )

module.exports = router
