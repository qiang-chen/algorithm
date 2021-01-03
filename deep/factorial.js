/**
 * @description
 * @author cq
 * @Date 2021-01-03 19:59:32
 * @LastEditTime 2021-01-03 20:03:17
 * @LastEditors cq
 */

/*
    使用递归 求n的阶乘
    假设 写好了一个函数 factorial
    1:1
    2:1*2  ->fn(1)*2
    3:1*2*3 ->fn(2)*3
    4:1*2*3*4 ->fn(3)*4
    ...
    n:1*2*3...*n ->factorial(n-1)*n
*/

const factorial=(n)=>{
  // 条件是
  if (n == 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(100));

