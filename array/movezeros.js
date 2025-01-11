var moveZeroes = function(nums) {
    let nz = 0;

    // Move all non-zero elements to the front of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nz] = nums[i];
            nz++;
        }
    }

    // Fill the remaining positions with 0
    for (let i = nz; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};
