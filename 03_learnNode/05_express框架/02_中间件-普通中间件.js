const express = require("express");

const app = express();

// 编写普通的中间件
// ues注册一个中间件（回调函数）
app.use((req, res, next) => {
  console.log("注册了第01个普通的中间件~");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第02个普通的中间件~");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第03个普通的中间件~");
  res.end("hello world");
});

app.use((req, res, next) => {
  console.log("注册了第04个普通的中间件~");
});

app.listen(1123, () => {
  console.log("express初体验服务启动成功");
});
