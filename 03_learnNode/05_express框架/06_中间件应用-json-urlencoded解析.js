const express = require("express");

const app = express();

// 匹配某种格式
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       const info = JSON.parse(data.toString());
//       req.body = info;
//     });

//     req.on("end", () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

// body-parser: express3.x 内置到express框架
// body-parser: express4.x 被分离出去
// body-parser类似功能: express4.16.x 内置成函数
// 下面这个函数直接封装了上面写的功能
app.use(express.json());
// extended
// true:那么对urlencoded进行解析时，它使用的是第三方库：qs
// false：那么对urlencoded进行解析时，它使用的是node内置模块：querystring
app.use(express.urlencoded({ extended: true }));

// login匹配
app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("catalina,welcome back~");
});

// product匹配
app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.end("upload product info success~");
});

app.listen(1123, () => {
  console.log("express初体验服务启动成功");
});
