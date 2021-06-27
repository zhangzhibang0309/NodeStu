const fs = require("fs");

// 1. 写文件
const message = "never give up!";

// 这就是普通的异步写文件，{}的flag可以设置一些权限。
// 1. w打开文件写入，写文件的默认值。  
// 2. w+打开文件读写，不存在则创建文件。
// 3. r打开文件读取，读文件的默认值。
// 4. r+打开文件读写，文件不存在抛出异常。
// 5. a打开文件写入，将流放在末尾（不然读写是会覆盖源文件内容的），如果不存在则创建文件。
// 6. a+打开文件读写，将流放在末尾，如果不存在则创建文件。
fs.writeFile("hello.txt", message, { flag: "a" }, (err) => {
  console.log(err);
});

// 2. 读文件
// 如果没有写encoding的话，那么读出来的是字节流<Buffer 48 65 6c 6c 6f 20 43 61 74 61 6c 69 6e 61 21>
// encoding可以设置编码，这里设置utf-8之后内容就可以正常显示了。
fs.readFile("hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data); 
});
