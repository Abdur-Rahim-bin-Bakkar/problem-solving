function processData(a, b) {
    const [a, b] = input.trim().split(" ").map(Number);
    if (a > b) {
        console.log(a)
        return
    }
    if (a < b) {
        console.log(b)
        return
    }
    if (a === b) {
        console.log("Equal")
    }
}

processData(1, 2)
processData(20, 40)
processData(40, 40)
