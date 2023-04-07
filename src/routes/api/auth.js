const express = require('express')
const { authCtrl } = require('@controllers')
const { bodyValidation, authenticate, handleFormData } = require('@middlewares')
const { userBodySchemas } = require('@models')

const router = express.Router()

router.post(
  '/auth/signup',
  bodyValidation(userBodySchemas.signup),
  authCtrl.signup
)
router.post(
  '/auth/signin',
  bodyValidation(userBodySchemas.signin),
  authCtrl.signin
)
router.patch(
  '/auth/edit',
  authenticate,
  // bodyValidation(userBodySchemas.patchUserData),
  handleFormData.single('avatar'),
  authCtrl.edit
)
router.get('/auth/current', authenticate, authCtrl.current)
router.post('/auth/logout', authenticate, authCtrl.logout)

module.exports = router
