/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
      const result = {};

  for (const item of this) {
    const key = fn(item); // always returns a string as per problem statement
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};


 [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 