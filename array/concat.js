/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 
 * @param {Array} arr The array to concatenate.
 * @param  {...any} values  The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 */
function concat(...values) {
  return values.map(item => {
    if (Array.isArray(item)) {
      return item[0];
    } else {
      return item;
    }
  });
}

export default concat;