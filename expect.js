const expect = (outerValue) => {
    const functions = {
        toBe: function (innerValue) {
            if (innerValue === outerValue) {
                return true
            }
            else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function (innerValue) {
            if (innerValue !== outerValue) {
                return true
            }
            else {
                throw new Error("Not Equal")
            }
        }
    }
    return functions
}

console.log(expect(5).toBe(5))
console.log(expect(5).toBe(4))
console.log(expect(5).notToBe(null))
console.log(expect(5).notToBe(5))
// console.log(expect(5).toBe(4))