var removeDuplicates = function (nums) {
    count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums[j] = '_'
                // console.log(nums[i])

                // nums[i] = nums[j]
                // nums[j] = nums[i]
            }
        }
    }
    // console.log(nums)
    for (let i = 0; i< nums.length; i++) {

        if (nums[i] === '_') {

            console.log(nums[i])
        }

        // if(num === 0){
        //     count +=1
        // }
        // if(num){
        //     count +=1
        // }
    }
    // return count
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// removeDuplicates([1, 1, 2])