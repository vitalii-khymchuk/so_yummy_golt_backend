const express = require('express')
const { authCtrl } = require('@controllers')
const { bodyValidation } = require('@middlewares')
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
// router.patch(
//   '/edit',
//   bodyValidation(authSchemas.patchUserDataSchema),
//   authCtrl.edit
// )
// router.get('/current', authCtrl.current)
// router.post('/logout', authCtrl.logout)

module.exports = router
