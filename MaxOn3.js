function processData(input) {
    const [a, b, c] = input.trim().split(' ').map(Number)

    if (a > b && a > c) {
        console.log(a)
        return
        
    }
    if (b > c) {
        console.log(b)
        return
        
    }
    if (b < c) {
        console.log(c)
        return
    }

    console.log("Equal")
}
processData("40 40 40")