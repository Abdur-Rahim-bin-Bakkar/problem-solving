function processData(input) {
    const numbers = input.trim().split(' ').map(Number)
    let Positive = []
    let negative = []
    for (let num of numbers) {
        if (num === 0) {
            continue
        }
        if (num < 0){
            negative.push(num)
        } 
        if (num > 0) {
            Positive.push(num)
        }
    }
    console.log(Positive.length, negative.length)
}
processData('1 -2 3 0 -5')