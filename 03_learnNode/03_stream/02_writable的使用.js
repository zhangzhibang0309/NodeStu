const fs = require("fs");

// 传统的写入方式
// fs.writeFile("./bar.txt","hello stream",err => {
//     console.log(err)
// })

// stream的写入方式
const write = fs.createWriteStream("./bar.txt", {
  flags: "r+",
  // start这个属性再windows下貌似不行 但是把flag改成r+的话可以
  start: 4,
});

// 开始写
write.write("aaa", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("写入成功");
});

// write.write("李银河", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("第二次写入成功");
// });

// write.close() 用的少
// end 相当于先写入 再用close
write.end('hello world')

// 验证文件一直没有被关闭
write.on("close", () => {
  console.log("文件被关闭");
});
