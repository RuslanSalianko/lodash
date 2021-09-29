/**
 * Gets all but the last element of array.
 * 
 * @param {Array} arr  The array to query.
 * @returns {Array} Returns the slice of array.
 */
function initial(arr) {
  return arr.slice(0,arr.length-1);
}

export default initial;