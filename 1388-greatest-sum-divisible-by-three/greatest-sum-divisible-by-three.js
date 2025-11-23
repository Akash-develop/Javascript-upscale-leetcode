/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 3 === 0) return sum;

    let rem1 = [];
    let rem2 = [];

    for (let num of nums) {
        if (num % 3 === 1) rem1.push(num);
        if (num % 3 === 2) rem2.push(num);
    }

    rem1.sort((a, b) => a - b);
    rem2.sort((a, b) => a - b);

    if (sum % 3 === 1) {
        let option1 = rem1.length > 0 ? sum - rem1[0] : -Infinity;
        let option2 = rem2.length > 1 ? sum - (rem2[0] + rem2[1]) : -Infinity;

        return Math.max(option1, option2);
    } else {
        let option1 = rem2.length > 0 ? sum - rem2[0] : -Infinity;
        let option2 = rem1.length > 1 ? sum - (rem1[0] + rem1[1]) : -Infinity;

        return Math.max(option1, option2);
    }
};
