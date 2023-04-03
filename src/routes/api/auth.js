const express = require('express')
const { authCtrl } = require('@controllers')
const { bodyValidation, authenticate } = require('@middlewares')
const { authBodySchemas } = require('@models')

const router = express.Router()

router.post(
  '/auth/signup',
  bodyValidation(authBodySchemas.signup),
  authCtrl.signup
)
router.post(
  '/auth/signin',
  bodyValidation(authBodySchemas.signin),
  authCtrl.signin
)
router.patch(
  '/auth/edit',
  bodyValidation(authBodySchemas.patchUserData),
  authenticate,
  authCtrl.edit
)
router.get('/auth/current', authenticate, authCtrl.current)
router.post('/auth/logout', authenticate, authCtrl.logout)

module.exports = router
