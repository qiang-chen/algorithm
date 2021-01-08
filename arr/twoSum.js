/**
 * @description 求任意数组中的两项之和
 * @author cq
 * @Date 2021-01-08 16:40:32
 * @LastEditTime 2021-01-08 17:35:01
 * @LastEditors cq
 */

/*
  给出一个整数数组，请在数组中找出两个加起来等于目标值的数，
  你给出的函数twoSum 需要返回这两个数字的下标（index1，index2），需要满足 index1 小于index2.。注意：下标是从1开始的
  假设给出的数组中只存在唯一解
  例如：
  给出的数组为 [20, 70, 110, 150] , 目标值为90
  输出 index1 = 1, index2 = 2 
*/


// 79ms
const twoSum1 = (numbers, target) => {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let findIndex = numbers.findIndex((item, i) => item === (target - element) && i != index);  //循环太多余
    if (findIndex != -1) {
      return [index + 1, findIndex + 1]
    }
  }
}

// 46ms
const twoSum = (numbers, target) => {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    console.log("进来几次", numbers[i]);
    // 初始话的map肯定是个空的
    // 第二次进来的就不是3了  而是第二次循环的2  所以对比之下就能排除了我们写的那个排除自身的逻辑了
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1]
    } else {
      // 第一次将3放进去 和他的下标i
      map.set(numbers[i], i)
    }
  }
}


console.log(twoSum([3, 2, 4], 6));  //[2,3]
// console.log(twoSum([0, 4, 3, 0], 0));  //[ 1, 4 ]