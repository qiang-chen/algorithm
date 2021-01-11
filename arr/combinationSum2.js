/**
 * @description 加起来的值为目标值的组合
 * @author cq
 * @Date 2021-01-11 10:39:34
 * @LastEditTime 2021-01-11 14:56:15
 * @LastEditors cq
 */

// function duplicate(array) {
//   let arr = []
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     arr.push(element.sort().join(","))
//   }
//   return [...new Set(arr)]
// }

// function deep(num, target, arr) {
//   for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     // 第一次循环把直接两数相加等于目标值的数找出来
//     const i = num.indexOf(target - element);
//     if (i != -1) {
//       arr.push([element, num[i]]);
//     } else {
//       return deep(num, target - element)
//     }
//   }
//   return arr
// }


// function combinationSum2(num, target) {
//   let arr=[];
//   for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     // 第一次循环把直接两数相加等于目标值的数找出来
//     const i = num.indexOf(target - element);
//     if (i!=-1){
//       arr.push([element, num[i]]);
//     }else{
//       deep(num, target - element, arr)
//     }
//   }
//   return duplicate(arr).map(item=>item.split(","))
// }

function combinationSum2(num, target) {
  num.sort((a, b) => a - b);
  let res = [];  //最终结果
  let temp = [];
  find(num, 0, target, temp, res);
  return res;
}
function find(num, start, target, temp, res) {
  // 当目标值减到0了就终止整个递归
  if (target == 0) {
    res.push([...temp]);
    return;
  }
  // target >= num[i] 如果目标值不如当前值大了就没有意思了
  for (let i = start; i < num.length && target >= num[i]; i++) {
    // 当下标大于0的时候且上一项与当前项相等的时候直接跳过
    console.log(i, start,"i, start");
    if (i > start && num[i] == num[i - 1]) {
      continue;
    }
    temp.push(num[i]);  //依次push 10-10-20-50  不合适-50 （10-10-20）再进去此时start保留在了3 不合适-20 再往后 加60合适
    console.log(temp, "temp-start");
    find(num, i + 1, target - num[i], temp, res);
    console.log(temp,"temp");
    temp.pop();
    console.log(temp, "pop");
  }
}

// [100,10,20,70,60,10,50],80
console.log(combinationSum2([100, 10, 20, 70, 60, 10, 50], 80));
// 返回 [[10,10,60],[10,20,50],[10,70],[20,60]]