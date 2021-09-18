/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 
 * @param {Array} arr The array to concatenate.
 * @param  {...any} values  The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 */
function concat(arr, ...values) {
  values.forEach(item => {
    if (Array.isArray(item)) {
      arr.push(item[0]);
    } else {
      arr.push(item);
    }
  })
  return arr;
}

export default concat;