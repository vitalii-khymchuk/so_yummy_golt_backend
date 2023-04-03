const express = require('express')
const { authenticate } = require('@middlewares')
const { ingredientsCtrl } = require('@controllers')

const router = express.Router()

router.get('/ingredients/list', authenticate, ingredientsCtrl.getList)

module.exports = router
