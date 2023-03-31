const express = require('express')

const { bodyValidation } = require('@middlewares')
const { authSchemas } = require('@models')

const router = express.Router()

router.post(
  '/signup',
  bodyValidation(authSchemas.sighUpSchema),
  authCtrl.signup
)
router.post(
  '/signin',
  bodyValidation(authSchemas.sighIpSchema),
  authCtrl.signin
)
router.patch(
  '/edit',
  bodyValidation(authSchemas.patchUserDataSchema),
  authCtrl.edit
)
router.get('/current', authCtrl.current)
router.post('/logout', authCtrl.logout)

module.exports = router
