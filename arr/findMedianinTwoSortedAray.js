/**
 * @description 破玩意读不懂
 * @author cq
 * @Date 2021-01-11 16:25:50
 * @LastEditTime 2021-01-11 16:38:38
 * @LastEditors cq
 */

/*
  给定两个有序数组arr1和arr2，已知两个数组的长度都为N，求两个数组中所有数的上中位数。
  上中位数：假设递增序列长度为n，若n为奇数，则上中位数为第n/2+1个数；否则为第n个数
  [要求]
  时间复杂度为O(logN)O(logN)，额外空间复杂度为O(1)O(1)
*/
function findMedianinTwoSortedAray(arr1, arr2) {
  const arr = [...arr1, ...arr2].sort((a, b) => a - b);
  const len = arr.length;
  console.log(arr, len);
  if (len % 2) {
    // 偶数
    return arr[len / 2]
  } else {
    return arr[len / 2 + 1]
  }
}

function findMedianinTwoSortedAray1(arr1, arr2) {
  // write code here
  var len = arr1.length;
  var i = 0, j = 0, res;
  while (len > 0) {
    if (arr1[i] < arr2[j]) {
      res = arr1[i++];
    } else {
      res = arr2[j++];
    }
    len--;
  }
  return res;
}

console.log(findMedianinTwoSortedAray([1, 2, 3, 4], [3, 4, 5, 6]), "findMedianinTwoSortedAray"); //3
console.log(findMedianinTwoSortedAray1([1, 2, 3, 4], [3, 4, 5, 6]), "findMedianinTwoSortedAray1"); //3

