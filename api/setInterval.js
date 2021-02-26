/**
 * @description setInterval的缺陷
 * @author cq
 * @Date 2021-02-26 11:08:06
 * @LastEditTime 2021-02-26 14:12:52
 * @LastEditors cq
 */


let startTime = new Date().getTime();
console.log("初试时间", new Date());
let count = 0;
//耗时任务
// setInterval(function () {
//   let i = 0;
//   while (i++ < 1000000000);
// }, 0);

// setInterval(function () {
//   count++;
//   console.log(
//     "与原设定的间隔时差了：",
//     new Date().getTime() - (startTime + count * 1000),
//     "毫秒"
//   );
//   // console.log("当前时间", new Date());
// }, 1000);

// 与原设定的间隔时差了： 1157 毫秒
// 与原设定的间隔时差了： 2344 毫秒
// 与原设定的间隔时差了： 3506 毫秒
// 与原设定的间隔时差了： 4613 毫秒
// 与原设定的间隔时差了： 5715 毫秒

//由打印结果可得  第二个定时任务并不是一秒执行一次的
// 并且时间差越来越大了 

//当然上述代码是通过一个一个异步任务的阻塞演示的
//实际场景并不会有人这么去做  但是定时器中去发布请求以及操作dom同样会造成这种误差出现的
//在这一篇简短的文件并不能模拟这种场景 但是完全可以把上面的阻塞当成请求或者dom操作来模拟


/*

let startTime = new Date().getTime();
let count = 0;

setInterval(() => {
  let i = 0;
  while (i++ < 10000000); // 假设的网络延迟或者操作大量的dom
  count++;
  console.log(
    "与原设定的间隔时差了：",
    new Date().getTime() - (startTime + count * 1000),
    "毫秒"
  );
}, 1000)

*/

//为什么会造成这种问题呢？？？
/*
  定时器指定的时间间隔，表示的是何时将定时器的代码添加到消息队列，而不是何时执行代码。
  所以真正何时执行代码的时间是不能保证的，取决于何时被主线程的事件循环取到，并执行。
  换取话说就是上面的代码每隔一秒钟把定时器的函数放在了异步任务去执行了
  但是由于函数里面的内容不同 什么时候执行完毕呢  这个并不能保证
  这也说明我们通过setInterval去做一些精准的请求不能往往会出现误差的
*/


//那么无解了嘛

//当前不是喽 可以用setTimeout替换setInterval

/*
  每个 setTimeout 产生的任务会直接 push 到任务队列中；
  而 setInterval 在每次把任务 push 到任务队列前，
  都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。
*/

//下面就是实现过程

let timer = null
function interval(func, wait) {
  let interv = function () {
    func.call(null);
    timer = setTimeout(interv, wait);
  };
  timer = setTimeout(interv, wait);
}

interval(function () {
  let i = 0;
  while (i++ < 10000000);
  console.log("当前时间", new Date())
}, 1000);

// 终止
if (timer) {
  window.clearSetTimeout(timer);
  timer = null;
}