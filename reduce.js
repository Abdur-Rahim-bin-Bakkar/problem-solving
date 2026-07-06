function sum(accum, curr) {
    return accum + curr;
}

var reduce = function(nums, fn, init) {
    let result = init;
    for(let num of nums){
        result = fn(result, num)
    }
    return result
};

console.log(reduce([1,2,3,4,5,6,7,8,9,10],sum,10))