const fs = require("fs");

//案例： 读取文件的信息
const filepath = "./hello.txt";

// 方式1：同步操作 会阻塞
// const info = fs.statSync(filepath);
// console.log("后续需要执行的代码");
// console.log(info);

// 方式2：普通的异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(info);
// });
// console.log("后续需要执行的代码");

//方式3：promise
fs.promises
  .stat(filepath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("后续需要执行的代码");
