/**
 * paginate middleware
 *
 * Adds `paginatedResponse` prop to @param {object} req
 * with `skip` and `limit` props based on `req` or default values
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @example
 * // Usage in controller
 * const { page, skip, limit } = req.paginatedResponse
 */
const paginate = async (req, res, next) => {
  const { PER_PAGE_LIMIT_DEFAUL = 12, PER_PAGE_LIMIT_MAX = 50 } = process.env

  const page = parseInt(req.query.page) || 1
  let limit = parseInt(req.query.limit) || PER_PAGE_LIMIT_DEFAUL

  if (limit > PER_PAGE_LIMIT_MAX) {
    limit = PER_PAGE_LIMIT_MAX
  }

  const skip = (page - 1) * limit

  req.paginatedResponse = {
    page,
    skip,
    limit,
  }

  next()
}

module.exports = paginate
