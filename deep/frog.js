/**
 * @description 青蛙跳
 * @author cq
 * @Date 2021-01-08 16:03:23
 * @LastEditTime 2021-01-08 16:34:54
 * @LastEditors cq
 */

// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

// 1-1
// 4-5

// 1 - 1 - 1 - 1
// 2 - 2
// 1 - 2 - 1
// 1 - 1 - 2
// 2 - 1 - 1
let reccord = {};
function jumpFloor(number) {
  // 开局要么先跳1要么2
  if (number === 1) {
    return 1
  }
  if (number === 2) {
    return 2
  }
  console.log(reccord, "reccord");
  if (reccord[number]) {   //最小肯定是3开始计数
    return reccord[number]
  }
  let res = jumpFloor(number - 1) + jumpFloor(number - 2);
  console.log(res, "res", reccord);
  reccord[number] = res
  console.log(reccord, "--");
  return res
}

console.log(jumpFloor(5));