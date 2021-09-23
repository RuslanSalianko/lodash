/**
 * Creates a slice of array with n elements dropped from the beginning.
 * 
 * @param {Array} arr The array to query.
 * @param {number} n=1 The number of elements to drop.
 * @returns {Array} Returns the slice of array.
 */
function drop(arr, n = 1) {
  return arr.slice(n);
}

export default drop;