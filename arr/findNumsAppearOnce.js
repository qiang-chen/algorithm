/**
 * @description 数组中只出现一次的数字
 * @author cq
 * @Date 2021-01-13 20:18:49
 * @LastEditTime 2021-01-13 20:28:53
 * @LastEditors cq
 */

function FindNumsAppearOnce(array) {
  // write code here
  let res = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const arr = array.filter(el => el == element);
    if (arr.length == 1) {
      res.push(arr[0])
    } else {
      continue
    }
  }
  return res
}

function FindNumsAppearOnce1(array) {
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  let arrObj = {}
  for (let i = 0; i < array.length; i++) {
    let stringItem = array[i].toString()
    let temp = arrObj[stringItem]
    if (temp) {
      delete arrObj[stringItem]
    } else {
      arrObj[stringItem] = 1
    }
  }
  return Object.keys(arrObj)
}

console.log(FindNumsAppearOnce([2, 4, 3, 6, 3, 2, 5, 5]));
console.log(FindNumsAppearOnce1([2, 4, 3, 6, 3, 2, 5, 5]),"FindNumsAppearOnce1");
