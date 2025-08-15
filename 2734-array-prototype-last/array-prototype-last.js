/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) return -1;
    return this[this.length - 1];
};


let nums1 = [null, {}, 3];
console.log(nums1.last()); // 3 

let nums2 = [];
console.log(nums2.last()); // -1
 