const express = require('express')
const { authenticate } = require('@middlewares')
const { recipePagesCtrl } = require('@controllers')

const router = express.Router()
router.get('/recipes/my', authenticate, recipePagesCtrl.getMy)
router.get('/recipes/main-page', authenticate, recipePagesCtrl.getMainPage)
router.get('/recipes/popular', authenticate, recipePagesCtrl.getPopular)
router.get(
  '/recipes/category/:categoryName',
  authenticate,
  recipePagesCtrl.getByCategory
)

module.exports = router
