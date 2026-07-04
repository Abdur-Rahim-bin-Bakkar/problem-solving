const createCounter =(number)=>{
    const real = number;
    const functions = {
        increment:function(){
            return number +=1
        },
        decrement:function(){
            return number -=1
        },
        reset:function(){
            number = real
            return number;
        }
    }
    return functions;
}

const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())