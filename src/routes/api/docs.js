const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('@src/docs')

const router = express.Router()

const { BASE_URL } = process.env

const options = {
  explorer: true,
  swaggerOptions: {
    url: `${BASE_URL}/api/v1/docs/swagger.json`,
  },
}

router.get('/docs/swagger.json', (req, res) => res.json(swaggerDocument))

router.use('/docs', swaggerUi.serveFiles(null, options))
router.get('/docs', swaggerUi.setup(null, options))

module.exports = router
