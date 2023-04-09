const express = require('express')
const {
  bodyValidation,
  authenticate,
  paginate,
  isValidId,
  handleFormData,
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
  handleFormData.single('thumb'),
  bodyValidation(schemas.addSchema),
  ctrl.addOne
)

router.delete(
  '/recipes/:recipeId',
  authenticate,
  isValidId('recipeId'),
  ctrl.deleteOne
)

router.get('/recipes/my/favorite', authenticate, paginate, ctrl.getAllFavorite)

router.patch(
  '/recipes/:recipeId/favorite',
  authenticate,
  isValidId('recipeId'),
  ctrl.updateFavorite
)

router.delete(
  '/recipes/:recipeId/favorite',
  authenticate,
  isValidId('recipeId'),
  ctrl.updateFavorite
)

module.exports = router
