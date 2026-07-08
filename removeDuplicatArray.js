var removeDuplicates = function (nums) {
    let write = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[write] = nums[i];
            write++;
        }
    }
    return write;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// removeDuplicates([1, 1, 2])