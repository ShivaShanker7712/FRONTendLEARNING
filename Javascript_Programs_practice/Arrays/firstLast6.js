/*Given an array of integers, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false*/
function firstLast6(nums) {
  if ((nums.length > 0 && nums[0] === 6) || nums[nums.length - 1] === 6) {
    return true;
  } else {
    return "6 not appears as either the first or last element in the array";
  }
}
console.log(firstLast6([1, 2, 6])); // true
console.log(firstLast6([6, 1, 2, 3])); // true
console.log(firstLast6([13, 6, 1, 2, 3])); // false
