/**
 * @description 手机号脱敏处理
 * @author cq
 * @Date 2021-03-02 10:54:45
 * @LastEditTime 2021-03-02 10:55:18
 * @LastEditors cq
 */

 
const encryptReg = (before = 3, after = 4) => {
  return new RegExp('(\\d{' + before + '})\\d*(\\d{' + after + '})');
};

'13456789876'.replace(encryptReg(), '$1****$2')   //"134****9876"