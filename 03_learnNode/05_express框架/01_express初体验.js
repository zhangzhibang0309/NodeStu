const express = require("express");

// express其实是一个函数：createApplication
// 返回app
const app = express();

// 监听默认路径
app.get("/", (req, res, next) => {
  res.end("hello express");
});

app.post("/login", (req, res, next) => {
    res.end('login!');
  });

app.listen(1123, () => {
  console.log("express启动成功");
});
