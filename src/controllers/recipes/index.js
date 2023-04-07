const { addOne } = require('./addOne')
const { getAll } = require('./getAll')
const { getOne } = require('./getOne')
const { deleteOne } = require('./deleteOne')
const { addFavorite } = require('./addFavorite')
const { removeFavorite } = require('./removeFavorite')
const { getAllFavorite } = require('./getAllFavorite')

module.exports = {
  addOne,
  getAll,
  getOne,
  deleteOne,
  addFavorite,
  removeFavorite,
  getAllFavorite,
}
