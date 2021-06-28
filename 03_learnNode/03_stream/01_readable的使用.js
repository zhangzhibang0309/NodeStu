const fs = require("fs");

// fs不能精准读取
// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data);
// });

// 流的方式读取
const reader = fs.createReadStream("./foo.txt", {
  start: 3,
  end: 10,
  highWaterMark: 2,
});

// 数据读取的过程
reader.on("data", (data) => {
  console.log(data);
  //   <Buffer 6c 6f>
  //   <Buffer 20 6e>
  reader.pause();

  setTimeout(() => {
    reader.resume();
  }, 1000);
});

// 文件打开
reader.on("open", () => {
  console.log("文件被打开");
});
// 文件关闭
reader.on("close", () => {
  console.log("文件被关闭");
});
