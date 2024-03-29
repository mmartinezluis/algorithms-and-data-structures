/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left=0;
    let right=nums.length -1;
    let pointer;
    while(left <= right) {
        pointer = Math.floor((left + right)/2);
        if(nums[pointer] === target) {
            console.log(target)
            return pointer;
        }
        // array is rotated
        if(nums[left] > nums[right]) {
            // target is on right side
            if(nums[left] > target) {
                // pointer is on right side and it is greter than target
                if(nums[pointer] > target && nums[left] > nums[pointer]) {right = pointer -1;}
                else left = pointer + 1;
            // target is on left side
            } else {
                // pointer is on left sde and it is less than target
                if(nums[pointer] < target && nums[left] < nums[pointer]) {left = pointer +1;}
                else right = pointer - 1;
            }
        } else if(target > nums[pointer]) {
            left = pointer + 1;
        } else right = pointer - 1;
    }
    return -1;
};

var search2 = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    let pointer;
    while(left <= right) {
        pointer = Math.floor((left + right)/2);
        if(nums[pointer] === target) {
            console.log(nums[pointer])
            return pointer;
        }
        // bind pointer to the left
        if(nums[left] <= nums[pointer]) {
            // bind target to the left
            if(target >= nums[left] && target < nums[pointer]) {right = pointer -1;}
            else left = pointer + 1;
        // bind pointer to the right
        } else {
            if(target <= nums[right] && target > nums[pointer]) {left = pointer +1;}
            else right = pointer -1;
        }
    }
    return -1;
}

// TEST
let nums = [4,5,6,7,0,1,2], target = 7
nums = [4,5,6,7,8,1,2,3]
target= 3
search2(nums, target);