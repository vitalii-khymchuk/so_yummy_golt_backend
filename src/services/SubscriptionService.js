const { Subscription } = require('@models')
const { HttpError } = require('@helpers')

class SubscriptionService {
  async getAll(searchParams = {}, searchOptions = {}) {
    const data = await Subscription.find(
      searchParams,
      '-createdAt -updatedAt',
      searchOptions
    )

    if (!data) {
      throw new Error('Database error')
    }

    const total = await Subscription.countDocuments(searchParams)

    return {
      total,
      data,
    }
  }

  async create(email) {
    const candidate = await Subscription.findOne({ email })
    if (candidate) {
      throw HttpError(409, `Provided email "${email}" already subscribed`)
    }
    return await Subscription.create({ email })
  }

  async remove(_id) {
    return await Subscription.findOneAndRemove({ _id })
  }
}

module.exports = new SubscriptionService()
