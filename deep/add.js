/**
 * @description 求和
 * @author cq
 * @Date 2021-01-05 19:52:33
 * @LastEditTime 2021-01-05 20:14:41
 * @LastEditors cq
 */

// 求前一百的和

const add=(num)=>{
  if(num==1){
    return 1
  }
  return add(num - 1) + num
}

console.log(add(100));