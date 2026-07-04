const createCounter = (number)=>{
    return function(){
        return number ++;
    }
}

const counter = createCounter(1)
console.log(counter())
console.log(counter())
console.log(counter())