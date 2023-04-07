const express = require('express')
const { authenticate } = require('@middlewares')
const { subscribeCtrl } = require('@controllers')

const router = express.Router()

router.post('/subscribe', authenticate, subscribeCtrl.addEmail)

module.exports = router
