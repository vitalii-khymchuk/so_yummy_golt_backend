const { BASE_URL } = process.env

/**
 * getPageUrl
 * @param {string} path
 * @param {number} page
 * @returns {string}
 */
const getPageUrl = (path, page) => {
  return page ? `${BASE_URL}/api/v1${path}?page=${page}` : null
}

/**
 * paginatedResponse
 * @param {number} total
 * @param {array} data
 * @param {number} limit
 * @param {number} page
 * @param {string} path
 * @returns {object}
 */
const paginatedResponse = (total, data, limit, page, path) => {
  const totalPages = Math.ceil(total / limit)
  const nextPageUrl = page >= totalPages ? null : getPageUrl(path, page + 1)

  return {
    total,
    current_page: page,
    per_page: limit,
    data,
    first_page_url: getPageUrl(path, 1),
    last_page_url: getPageUrl(path, totalPages),
    next_page_url: nextPageUrl,
  }
}

module.exports = { paginatedResponse }
