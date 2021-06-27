const fs = require("fs");

// 下面俩都是异步调用
fs.open("./hello.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.fstat(fd, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info);
  });
});

console.log("放在文件最后")