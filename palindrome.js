const romanToInt = (x)=>{
    if(x<0){
        return false
    }
    const numbers = `${x}`;
    const returnNumbers = []
    for(let num of numbers){
        returnNumbers.unshift(num)
    }
    if(returnNumbers.join('') === numbers){
        return true;
    }
    return false;
}
console.log(isPalindrome(1331))

// AI generated:
var isPalindrome = function(x) {
    if (x < 0) return false;

    const str = x.toString();
    const reverse = str.split("").reverse().join("");

    return str === reverse;
};