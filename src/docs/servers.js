const { BASE_URL } = process.env

module.exports = {
  servers: [
    {
      url: `${BASE_URL}/api/v1`,
      description: 'SoYummy Recipes API main server',
    },
  ],
}
