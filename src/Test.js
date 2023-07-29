//const String="this is great example";

const twoSum = function (nums, target) {
  let index = [];
  let index1;
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        //index = nums.indexOf(nums[i], nums[j]);
        index = i;
        index1 = j;
        console.log(`index is ${index} ${index1}`);
      }
    }
  }
  let final = [index, index1];
  return final;
};

const result = twoSum([2, 7, 11, 15], 9);
console.log("result is", result);
