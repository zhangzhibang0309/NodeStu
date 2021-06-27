const fs = require("fs");
const sharp = require("sharp");

// 读取文本文件
// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });

// 读取图片encoding就不能用了
// fs.readFile("./nanase.png", (err, data) => {
//   console.log(data);

//   // 复制这个图片
//   fs.writeFile("./foo.png", data, (err) => {
//     console.log(err);
//   });
// });

// sharp库的使用
// sharp('./foo.png')
//   .resize(200,200)
//   .toFile('./fii.png')

sharp("./foo.png")
  .resize(300, 300)
  .toBuffer()
  .then((data) => {
    fs.writeFile("./fuu.png", data, (err) => {
      console.log(err);
    });
  });
