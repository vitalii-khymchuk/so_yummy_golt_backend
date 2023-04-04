const express = require('express')
const { authenticate } = require('@middlewares')
const { categoryListCtrl } = require('@controllers')

const router = express.Router()

router.get('/recipes/category-list', authenticate, categoryListCtrl.getList)

module.exports = router
