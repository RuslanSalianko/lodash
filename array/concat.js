/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param {Array} arr The array to concatenate.
 * @param  {...any} values  The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 */
function concat(...values) {
  const arr = [];
  values.forEach((item) => {
    if (Array.isArray(item)) {
      Array.prototype.push.apply(arr, item);
    } else {
      arr.push(item);
    }
  });
  return arr;
}

export default concat;
