const fs = require("fs");

// 嵌套乱
fs.readFile("./bar.txt", (err, data) => {
  fs.writeFile("./baz.txt", data, (err) => {
    console.log(err);
  });
});

// stream写法
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream("foz.txt");

reader.pipe(writer);
writer.end();
