
var check = function(nums) {
    let dropCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            dropCount++;
        }
    }

    return dropCount <= 1;
    
};