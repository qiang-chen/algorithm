/**
 * @description 数组中未出现的最小正整数
 * @author cq
 * @Date 2021-01-11 16:40:05
 * @LastEditTime 2021-01-11 17:08:54
 * @LastEditors cq
 */


/*
  给定一个无序数组arr，找到数组中未出现的最小正整数
  例如arr = [-1, 2, 3, 4]。返回1
  arr = [1, 2, 3, 4]。返回5
  [要求]
  时间复杂度为O(n)O(n)，空间复杂度为O(1)O(1)
*/

// 废柴 错误
function minNumberdisappered(arr) {
  arr.sort((a, b) => a - b);
  let i = 0
  while (i < arr.length) {
    if (arr[i] >= 0) {
      // 从大于0的时候开始计算
      if ((arr[i] + 1) != arr[i + 1]) {
        return arr[i] + 1
      }
    } else {
      if (arr[i + 1] > 0) {
        return arr[i + 1] - 1
      }
    }
    i++
  }
}

// 经典35 正确
function minNumberdisappered1(arr) {
  // write code here
  const len = arr.length
  for (let i = 1; i <= len; i++) {
    if (arr.indexOf(i) === -1) {
      return i
    }
  }
  return len + 1
}

console.log(minNumberdisappered([-1, 2, 3, 4])); //1
console.log(minNumberdisappered([1, 2, 3, 4])); //5

console.log(minNumberdisappered([-1, 200, 300, 450]), "minNumberdisappered");
console.log(minNumberdisappered1([-1, 200, 300, 450]),"minNumberdisappered1");




