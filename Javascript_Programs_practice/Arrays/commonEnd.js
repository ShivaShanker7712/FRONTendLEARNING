/*
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true*/

const commonEnd = (firstArray, secondArray) => {
  if (
    firstArray.length > 1 &&
    secondArray.length > 1 &&
    (firstArray[0] === secondArray[firstArray[0]] ||
      firstArray[firstArray.length - 1] === secondArray[secondArray - 1])
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(commonEnd([1, 2, 3], [7, 3]));
