/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
        function helper(currentArr, depth) {
        let result = [];
        
        for (let item of currentArr) {
            if (Array.isArray(item) && depth < n) {
                // If it's an array and we can go deeper
                result.push(...helper(item, depth + 1));
            } else {
                result.push(item);
            }
        }
        
        return result;
    }

    return helper(arr, 0);
};

