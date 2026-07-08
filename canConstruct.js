var canConstruct = function (ransomNote, magazine) {
    if (magazine.includes(ransomNote)) {
        return true
    }
    let counter = {}
    let counter2 = {}
    let result = false
    for (let i of ransomNote) {
        if (!counter.hasOwnProperty(i)) {
            counter[i] = 1
        }
        else {
            counter[i]++
        }
    }
    for (let i of magazine) {
        if (!counter2.hasOwnProperty(i)) {
            counter2[i] = 1
        }
        else {
            counter2[i]++
        }
    }
    console.log("counter", counter)
    console.log("counter2", counter2)
    for (count in counter) {
        console.log(counter[count], counter2[count])
        // counter2.hasOwnProperty(count)
        if (!counter2.hasOwnProperty(count)) {
            console.log('nai')
            return false

        }

        if (counter2[count] < counter[count]) {
            return false;
        }


        else {
            result = true
        }

    }
    return result
};

console.log(canConstruct('absa', 'abcccass'))