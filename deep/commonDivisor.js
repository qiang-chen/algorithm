/**
 * @description 求两个数最大公约数
 * @author cq
 * @Date 2021-01-05 17:26:05
 * @LastEditTime 2021-01-05 17:51:42
 * @LastEditors cq
 */

/*
例：48, 57
57 % 48=9     大数对小数求余
48 % 9=3       小数对上次的余数求余，重复这个过程直到余数为0

9 % 3=0         余数为0时，此次求余的小数就是最大公约数 
*/

//功能：求两个数的最大公约数 //参数：两个数： //返回值：最大公约数

// max 是大数 min 是小数
const commonDivisor = (min, max) => {

  if (max % min) {
    return commonDivisor(max % min, min)
  } else {
    return min
  }
}

console.log(commonDivisor(9, 12))
console.log(commonDivisor(4, 2))
console.log(commonDivisor(49, 7))
console.log(commonDivisor(16, 12))
