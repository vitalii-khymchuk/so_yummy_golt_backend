/**
 * isEverythingUnique - Reusable function to check uniqueness of keys in an array of objects
 *
 * @description
 * If the function returns `true`, then you know all the keys are unique.
 * Otherwise, you have non-unique keys (IDs).
 *
 * @param {array} arr
 * @param {*} key
 * @returns
 * @example isEverythingUnique(items, 'id');
 */
const isEverythingUnique = (arr, key) => {
  const uniques = new Set(arr.map(item => item[key]))
  return [...uniques].length === arr.length
}

module.exports = { isEverythingUnique }
