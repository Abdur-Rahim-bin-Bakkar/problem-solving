const number = []
const fun = ()=>{
    
}
const filter = function(arr, fn) {
    const newArray = []
    let index = 0;
    for(const ar of arr){
        const result = fn(ar,index)
        index++
        if(result){
            newArray.push(ar)
        }
    }
    return newArray
};
filter([121], fun)