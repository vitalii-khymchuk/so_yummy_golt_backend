const express = require('express')
const { authCtrl } = require('@controllers')
const { bodyValidation } = require('@middlewares')
const { authSchemas } = require('@models')

const router = express.Router()

router.post(
  '/auth/signup',
  bodyValidation(authSchemas.sighUpSchema),
  authCtrl.signup
)
router.post(
  '/auth/signin',
  bodyValidation(authSchemas.sighInSchema),
  authCtrl.signin
)
// router.patch(
//   '/edit',
//   bodyValidation(authSchemas.patchUserDataSchema),
//   authCtrl.edit
// )
// router.get('/current', authCtrl.current)
// router.post('/logout', authCtrl.logout)

module.exports = router
