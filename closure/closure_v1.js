/**
 * @description 参杂一个闭包看看
 * @author cq
 * @Date 2021-01-11 18:05:16
 * @LastEditTime 2021-01-11 20:01:45
 * @LastEditors cq
 */

function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n)
    }
  }
}

//注意看 最外层和最内层都有一个n
// var a = fun(0);//undefined  此时n=0  闭包
// a.fun(1);  //0
// a.fun(2);  //0
// a.fun(3)  //0

// undefined--0--1--2
// var b = fun(0).fun(1).fun(2).fun(3)


// undefined--0     1 1
var c = fun(0).fun(1); c.fun(2); c.fun(3)