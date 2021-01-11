/**
 * @description 数组中相加和为0的三元组
 * @author cq
 * @Date 2021-01-11 15:07:04
 * @LastEditTime 2021-01-11 16:20:25
 * @LastEditors cq
 */

function threeSum(num) {
  let temp = [];
  let res = [];
  num.sort((a, b) => a - b);
  find(num, 0, temp, res);
  return res
  function find(num, start, temp, res) {
    if (temp.length == 3) {
      const [a, b, c] = temp;
      if (a + b + c == 0) {
        res.push([...temp])
        return
      }
    }
    for (let index = start; index < num.length; index++) {
      const element = num[index];
      // 主要目的就是去重
      if (index > start && element == num[index - 1]) {
        continue
      }
      temp.push(element)
      find(num, index + 1, temp, res)
      temp.pop()
    }
  }
}

function threeSum1(num) {
  // write code here
  num.sort((a, b) => a - b)
  let res = [], len = num.length
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1, k = len - 1
    // k , j 分别表示尾部开始的最后一项和当前想的下一项
    if (i == 0 || num[i] != num[i - 1]) {
      while (k > j) {
        if (num[i] + num[j] + num[k] == 0) {
          // 满足条件 直接放进
          res.push([num[i], num[j], num[k]])
          // 头部去重（如果后面一个数跟当前的数字相等，则代表有重复的结果生成，跳过）
          while (j + 1 < k && num[j + 1] === num[j]) j++;
          // 尾部去重（如果前面一个数跟当前的数字相等，则代表有重复的结果生成，跳过）
          while (k - 1 > j && num[k - 1] === num[k]) k--;

          k--;
          j++
        } else if (num[i] + num[j] + num[k] > 0) {
          // 因为当前数组是按照从小到大排序的  所以如果三项大于0 肯定越往后越大于0
          // 反之一样
          k--
        } else if (num[i] + num[j] + num[k] < 0) {
          j++
        }
      }
    }
  }
  return res
}

console.log(threeSum([-2, 0, 1, 1, 2, -3, -4, 3, 4,-3,3]), "threeSum");  //[[-2,0,2],[-2,1,1]]
console.log(threeSum1([-2, 0, 1, 1, 2, -3, -4, 3, 4,-3,3]), "threeSum1");  //[[-2,0,2],[-2,1,1]]

