const mongoose = require('mongoose')

const groupArray = (array, key) => {
  return Object.values(
    array.reduce((accumulator, item) => {
      if (!accumulator[item[key]]) {
        accumulator[item[key]] = []
      }
      accumulator[item[key]].push(item)
      return accumulator
    }, {})
  )
}

const flatAndSort = (array, sortBy) => {
  return array.flatMap(group =>
    group.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
  )
}

const compareObjectId = (id1, id2) => {
  if (
    !(id1 instanceof mongoose.Types.ObjectId) ||
    !(id2 instanceof mongoose.Types.ObjectId)
  ) {
    return false
  }
  return id1.equals(id2)
}

/**
 * groupShopList - Function to group items in shopping list
 *
 * @description
 * If array has objects with common field "measure", this objects will "merged" to one, where:
 * "amount" will be sum of this fields
 * "recipeId" will be array of ObjectId
 *
 * @param {array} shopList
 * @returns {array} returns array of objects grouped by measure
 */
const groupShopList = shopList => {
  const newArray = []
  const gropedArray = groupArray(shopList, 'id')
  const sortedArray = flatAndSort(gropedArray, 'measure')
  sortedArray.reduce((prev, current, index) => {
    if (
      compareObjectId(prev.id, current.id) &&
      prev.measure === current.measure
    ) {
      prev = {
        ...prev,
        recipeId: [...prev.recipeId, current.recipeId],
        amount: Number(prev.amount) + Number(current.amount),
      }
    } else {
      index !== 0 && newArray.push(prev)
      if (!(current.recipeId instanceof Array)) {
        current.recipeId = [current.recipeId]
      }
      prev = current
      index !== 0 && newArray.push(current)
    }
    return prev
  }, {})
  return newArray
}

module.exports = { groupShopList }
