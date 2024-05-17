/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (arr.length === 0) {
        return []
    }

    let newarr = arr 
    let result = [] 

    let start = 0 
    let end = size

    let limit = arr.length / size
    limit = limit === 0 ? limit + 1 : limit;

    for (let i = 0; i < limit; i++) {
        let ele = arr.slice(start, end)
        result.push(ele)
        start += size
        end += size
    }

    return result

};
