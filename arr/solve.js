/**
 * @description 缺失数
 * @author cq
 * @Date 2021-01-11 17:27:21
 * @LastEditTime 2021-01-11 17:31:32
 * @LastEditors cq
 */



/*
  从0,1,2,...,n这n+1个数中选择n个数，组成有序数组，
  找出这n个数中缺失的那个数，要求O(n)尽可能小。
 */

function solve(a) {
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if ((element + 1) != a[index+1]){
      return element + 1
    }
  }
}

function solve1(a) {
  let index = 0
  while (a[index] + 1 === a[index + 1]) {
    index++
  }
  return a[index] + 1
}

function solve2(a) {
  // write code here
  let left = 0, right = a.length
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (a[mid] === mid) {
      left = mid + 1
    } else if (a[mid] > mid) {
      right = mid
    }
  }
  return left

}

console.log(solve([0, 1, 2, 3, 4, 5, 7])); //6