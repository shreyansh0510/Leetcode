/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let flag = true
    
    return function(...args){
        let arg = [...args]

        if (flag === true) {
            flag = false
            return  fn(...arg)
        } else {
            return undefined
        } 
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
