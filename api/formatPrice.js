/**
 * @description 将金钱格式化
 * @author cq
 * @Date 2021-03-02 10:50:30
 * @LastEditTime 2021-03-02 10:51:42
 * @LastEditors cq
 */


// 比如说 999999999，直接阅读很不直观，格式化后 999,999,999

function formatPrice(price) {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatPrice(price) {
  return String(price)
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}

(999999999).toLocaleString()

const options = {
  style: 'currency',
  currency: 'CNY',
};
(123456).toLocaleString('zh-CN', options); // ¥123,456.00
