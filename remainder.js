function processData(input) {
    const [a,b] = input.trim().split(' ').map(Number)
    console.log(a % b)
} 

processData('10 3')