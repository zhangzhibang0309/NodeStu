const fs = require("fs");
const path = require("path");

// 1. 创建文件夹
const dirname = "./zzbzzb";

// if (!fs.existsSync(dirname)) {
//   fs.mkdir(dirname, (err) => {
//     console.log(err);
//   });
// }

// 2. 读取文件夹中的所有文件

// 但是这种没法读取zzb下面的文件夹里面的内容，只能读这一层
// fs.readdir(dirname, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// 下面是读取所有文件，递归读取所有文件夹里面的内容。
// 加上这个withFileTypes之后，拿到的文件就不只是个字符串了，是个对象，这个对象有方法判断自己是不是文件。
function getFile(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        const filePath = path.resolve(dirname, file.name);
        getFile(filePath);
      } else {
        console.log(file.name);
      }
    });
  });
}

getFile(dirname);

// 3. 重命名
// fs.rename("./zzb", "./zzbzzb", (err) => {
//   console.log(err);
// });
