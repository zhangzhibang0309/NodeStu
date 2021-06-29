const express = require("express");

const app = express();

// 路径和方法匹配的中间件
app.use((req, res, next) => {
  console.log("common middleware01");
  next();
});

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware01");
  res.end("success");
});

app.post("/home", (req, res, next) => {
  console.log("home path and method middleware01 post");
  // res.end("success");
});

app.listen(1123, () => {
  console.log("express初体验服务启动成功");
});
