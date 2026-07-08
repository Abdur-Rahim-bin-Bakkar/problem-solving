var isAnagram = function (s, t) {
    let counter = {}
    let counter2 = {}
    let result = false
    if (s.length !== t.length) {
        return false
    }
    for (let i of s) {
        if (!counter.hasOwnProperty(i)) {
            counter[i] = 1
        }
        else {
            counter[i]++
        }
    }
    for (let i of t) {
        if (!counter2.hasOwnProperty(i)) {
            counter2[i] = 1
        }
        else {
            counter2[i]++
        }
    }
    // console.log(counter)
    // console.log(counter2)

    for (count in counter) {
        // counter2.hasOwnProperty(count)
        if (!counter2.hasOwnProperty(count)) {
            return false

        }

        if (counter2[count] !== counter[count]) {
            return false
        }


        else {
            result = true
        }

    }
    return result

};

console.log(isAnagram('car', 'rac'))
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))