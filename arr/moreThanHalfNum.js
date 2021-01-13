/**
 * @description 数组中的某一个数字超过了数组长度的一半
 * @author cq
 * @Date 2021-01-13 20:33:45
 * @LastEditTime 2021-01-13 20:44:39
 * @LastEditors cq
 */




/*
  数组中有一个数字出现的次数超过数组长度的一半，
  请找出这个数字。例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。
  由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */
function MoreThanHalfNum_Solution(numbers) {
  // write code here
  let res = 0
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const arr = numbers.filter(el => el == element);
    if (arr.length > (numbers.length / 2)) {
      res = arr[0]
    } else {
      continue
    }
  }
  return res
}

// 真尼玛牛逼
function MoreThanHalfNum_Solution1(arr) {
  let sortArr = arr.sort()
  let count = 0;
  let midNum = sortArr[Math.floor(sortArr.length / 2)]
  console.log(midNum);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === midNum) {
      count++
    }
  }
  return count > Math.floor(sortArr.length / 2) ? midNum : 0
}

console.log(MoreThanHalfNum_Solution([2, 2, 2, 2, 2, 1, 3, 4, 5])); //2
console.log(MoreThanHalfNum_Solution1([2, 2, 2, 2, 2, 1, 3, 4, 5]),"MoreThanHalfNum_Solution1"); //2