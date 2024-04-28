function twoSum(nums, target) {
    const numIndicates = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (numIndicates.hasOwnProperty(complement)) {
            return numIndicates[complement]
        }
        numIndicates[num] = i;
    }
    return [];
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));

export default twoSum