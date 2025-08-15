/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
        if (n <= 0) return false;
    return (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
};


console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5));  // false
console.log(isPowerOfFour(1));  // true
