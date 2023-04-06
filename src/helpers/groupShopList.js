const { compareObjectId } = require('./compareObjectId')

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
  const groupedArray = groupArray(shopList, 'id')
  const sortedArray = flatAndSort(groupedArray, 'measure')
  sortedArray.reduce((prev, current, index) => {
    if (
      compareObjectId(prev.id, current.id) &&
      prev.measure === current.measure
    ) {
      newArray[newArray.length - 1] = {
        ...newArray[newArray.length - 1],
        recipeId: [...prev.recipeId, current.recipeId],
        amount: Number(prev.amount) + Number(current.amount),
      }
    } else {
      if (!(current.recipeId instanceof Array)) {
        current.recipeId = [current.recipeId]
      }
      newArray.push(current)
    }
    prev = current
    return prev
  }, {})
  return newArray
}

module.exports = { groupShopList }
