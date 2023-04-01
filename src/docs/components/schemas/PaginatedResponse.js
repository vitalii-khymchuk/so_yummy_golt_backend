const { BASE_URL } = process.env
const apiUrl = `${BASE_URL}/api/v1`

module.exports = {
  PaginatedResponse: {
    type: 'object',
    properties: {
      total: {
        type: 'integer',
        description: 'The number of items found in the query',
        example: 100,
      },
      current_page: {
        type: 'integer',
        example: 1,
      },
      per_page: {
        type: 'integer',
        description: 'The number of elements in the array for each request',
        example: 12,
      },
      data: {
        type: 'array',
        description: 'An array of objects in the response from the server',
        items: {},
      },
      first_page_url: {
        type: 'string',
        example: `${apiUrl}/{current_path}?page=1`,
      },
      last_page_url: {
        type: 'string',
        example: `${apiUrl}/{current_path}?page=5`,
      },
      next_page_url: {
        type: 'string',
        example: `${apiUrl}/{current_path}?page=2`,
      },
    },
  },
}
