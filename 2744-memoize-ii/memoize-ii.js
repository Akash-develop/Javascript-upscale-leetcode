/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        // Convert args into a cache key
        let key = "__root__";
        let map = cache;

        // Nested Map structure for reference equality
        for (let arg of args) {
            if (!map.has(arg)) {
                map.set(arg, new Map());
            }
            map = map.get(arg);
        }

        // Use a special symbol to store the result
        if (!map.has("__result__")) {
            map.set("__result__", fn(...args));
        }

        return map.get("__result__");
    };
}



 
 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
  })
  memoizedFn(2, 3) // 5
  memoizedFn(2, 3) // 5
  console.log(callCount) // 1 
