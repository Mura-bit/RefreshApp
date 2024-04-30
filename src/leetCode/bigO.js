export function sum(n) {
    if (n <= 0) {
        return 0
    }
    return n + sum(n-1)
}

function pairSumSequence(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}

function pairSum(a, b) {
  return a + b;
}

function twoSum(nums, target) {
  const numIndicates = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (numIndicates.hasOwnProperty(complement)) {
      return numIndicates[complement];
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

export default twoSum;