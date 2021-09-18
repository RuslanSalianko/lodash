/**
 * Gets all but the last element of array.
 * 
 * @param {Array} arr  The array to query.
 * @returns {Array} Returns the slice of array.
 */
function initial(arr) {
  return arr.filter((item, index) => {
    return index !== arr.length - 1;
  });
}

export default initial;