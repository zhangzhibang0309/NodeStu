const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("注册了第01个普通的中间件~");
  next()
});

// 路径匹配的中间件
app.use("/home", (req, res, next) => {
  console.log("home middleware1");
  next()
});

app.use((req, res, next) => {
  console.log("注册了第02个普通的中间件~");
  next()
});

app.use("/home", (req, res, next) => {
  console.log("home middleware2");
  res.end("home middleware");
});

app.listen(1123, () => {
  console.log("express初体验服务启动成功");
});