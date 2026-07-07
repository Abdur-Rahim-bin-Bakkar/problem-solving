function processData(input) {
    let factorial = 1;
    for (let i = 2; i <= input; i++) {
        factorial  *= i
    }
    console.log(factorial)
}
processData(5)
