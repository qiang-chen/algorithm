/**
 * @description 数组奇偶性分离
 * @author cq
 * @Date 2021-01-08 17:40:46
 * @LastEditTime 2021-01-11 10:18:59
 * @LastEditors cq
 */


/*
  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
  使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
  并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

function reOrderArray(array) {
  let arr1=[]
  let arr2=[]
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%2){
      // 奇数
      arr1.push(element)
    }else{
      arr2.push(element)
    }
  }
  return [...arr1,...arr2]
}

console.log(reOrderArray([1,2,3,4,5,6,7,9,8])); 