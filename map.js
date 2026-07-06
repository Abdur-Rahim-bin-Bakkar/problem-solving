var map = function (arr, fn) {
    let index = 0;
    const newArray = []
    for (const ar of arr) {
        const newData = fn(ar, index)
        index += 1;
        newArray.push(newData)
    }
    return newArray
};