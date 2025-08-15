/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(obj, classFunction) {
    if (typeof classFunction !== 'function') return false;

    if (obj === null || obj === undefined) return false;

    let currentProto = Object(obj);

    while (currentProto !== null) {
        if (currentProto.constructor === classFunction) return true;
        currentProto = Object.getPrototypeOf(currentProto);
    }
    return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(new Date(), Object)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true
console.log(checkIfInstanceOf("hi", String)); // true
console.log(checkIfInstanceOf(null, Object)); // false ✅
console.log(checkIfInstanceOf(undefined, Object)); // false ✅